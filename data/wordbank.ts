import type { WordBank } from "@/types";

export class WordBankError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "WordBankError";
  }
}

export const WORD_BANKS: Record<string, WordBank> = {
  trap: {
    style: "trap",
    prefixes: ["Lil", "Big", "Young", "DJ", "King", "Baby", "Yung", "MC", "Sir", "OG"],
    firstNames: [
      "Drip", "Ghost", "Savage", "Blaze", "Venom", "Razor", "Flex", "Storm", "Bandit", "Chrome",
      "Phantom", "Stackz", "Diesel", "Viper", "Onyx", "Turbo", "Havoc", "Knox", "Toxic", "Rebel",
      "Cipher", "Flame", "Neon", "Dagger", "Slick", "Mamba", "Trigger", "Nova", "Jet", "Riot"
    ],
    lastNames: [
      "Da Don", "Cartel", "No Mercy", "In The Cut", "X", "The Plug", "From The Block", "On Fire",
      "2 Times", "No Sleep", "The Ruler", "Cold Blood", "No Cap", "Of Chaos", "No Limit", "Supreme",
      "In Silence", "Unchained", "The Phantom", "Forever"
    ]
  },
  oldschool: {
    style: "oldschool",
    prefixes: ["MC", "DJ", "Grand", "Kid", "Professor", "Master", "Big", "Cool", "Sir"],
    firstNames: [
      "Rhythm", "Scratch", "Boom", "Cipher", "Groove", "Mic", "Flow", "Spin", "Classic", "Verse",
      "Punch", "Tempo", "Vinyl", "Echo", "Beat", "Rhyme", "Apollo", "Shuffle", "Bop", "Soul",
      "Hype", "Golden", "Cadence", "Fusion", "Breeze", "Rocket", "Electric", "Legend", "Dynamo", "Crate"
    ],
    lastNames: [
      "The Great", "Rockwell", "In Stereo", "From Queens", "Supreme", "On Deck", "The Scholar", "Fresh",
      "Prime", "No Joke", "The Architect", "In Session", "Downtown", "Boombox", "On Wax", "Unlimited",
      "From Uptown", "The Veteran", "Mic Check", "Forever Fresh"
    ]
  },
  melodic: {
    style: "melodic",
    prefixes: ["Lil", "Saint", "Young", "Nova", "Aero", "Baby", "Echo", "Sky", "Moon"],
    firstNames: [
      "Harmony", "Velvet", "Dream", "Pulse", "Luna", "Echo", "Cascade", "Mirage", "Halo", "Sora",
      "Nimbus", "Aurora", "Jade", "Ivy", "Ocean", "Crown", "Sage", "Dawn", "Silk", "Rain",
      "Vibe", "Chorus", "Muse", "Bloom", "Sonnet", "Glow", "Whisper", "Prism", "Breeze", "Solace"
    ],
    lastNames: [
      "In The Sky", "Nocturne", "Heartline", "Forever", "The Wave", "Of Midnight", "No Gravity", "Radiant",
      "In Color", "Dreamstate", "Open Verse", "On Repeat", "Moonchild", "Of Summer", "Gold Tears", "From Eden",
      "Blue Note", "Afterglow", "Soft Flame", "In Stereo"
    ]
  }
};

const ensureWordBank = (entry: WordBank): void => {
  if (!entry.prefixes.length || !entry.firstNames.length || !entry.lastNames.length) {
    throw new WordBankError(`Word bank for style \"${entry.style}\" is invalid.`);
  }
};

Object.values(WORD_BANKS).forEach(ensureWordBank);

export const getWordBank = (styleId: string): WordBank => {
  const bank = WORD_BANKS[styleId];
  if (!bank) {
    throw new WordBankError(`Unknown style \"${styleId}\".`);
  }
  return bank;
};
