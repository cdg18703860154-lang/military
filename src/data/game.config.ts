import type { GameConfig } from "@/types/site";

export const gameConfig: GameConfig = {
  name: "Military Army Tycoon",
  slug: "military-army-tycoon",
  domain: "https://military-armytycoon.wiki",
  theme: {
    primaryColor: "#24D6D9",
    accentColor: "#7DD3FC",
    surfaceColor: "#0B1E27",
    style: "navy-field-manual"
  },
  currency: {
    name: "Cash",
    abbr: "CASH"
  },
  features: {
    hasCalculator: true,
    hasTierList: true,
    hasCodesPage: true,
    hasBrainrotIndex: false,
    hasHandbook: true
  },
  updateCadence: "Dated exact-game checks",
  dataSources: {
    officialGameUrl: "https://www.roblox.com/games/95409544559668/Military-Army-Tycoon",
    discord: "#",
    trello: "#"
  },
  ads: {
    publisher: "Adsterra",
    usesRuntimeConfig: true
  }
};
