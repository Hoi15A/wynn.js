import type {
  WynncraftRuns,
  WynncraftPvpStats,
  WynncraftGlobalData,
} from "./generalTypes.js";

export interface WynncraftRankColour {
  main: string;
  sub: string;
}

export interface WynncraftRaidStats {
  damageTaken: number;
  damageDealt: number;
  healthHealed: number;
  deaths: number;
  buffsTaken: number;
  gambitsUsed: number;
}

export interface WynncraftPlayerGlobalData extends WynncraftGlobalData {
  raidStats: WynncraftRaidStats;
}

export interface WynncraftPlayerGuild {
  uuid: string;
  name: string;
  prefix: string;
  rank: string;
  rankStars: string;
}

export interface WynncraftProfession {
  level: number;
  xpPercent: number;
}

export interface WynncraftProfessions {
  fishing: WynncraftProfession;
  woodcutting: WynncraftProfession;
  mining: WynncraftProfession;
  farming: WynncraftProfession;
  scribing: WynncraftProfession;
  jeweling: WynncraftProfession;
  alchemism: WynncraftProfession;
  cooking: WynncraftProfession;
  weaponsmithing: WynncraftProfession;
  tailoring: WynncraftProfession;
  woodworking: WynncraftProfession;
  armouring: WynncraftProfession;
}

export interface WynncraftPlayer {
  username: string;
  online: boolean;
  server: string | null;
  activeCharacter: string | null;
  activeCosmetics: string[] | null;
  nickname: string | null;
  uuid: string;
  rank: string;
  rankBadge: string | null;
  legacyRankColour: WynncraftRankColour | null;
  shortenedRank: string | null;
  supportRank: string | null;
  veteran: boolean | null;
  lastJoin: string | null;
  ranking: Record<string, number>;
  previousRanking: Record<string, number>;
  guild: WynncraftPlayerGuild | null;
  guildHistory: string[];
  firstJoin: string | null;
  playtime: number;
  globalData: WynncraftPlayerGlobalData;
  featuredStats: Record<string, string | number | null>;
  wallpaper: string;
  avatar: string;
  restrictions: Record<string, boolean>;
  characters?: Record<string, unknown> | null;
}

export interface WynncraftPlayerCharacter {
  type: string;
  reskin: string | null;
  nickname: string | null;
  level: number;
  xp: number;
  xpPercent: number;
  totalLevel: number;
  preEconomy: boolean | null;
  gamemode: string[] | null;
  contentCompletion: number;
  wars: number;
  playtime: number;
  mobsKilled: number;
  chestsFound: number;
  itemsIdentified: number;
  blocksWalked: number;
  logins: number;
  deaths: number;
  discoveries: number;
  pvp: WynncraftPvpStats;
  skillPoints: Record<string, number> | null;
  professions: WynncraftProfessions;
  dungeons: WynncraftRuns;
  raids: WynncraftRuns;
  worldEvents: number;
  lootruns: number;
  caves: number;
  quests: string[];
  restrictions: Record<string, boolean>;
  removedStat: string[];
  meta: Record<string, boolean>;
}
