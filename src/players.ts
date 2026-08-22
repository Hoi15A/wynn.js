import { API_BASE_URL } from "./config.js";
import { fetchApiJson } from "./http.js";

import type {
  WynncraftPlayer,
  WynncraftPlayerCharacter,
} from "./types/playerTypes.js";

export async function getPlayer(
  username: string,
  fullResult: boolean = false,
): Promise<WynncraftPlayer> {
  if (!username || typeof username !== "string") {
    throw new TypeError("Username must be a non-empty string");
  }

  return fetchApiJson<WynncraftPlayer>(
    `${API_BASE_URL}/player/${encodeURIComponent(username)}${fullResult ? "?fullResult" : ""}`,
    `Player "${username}" not found`,
  );
}

export async function getCharacters(
  username: string,
): Promise<Record<string, WynncraftPlayerCharacter>> {
  if (!username || typeof username !== "string") {
    throw new TypeError("Username must be a non-empty string");
  }

  return fetchApiJson<Record<string, WynncraftPlayerCharacter>>(
    `${API_BASE_URL}/player/${encodeURIComponent(username)}/characters`,
    `Player "${username}" not found`,
  );
}

export async function searchPlayers(username: string): Promise<string[]> {
  if (!username || typeof username !== "string") {
    throw new TypeError("Username must be a non-empty string");
  }

  const data = await fetchApiJson<{
    players: Record<string, { username: string }>;
  }>(`${API_BASE_URL}/search/${encodeURIComponent(username)}?only=players`);

  return Object.values(data.players).map((player) => player.username);
}
