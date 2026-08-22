export function isNetworkError(err: unknown): boolean {
  if (!(err instanceof Error)) {
    return false;
  }

  const details =
    `${err.message} ${String((err as { cause?: unknown }).cause ?? "")}`.toLowerCase();

  return details.includes("enotfound") || details.includes("econnrefused");
}

export function normalizeApiError(err: unknown): never {
  if (isNetworkError(err)) {
    throw new Error("Unable to reach Wynncraft API. Check your connection.");
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
      throw new Error(notFoundMessage);
    }

    if (res.status === 429) {
      throw new Error("Rate limit exceeded. Try again later.");
    }

    if (!res.ok) {
      throw new Error(`Failed to fetch: ${res.status} ${res.statusText}`);
    }

    return (await res.json()) as T;
  } catch (err) {
    normalizeApiError(err);
  }
}
