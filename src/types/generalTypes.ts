export interface WynncraftRuns {
  total: number;
  list: Record<string, number>;
}

export interface WynncraftPvpStats {
  kills: number;
  deaths: number;
}

export interface WynncraftGlobalData {
  contentCompletion: number;
  wars: number;
  totalLevel: number;
  mobsKilled: number;
  chestsFound: number;
  dungeons: WynncraftRuns;
  raids: WynncraftRuns;
  worldEvents: number;
  lootruns: number;
  caves: number;
  completedQuests: number;
  guildRaids: WynncraftRuns;
  pvp: WynncraftPvpStats;
}
