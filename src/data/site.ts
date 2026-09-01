import type { FaqItem, LinkCard, SiteConfig } from "@/types/site";
import { gameConfig } from "@/data/game.config";

const siteBrandName = "Military Army Tycoon Wiki";

export const siteConfig: SiteConfig = {
  name: siteBrandName,
  domain: gameConfig.domain,
  gameName: gameConfig.name,
  description: "Exact-game Military Army Tycoon guides for base economy, squads, Orders, captures, codes, Rebirth, and current Roblox links.",
  valueProposition: "Build the base, stabilize Cash, command squads, and capture strategic locations with an exact-game field guide.",
  shortDisclosure: `${siteBrandName} is an independent fan guide. Roblox and Battle Action remain the official sources for the game, purchases, moderation, and account support.`,
  lastUpdated: "2026-09-01",
  freshnessLabel: "exact-game evidence check",
  keywords: [
    "military army tycoon",
    "military army tycoon wiki",
    "military army tycoon codes",
    "military army tycoon guide",
    "military army tycoon rebirth"
  ],
  navGroups: [
    {
      label: "Army Builder",
      href: "/army-builder",
      items: []
    },
    {
      label: "Codes",
      href: "/codes",
      items: []
    },
    {
      label: "Tier List",
      href: "/tier-list",
      items: []
    },
    {
      label: "Guides",
      href: "/guides",
      items: [
        {
          label: "Getting Started",
          href: "/guides/getting-started",
          description: "Build the first Cash loop and command a Pistol Squad."
        },
        {
          label: "How to Get Cash",
          href: "/guides/how-to-get-cash",
          description: "Trace Droppers, Upgraders, Oil Containers, and collector risk."
        },
        {
          label: "How to Capture",
          href: "/guides/how-to-capture",
          description: "Use Orders and confirm the live strategic-location result."
        },
        {
          label: "Rebirth",
          href: "/guides/rebirth",
          description: "Read the dated cost and reset warning before confirming."
        }
      ]
    },
    {
      label: "Wiki",
      href: "/wiki",
      items: [
        {
          label: "Base Economy",
          href: "/wiki/base-economy",
          description: "Droppers, Upgraders, Oil Containers, and the Barracks handoff."
        },
        {
          label: "Squads",
          href: "/wiki/squads",
          description: "Observed Pistol, Rifle, and SMG Squad labels."
        },
        {
          label: "Weapons",
          href: "/wiki/weapons",
          description: "Current exact-game weapon labels and known limits."
        },
        {
          label: "Orders",
          href: "/wiki/orders",
          description: "Attack, Hold, Follow, and Retreat command notes."
        }
      ]
    },
    {
      label: "More",
      href: "/trello",
      items: [
        {
          label: "Official Links",
          href: "/trello",
          description: "Verified Roblox destinations and unverified-link warnings."
        },
        {
          label: "Updates",
          href: "/updates",
          description: "Dated creator-link checks without invented patch notes."
        },
        {
          label: "Gallery",
          href: "/gallery",
          description: "Three official exact-game Roblox images."
        },
        {
          label: "Sources",
          href: "/sources",
          description: "Identity, checked dates, evidence limits, and corrections."
        },
        {
          label: "About",
          href: "/about",
          description: "Who maintains this independent field guide."
        },
        {
          label: "Contact",
          href: "/contact",
          description: "Send a correction with exact-game evidence."
        },
        {
          label: "Privacy",
          href: "/privacy",
          description: "Analytics, advertising, and privacy details."
        },
        {
          label: "Terms",
          href: "/terms",
          description: "Site terms and acceptable use."
        },
        {
          label: "Disclosure",
          href: "/disclosure",
          description: "Fan-site and advertising disclosures."
        }
      ]
    }
  ]
};

export const heroActions = [
  { href: "/army-builder", label: "Build an army plan" },
  { href: "/guides/getting-started", label: "Start the field guide" },
  { href: "/codes", label: "Check codes" },
  { href: "/wiki", label: "Browse the wiki" }
];

export const officialLinks: LinkCard[] = [
  {
    title: "Official Roblox game",
    href: gameConfig.dataSources.officialGameUrl,
    eyebrow: "Roblox",
    description: "Military Army Tycoon by Battle Action at place 95409544559668."
  },
  {
    title: "Battle Action Roblox group",
    href: "https://www.roblox.com/communities/683115741/Battle-Action",
    eyebrow: "Creator",
    description: "The verified Roblox creator group for this exact experience."
  },
  {
    title: "Evidence and corrections",
    href: "/sources",
    eyebrow: "Field guide",
    description: "See checked dates, exact-game identifiers, source limits, and the correction path."
  }
];

export const tierPreview = [] as const;

export const guideTopicPages = [
  { href: "/guides/getting-started", label: "Getting Started" },
  { href: "/guides/how-to-get-cash", label: "How to Get Cash" },
  { href: "/guides/how-to-capture", label: "How to Capture" },
  { href: "/guides/rebirth", label: "Rebirth" }
] as const;

export const wikiTopicPages = [
  { href: "/wiki/base-economy", label: "Base Economy" },
  { href: "/wiki/squads", label: "Squads" },
  { href: "/wiki/weapons", label: "Weapons" },
  { href: "/wiki/orders", label: "Orders" }
] as const;

export const updateCards = [
  {
    href: "/updates",
    label: "Current evidence checks",
    description: "Dated Roblox metadata and creator-link checks for this exact game."
  }
] as const;

export const faqs: Record<"home" | "codes" | "tierList" | "calculator", FaqItem[]> = {
  home: [
    {
      q: "Which Roblox experience does this wiki cover?",
      a: "Military Army Tycoon by Battle Action, place 95409544559668 and universe 10698216738."
    },
    {
      q: "What should a new player build first?",
      a: "Current launch-window guides favor Droppers and Upgraders, followed by Oil Containers after the early Cash loop is working."
    },
    {
      q: "Does progress autosave?",
      a: "The official Roblox description says Military Army Tycoon progress autosaves."
    },
    {
      q: "Is this the official game website?",
      a: "No. This is an independent fan guide that links back to the exact Roblox game and Battle Action group."
    }
  ],
  codes: [
    {
      q: "Which Military Army Tycoon codes are currently listed?",
      a: "The Codes page records Joined and Bonus with their dated launch-window reports and eligibility notes."
    },
    {
      q: "Where is the code box?",
      a: "Checked exact-game footage shows the Codes control inside Settings; use the current client if the UI moves."
    }
  ],
  tierList: [
    {
      q: "Why does the tier list avoid fixed ranks?",
      a: "The checked material does not provide a complete comparable roster or statistics, so the page uses role-first tests instead of invented ranks."
    }
  ],
  calculator: [
    {
      q: "Does the Army Builder calculate damage?",
      a: "No. It turns current base readiness and visible squads into a conservative checklist without inventing combat or income formulas."
    }
  ]
};
