export enum WynncraftItemType {
  Weapon = "weapon",
  Armour = "armour",
  Accessory = "accessory",
  Charm = "charm",
  Tome = "tome",
  Tool = "tool",
  Material = "material",
  Ingredient = "ingredient",
}

export enum WynncraftItemSubType {
  Bow = "bow",
  Dagger = "dagger",
  Relik = "relik",
  Spear = "spear",
  Wand = "wand",
  Boots = "boots",
  Chestplate = "chestplate",
  Helmet = "helmet",
  Leggings = "leggings",
  Bracelet = "bracelet",
  Necklace = "necklace",
  Ring = "ring",
  GuildTome = "guildTome",
  armourTome = "armourTome",
  expertiseTome = "expertiseTome",
  MarathonTome = "marathonTome",
  MysticismTome = "mysticismTome",
  LootrunTome = "lootrunTome",
  WeaponTome = "weaponTome",
  Axe = "axe",
  Rod = "rod",
  Pickaxe = "pickaxe",
  Scythe = "scythe",
  Farming = "farming",
  Fishing = "fishing",
  Mining = "mining",
  Woodcutting = "woodcutting",
}

export enum WynncraftItemEmblem {
  Diamond1 = "diamond1",
  Diamond2 = "diamond2",
  Diamond3 = "diamond3",
  Diamond4 = "diamond4",
  Diamond5 = "diamond5",
  Diamond6 = "diamond6",
  Diamond_1 = "diamond_1",
  Diamond_2 = "diamond_2",
  Diamond_3 = "diamond_3",
  Diamond_4 = "diamond_4",
  Diamond_5 = "diamond_5",
  Diamond_6 = "diamond_6",
  Shield1 = "shield1",
  Shield2 = "shield2",
  Shield3 = "shield3",
  Shield4 = "shield4",
  Shield5 = "shield5",
  Shield6 = "shield6",
  Shield_1 = "shield_1",
  Shield_2 = "shield_2",
  Shield_3 = "shield_3",
  Shield_4 = "shield_4",
  Shield_5 = "shield_5",
  Shield_6 = "shield_6",
  Sticker1 = "sticker1",
  Sticker2 = "sticker2",
  Sticker3 = "sticker3",
  Sticker4 = "sticker4",
  Sticker5 = "sticker5",
  Sticker6 = "sticker6",
  Sticker_1 = "sticker_1",
  Sticker_2 = "sticker_2",
  Sticker_3 = "sticker_3",
  Sticker_4 = "sticker_4",
  Sticker_5 = "sticker_5",
  Sticker_6 = "sticker_6",
  Square1 = "square1",
  Square2 = "square2",
  Square3 = "square3",
  Square4 = "square4",
  Square5 = "square5",
  Square6 = "square6",
  Square_1 = "square_1",
  Square_2 = "square_2",
  Square_3 = "square_3",
  Square_4 = "square_4",
  Square_5 = "square_5",
  Square_6 = "square_6",
}

export enum WynncraftItemTier {
  Rare = "rare",
  Unique = "unique",
  Normal = "normal",
  Legendary = "legendary",
  Mythic = "mythic",
  Fabled = "fabled",
  Tier3 = "TIER3",
  Tier2 = "TIER2",
  Tier1 = "TIER1",
  Tier0 = "TIER0",
}

export enum WynncraftItemAttackSpeed {
  Slow = "slow",
  Fast = "fast",
  SuperSlow = "superSlow",
  Normal = "normal",
  VerySlow = "verySlow",
  VeryFast = "veryFast",
  SuperFast = "superFast",
}

export enum WynncraftItemGathering {
  Farming = "farming",
  Fishing = "fishing",
  Mining = "mining",
  Woodcutting = "woodcutting",
}

export enum WynncraftItemSet {
  Boundless = "boundless",
  Corrupted = "corrupted",
  Firemoss = "firemoss",
  Bony = "bony",
  Spore = "spore",
  Petal = "petal",
  Scrap = "scrap",
  Beachside = "beachside",
  Pigman = "pigman",
  Toxic = "toxic",
  Regal = "regal",
  Vexing = "vexing",
  Voidglass = "voidglass",
  CosmicFoundations = "cosmicFoundations",
  Snail = "snail",
  ThanosLegionnaire = "thanosLegionnaire",
  Uth = "uth",
  Cosmic = "cosmic",
  Leaf = "leaf",
  Tribal = "tribal",
  Saints = "saint's",
  Visceral = "visceral",
  Ascension = "ascension",
  Ultramarine = "ultramarine",
  taigaElk = "taigaElk",
  Clock = "clock",
  Nii = "nii",
  Moirai = "moirai",
  Bleeding = "bleeding",
  Liffmail = "liffmail",
  Elf = "elf",
  Slime = "slime",
  Goblin = "goblin",
  Ghostly = "ghostly",
  Horse = "horse",
  Snow = "snow",
  Skiens = "skien's",
  ThunderRelic = "thunderRelic",
  Morph = "morph",
  Black = "black",
  earthRelic = "earthRelic",
  WaterRelic = "waterRelic",
  Relic = "relic",
  Outlaw = "outlaw",
  Silverfish = "silverfish",
  Nether = "nether",
  FireRelic = "fireRelic",
  AirRelic = "airRelic",
  Adventurer = "adventurer",
  Darkened = "darkened",
  Bovine = "bovine",
  Bear = "bear",
  Kaerynn = "kaerynn",
  Villager = "villager",
  Spider = "spider",
  ConqueredSkies = "conqueredSkies",
  SynchCore = "synchCore",
  FlashFire = "flashFire",
  Jester = "jester",
  ForgottenChronicles = "forgottenChronicles",
  Wynnterfest2016 = "wynnterfest2016",
  Bandits = "bandit's",
  Desert = "desert",
  BlackCatalyst = "blackCatalyst",
  Constellation = "constellation",
  Hallowynn2016 = "hallowynn2016",
}

export type WynncraftItemSetName = WynncraftItemSet | (string & {});

export interface WynncraftItem {
  displayName: string;
  internalName: string;
  type: WynncraftItemType;
  subType: WynncraftItemSubType;
  Icon: object;
  emblem: WynncraftItemEmblem;
  tier: WynncraftItemTier;
  attackSpeed?: WynncraftItemAttackSpeed;
  averageDps?: number;
  restriction?: string;
  dropRestriction?: string;
  gathering?: WynncraftItemGathering;
  set?: WynncraftItemSetName;
  elements?: string[];
  requirements?: object; // TODO: finish this
  majorIds?: Record<string, string>;
  powderSlots?: number;
  lore?: string;
  identifications?: Record<string, number | object>;
  base?: Record<string, number | object>;
}
