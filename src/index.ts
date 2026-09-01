import { getPlayer, getCharacters, searchPlayers } from "./players.js";
import { getGuild } from "./guilds.js";
import { searchItem } from "./items.js";

export const players = {
  get: getPlayer,
  getCharacters,
  search: searchPlayers,
};

export const guilds = {
  get: getGuild,
};

export const items = {
  search: searchItem,
};

export default {
  players,
  guilds,
  items,
};

export type * from "./types/generalTypes.js";
export type * from "./types/guildTypes.js";
export * from "./types/itemTypes.js";
export type * from "./types/playerTypes.js";
