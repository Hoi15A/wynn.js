import { getPlayer, getCharacters, searchPlayers } from './players.js'
import { getGuild } from './guilds.js'
import { searchItem } from './items.js'

export const players = {
  get: getPlayer,
  getCharacters,
  search: searchPlayers,
}

export const guilds = {
  get: getGuild,
}

export const items = {
  search: searchItem,
}

export default {
  players,
  guilds,
  items,
}