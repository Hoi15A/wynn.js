import assert from "node:assert/strict";

import { fetchApiJson, normalizeApiError, WynnApiError } from "../src/http.js";
import { searchPlayers } from "../src/players.js";

const originalFetch = globalThis.fetch;

assert.throws(
  () => normalizeApiError(new Error("fetch failed: ENOTFOUND")),
  /Unable to reach Wynncraft API\. Check your connection\./,
);

assert.throws(
  () => normalizeApiError(new Error("fetch failed: ECONNREFUSED")),
  /Unable to reach Wynncraft API\. Check your connection\./,
);

const timeoutCause = Object.assign(new Error("connect timed out"), {
  code: "ETIMEDOUT",
});

assert.throws(
  () =>
    normalizeApiError(
      new TypeError("fetch failed", {
        cause: timeoutCause,
      }),
    ),
  (err: unknown) => {
    assert.ok(err instanceof Error);
    assert.match(
      err.message,
      /Unable to reach Wynncraft API\. Check your connection\./,
    );
    assert.ok((err as Error & { cause?: unknown }).cause instanceof TypeError);
    return true;
  },
);

assert.throws(
  () => normalizeApiError(new Error("Rate limit exceeded. Try again later.")),
  /Rate limit exceeded\. Try again later\./,
);

globalThis.fetch = async () =>
  new Response(null, {
    status: 404,
    statusText: "Not Found",
  });

await assert.rejects(
  () =>
    fetchApiJson(
      "https://api.wynncraft.com/v3/player/missing",
      'Player "missing" not found',
    ),
  (err: unknown) => {
    assert.ok(err instanceof WynnApiError);
    assert.equal(err.status, 404);
    assert.equal(err.message, 'Player "missing" not found');
    return true;
  },
);

globalThis.fetch = async () =>
  new Response(null, {
    status: 429,
    statusText: "Too Many Requests",
  });

await assert.rejects(
  () => fetchApiJson("https://api.wynncraft.com/v3/player/rate-limit"),
  (err: unknown) => {
    assert.ok(err instanceof WynnApiError);
    assert.equal(err.status, 429);
    assert.equal(err.message, "Rate limit exceeded. Try again later.");
    return true;
  },
);

globalThis.fetch = async () =>
  new Response(null, {
    status: 404,
    statusText: "Not Found",
  });

const noMatches = await searchPlayers("definitely-not-a-real-user-query");
assert.deepEqual(noMatches, []);

globalThis.fetch = async () =>
  new Response(null, {
    status: 429,
    statusText: "Too Many Requests",
  });

await assert.rejects(
  () => searchPlayers("rate-limit-case"),
  (err: unknown) => {
    assert.ok(err instanceof WynnApiError);
    assert.equal(err.status, 429);
    return true;
  },
);

globalThis.fetch = originalFetch;

console.log("error handling test passed");
