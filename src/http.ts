const NETWORK_ERROR_CODES = new Set([
  "ENOTFOUND",
  "ECONNREFUSED",
  "ETIMEDOUT",
  "ECONNRESET",
  "EAI_AGAIN",
]);

export class WynnApiError extends Error {
  status: number;

  constructor(message: string, status: number, options?: ErrorOptions) {
    super(message, options);
    this.name = "WynnApiError";
    this.status = status;
  }
}

function getErrorCode(err: unknown): string | null {
  if (!err || typeof err !== "object") {
    return null;
  }

  const code = (err as { code?: unknown }).code;
  return typeof code === "string" ? code.toUpperCase() : null;
}

function getErrorMessage(err: unknown): string {
  if (err instanceof Error) {
    return err.message.toLowerCase();
  }

  return "";
}

function isNetworkErrorCause(cause: unknown): boolean {
  const code = getErrorCode(cause);
  if (code && NETWORK_ERROR_CODES.has(code)) {
    return true;
  }

  const message = getErrorMessage(cause);
  return (
    message.includes("enotfound") ||
    message.includes("econnrefused") ||
    message.includes("etimedout") ||
    message.includes("econnreset") ||
    message.includes("eai_again") ||
    message.includes("timed out")
  );
}

export function isNetworkError(err: unknown): boolean {
  if (err instanceof TypeError && "cause" in err && err.cause) {
    return isNetworkErrorCause(err.cause);
  }

  if (!(err instanceof Error)) {
    return false;
  }

  return isNetworkErrorCause(err);
}

export function normalizeApiError(err: unknown): never {
  if (isNetworkError(err)) {
    throw new Error("Unable to reach Wynncraft API. Check your connection.", {
      cause: err,
    });
  }

  throw err;
}

export async function fetchApiJson<T>(
  url: string,
  notFoundMessage?: string,
): Promise<T> {
  try {
    const res = await fetch(url);

    if (res.status === 404 && notFoundMessage) {
      throw new WynnApiError(notFoundMessage, 404);
    }

    if (res.status === 404) {
      throw new WynnApiError("Requested resource not found.", 404);
    }

    if (res.status === 300) {
      throw new WynnApiError(
        "Multiple choices. The requested resource has multiple representations.",
        300,
      );
    }

    if (res.status === 429) {
      throw new WynnApiError("Rate limit exceeded. Try again later.", 429);
    }

    if (!res.ok) {
      throw new WynnApiError(
        `Failed to fetch: ${res.status} ${res.statusText}`,
        res.status,
      );
    }

    return (await res.json()) as T;
  } catch (err) {
    normalizeApiError(err);
  }
}
