import type { WynncraftGlobalData, WynncraftRuns } from "./generalTypes.js";

export interface WynncraftGuildMemberGlobalData extends WynncraftGlobalData {
  currentGuildRaids: WynncraftRuns;
  playtime: number;
}
export interface WynncraftGuildBanner {
  base: string;
  tier: number;
  structure: string;
  layers: unknown[];
}

export interface WynncraftGuildSeasonRank {
  rating: number;
  finalTerritories: number;
}

export type WynncraftGuildSeasonRanks = Record<
  string,
  WynncraftGuildSeasonRank
>;

export interface WynncraftGuildMembers {
  total: number;
  owner: Record<string, WynncraftGuildMember>;
  chief: Record<string, WynncraftGuildMember>;
  strategist: Record<string, WynncraftGuildMember>;
  captain: Record<string, WynncraftGuildMember>;
  recruiter: Record<string, WynncraftGuildMember>;
  recruit: Record<string, WynncraftGuildMember>;
}

export interface WynncraftGuildMemberRestrictions {
  online_status: boolean;
  main_access: boolean;
  guild_high_ranked_access: boolean;
}

export interface WynncraftGuildMemberWeekly {
  completed: boolean;
  streak: number;
}

export interface WynncraftGuildMember {
  online: boolean;
  lastJoin: string | null;
  server: string | null;
  contributed: number;
  contributionRank: number;
  joined: string;
  weekly: WynncraftGuildMemberWeekly;
  globalData: WynncraftGuildMemberGlobalData;
  restrictions: WynncraftGuildMemberRestrictions;
  uuid: string;
  username: string;
}

export interface WynncraftGuild {
  uuid: string;
  name: string;
  prefix: string;
  level: number;
  xpPercent: number;
  territories: number;
  wars: number;
  raids: number;
  created: string;
  members: WynncraftGuildMembers;
  online: number;
  banner: WynncraftGuildBanner;
  seasonRanks: WynncraftGuildSeasonRanks;
  ranking: Record<string, number>;
}
