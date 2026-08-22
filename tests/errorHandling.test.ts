import assert from "node:assert/strict";

import { normalizeApiError } from "../src/http.js";

assert.throws(
  () => normalizeApiError(new Error("fetch failed: ENOTFOUND")),
  /Unable to reach Wynncraft API\. Check your connection\./,
);

assert.throws(
  () => normalizeApiError(new Error("fetch failed: ECONNREFUSED")),
  /Unable to reach Wynncraft API\. Check your connection\./,
);

assert.throws(
  () => normalizeApiError(new Error("Rate limit exceeded. Try again later.")),
  /Rate limit exceeded\. Try again later\./,
);

console.log("error handling test passed");
