import { API_BASE_URL } from "./config.js";
import { fetchApiJson } from "./http.js";

import type { WynncraftGuild } from "./types/guildTypes.js";

export async function getGuild(guildName: string): Promise<WynncraftGuild> {
  if (!guildName || typeof guildName !== "string") {
    throw new TypeError("Guild name must be a non-empty string");
  }

  return fetchApiJson<WynncraftGuild>(
    `${API_BASE_URL}/guild/${encodeURIComponent(guildName)}`,
    `Guild "${guildName}" not found`,
  );
}
