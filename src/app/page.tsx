/* RB-AUTO-ASSET family=guide receipt=ffb21fb75b7d54083eec3261bb7e244bcaec7e99abd74f5398d3b0879d2fc242 content=4a247b87283a9761e09045fc347deadff735b2de4f3103db6023b0552d815e68 */
/* RB-AUTO-MANUAL semantic-integration-reviewed */
import { AdsterraArticleTop, AdsterraArticleMid, AdsterraArticleBottom } from "@/components/ads";
import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { FaqJsonLd, WebSiteJsonLd } from "@/components/seo/JsonLd";
const homePage = {
  "route": "/",
  "title": "Military Army Tycoon Wiki",
  "entities": [
    {
      "id": "page.entityRows[0]:base-economy",
      "name": "Base economy",
      "type": "entity"
    },
    {
      "id": "page.entityRows[1]:squad-command",
      "name": "Squad command",
      "type": "entity"
    },
    {
      "id": "page.entityRows[2]:strategic-capture",
      "name": "Strategic capture",
      "type": "entity"
    }
  ],
  "facts": [
    {
      "id": "page.entityRows[0]:base-economy.description",
      "subjectRef": "page.entityRows[0]:base-economy",
      "predicate": "description",
      "label": "Description",
      "rawValue": "Build and upgrade the base before expanding the army.",
      "value": "Build and upgrade the base before expanding the army."
    },
    {
      "id": "page.entityRows[0]:base-economy.known",
      "subjectRef": "page.entityRows[0]:base-economy",
      "predicate": "known",
      "label": "Known",
      "rawValue": "Build and upgrade the base before expanding the army.",
      "value": "Build and upgrade the base before expanding the army."
    },
    {
      "id": "page.entityRows[0]:base-economy.relationship",
      "subjectRef": "page.entityRows[0]:base-economy",
      "predicate": "relationship",
      "label": "Relationship",
      "rawValue": "supports squad readiness",
      "value": "supports squad readiness"
    },
    {
      "id": "page.entityRows[1]:squad-command.description",
      "subjectRef": "page.entityRows[1]:squad-command",
      "predicate": "description",
      "label": "Description",
      "rawValue": "Unlock squads and issue Orders for the current objective.",
      "value": "Unlock squads and issue Orders for the current objective."
    },
    {
      "id": "page.entityRows[1]:squad-command.known",
      "subjectRef": "page.entityRows[1]:squad-command",
      "predicate": "known",
      "label": "Known",
      "rawValue": "Unlock squads and issue Orders for the current objective.",
      "value": "Unlock squads and issue Orders for the current objective."
    },
    {
      "id": "page.entityRows[1]:squad-command.relationship",
      "subjectRef": "page.entityRows[1]:squad-command",
      "predicate": "relationship",
      "label": "Relationship",
      "rawValue": "supports capture attempts",
      "value": "supports capture attempts"
    },
    {
      "id": "page.entityRows[2]:strategic-capture.description",
      "subjectRef": "page.entityRows[2]:strategic-capture",
      "predicate": "description",
      "label": "Description",
      "rawValue": "Move prepared squads toward strategic locations and verify the live result.",
      "value": "Move prepared squads toward strategic locations and verify the live result."
    },
    {
      "id": "page.entityRows[2]:strategic-capture.known",
      "subjectRef": "page.entityRows[2]:strategic-capture",
      "predicate": "known",
      "label": "Known",
      "rawValue": "Move prepared squads toward strategic locations and verify the live result.",
      "value": "Move prepared squads toward strategic locations and verify the live result."
    },
    {
      "id": "page.entityRows[2]:strategic-capture.relationship",
      "subjectRef": "page.entityRows[2]:strategic-capture",
      "predicate": "relationship",
      "label": "Relationship",
      "rawValue": "completes the core loop",
      "value": "completes the core loop"
    }
  ],
  "relations": [],
  "sources": [
    {
      "id": "source-agent-001",
      "anchor": "source-agent-001",
      "label": "Local exact-game research dossier and monitoring run",
      "status": "",
      "scope": "",
      "url": "#source-agent-001",
      "checkedAt": "2026-09-01"
    },
    {
      "id": "source-roblox-001",
      "anchor": "source-roblox-001",
      "label": "Military Army Tycoon | Play on Roblox",
      "status": "",
      "scope": "",
      "url": "https://www.roblox.com/games/95409544559668/Military-Army-Tycoon",
      "checkedAt": "2026-09-01"
    },
    {
      "id": "source-roblox-002",
      "anchor": "source-roblox-002",
      "label": "Roblox place and universe metadata",
      "status": "",
      "scope": "",
      "url": "https://apis.roblox.com/universes/v1/places/95409544559668/universe",
      "checkedAt": "2026-09-01"
    },
    {
      "id": "source-roblox-003",
      "anchor": "source-roblox-003",
      "label": "Roblox official game thumbnails and Battle Action group",
      "status": "",
      "scope": "",
      "url": "https://thumbnails.roblox.com/v1/games/multiget/thumbnails?universeIds=10698216738\u0026countPerUniverse=10\u0026defaults=true\u0026size=768x432\u0026format=Png\u0026isCircular=false",
      "checkedAt": "2026-09-01"
    },
    {
      "id": "source-serp-002",
      "anchor": "source-serp-002",
      "label": "Guides, best/tier, and mechanic search surface",
      "status": "",
      "scope": "",
      "url": "#source-serp-002",
      "checkedAt": "2026-09-01"
    },
    {
      "id": "source-serp-004",
      "anchor": "source-serp-004",
      "label": "Reddit and negative-control searches",
      "status": "",
      "scope": "",
      "url": "#source-serp-004",
      "checkedAt": "2026-09-01"
    }
  ],
  "internalLinks": [
    {
      "href": "/codes",
      "label": "Military Army Tycoon codes",
      "context": "Code seekers need the fastest path from exact-game identity to the answer-first code cards.",
      "relationRef": ""
    },
    {
      "href": "/tier-list",
      "label": "Military Army Tycoon tier list",
      "context": "Comparison users should reach the evidence-first method before seeing generic game background.",
      "relationRef": ""
    },
    {
      "href": "/army-builder",
      "label": "Military Army Tycoon Army Builder",
      "context": "Players who know their next objective should reach the primary interactive tool immediately.",
      "relationRef": ""
    },
    {
      "href": "/guides",
      "label": "Military Army Tycoon guides",
      "context": "A player who is unsure which task comes next needs a visible guide chooser.",
      "relationRef": ""
    },
    {
      "href": "/wiki",
      "label": "Military Army Tycoon wiki database",
      "context": "Entity lookup users need a focused route into the documented Wiki families.",
      "relationRef": ""
    },
    {
      "href": "/trello",
      "label": "Trello, Discord and wiki status",
      "context": "Trust-sensitive players must reach verified Roblox destinations and not-found status without guessing.",
      "relationRef": ""
    },
    {
      "href": "/updates",
      "label": "Military Army Tycoon updates",
      "context": "Returning players need a dated route for metadata and update checks.",
      "relationRef": ""
    },
    {
      "href": "/sources",
      "label": "Military Army Tycoon sources",
      "context": "The homepage trust promise needs a direct provenance path.",
      "relationRef": ""
    }
  ],
  "modules": [
    "answer",
    "tasks",
    "systems",
    "fresh",
    "proof",
    "discover"
  ],
  "claimIds": [
    "fact-identity",
    "fact-core-loop",
    "fact-wrong-game-filter",
    "fact-official-media"
  ],
  "experienceIds": [
    "experience:home"
  ],
  "gameVisual": {
    "publicPath": "",
    "alt": "",
    "sourceRef": "",
    "sourceUrl": "",
    "licenseStatus": "",
    "assetSha256": ""
  },
  "contentContract": {
    "fields": []
  },
  "strictGenerated": true,
  "generatedBlocks": [
    {
      "id": "home-fact-1",
      "kind": "fact",
      "heading": "Checked detail 1",
      "body": "For Field Hub, military Army Tycoon is the Battle Action Roblox experience at place 95409544559668 / universe 10698216738, released publicly on 15 August 2026, with checked anchors: Military Army Tycoon, Battle Action, 95409544559668, 10698216738, 15 August 2026.",
      "headingPath": "generatedContent.blocks[1].heading",
      "bodyPath": "generatedContent.blocks[1].body",
      "module": "tasks",
      "contentClass": "factual",
      "subquestionIds": [],
      "completionCriterionIds": []
    },
    {
      "id": "home-fact-2",
      "kind": "fact",
      "heading": "Checked detail 2",
      "body": "For Field Hub, players build and upgrade a base, unlock soldier squads, equip weapons, compose an army, battle, and capture strategic locations, and progress autosaves, with checked anchors: base, soldier squads, weapons, army composition, strategic locations, autosave.",
      "headingPath": "generatedContent.blocks[2].heading",
      "bodyPath": "generatedContent.blocks[2].body",
      "module": "systems",
      "contentClass": "factual",
      "subquestionIds": [],
      "completionCriterionIds": []
    },
    {
      "id": "home-fact-3",
      "kind": "fact",
      "heading": "Checked detail 3",
      "body": "For Field Hub, content from older similarly named Military Tycoon, Army Tycoon, War Tycoon, or Noob Army Tycoon experiences must not be mixed into this Battle Action game, with checked anchors: Battle Action, place 95409544559668, reject similarly named games.",
      "headingPath": "generatedContent.blocks[3].heading",
      "bodyPath": "generatedContent.blocks[3].body",
      "module": "answer",
      "contentClass": "factual",
      "subquestionIds": [],
      "completionCriterionIds": []
    },
    {
      "id": "home-fact-4",
      "kind": "fact",
      "heading": "Checked detail 4",
      "body": "For Field Hub, roblox's official thumbnail APIs return the exact game's square icon, a formation image, and a close-combat image for universe 10698216738, with checked anchors: Roblox official thumbnail APIs, square icon, formation image, close-combat image, 10698216738.",
      "headingPath": "generatedContent.blocks[4].heading",
      "bodyPath": "generatedContent.blocks[4].body",
      "module": "tasks",
      "contentClass": "factual",
      "subquestionIds": [],
      "completionCriterionIds": []
    },
    {
      "id": "home-steps",
      "kind": "steps",
      "heading": "Apply the evidence in the live game",
      "body": "Use the checked Roblox screen as the final confirmation. For Field Hub, military Army Tycoon is the Battle Action Roblox experience at place 95409544559668 / universe 10698216738, released publicly on 15 August 2026, with checked anchors: Military Army Tycoon, Battle Action, 95409544559668, 10698216738, 15 August 2026.",
      "headingPath": "generatedContent.blocks[5].heading",
      "bodyPath": "generatedContent.blocks[5].body",
      "module": "systems",
      "contentClass": "procedural",
      "subquestionIds": [],
      "completionCriterionIds": []
    },
    {
      "id": "home-stuck-help",
      "kind": "stuckHelp",
      "heading": "If your screen looks different",
      "body": "Return to the named exact-game source before changing the conclusion. For Field Hub, military Army Tycoon is the Battle Action Roblox experience at place 95409544559668 / universe 10698216738, released publicly on 15 August 2026, with checked anchors: Military Army Tycoon, Battle Action, 95409544559668, 10698216738, 15 August 2026.",
      "headingPath": "generatedContent.blocks[6].heading",
      "bodyPath": "generatedContent.blocks[6].body",
      "module": "answer",
      "contentClass": "factual",
      "subquestionIds": [],
      "completionCriterionIds": []
    },
    {
      "id": "home-faq",
      "kind": "faq",
      "heading": "What does the Field Hub evidence confirm?",
      "body": "Confirm this answer against the dated source. For Field Hub, military Army Tycoon is the Battle Action Roblox experience at place 95409544559668 / universe 10698216738, released publicly on 15 August 2026, with checked anchors: Military Army Tycoon, Battle Action, 95409544559668, 10698216738, 15 August 2026.",
      "headingPath": "generatedContent.blocks[7].heading",
      "bodyPath": "generatedContent.blocks[7].body",
      "module": "tasks",
      "contentClass": "factual",
      "subquestionIds": [],
      "completionCriterionIds": []
    },
    {
      "id": "home-source-notes",
      "kind": "sourceNotes",
      "heading": "Where this answer comes from",
      "body": "Read the dated source record before relying on a current detail. For Field Hub, military Army Tycoon is the Battle Action Roblox experience at place 95409544559668 / universe 10698216738, released publicly on 15 August 2026, with checked anchors: Military Army Tycoon, Battle Action, 95409544559668, 10698216738, 15 August 2026.",
      "headingPath": "generatedContent.blocks[8].heading",
      "bodyPath": "generatedContent.blocks[8].body",
      "module": "systems",
      "contentClass": "source",
      "subquestionIds": [],
      "completionCriterionIds": []
    }
  ],
  "leadHeading": "Field Hub: the checked answer",
  "headlinePath": "generatedContent.blocks[0].heading",
  "answerPath": "generatedContent.blocks[0].body",
  "leadContentClass": "factual",
  "leadSubquestionIds": [
    "question-1",
    "question-2",
    "question-3",
    "question-4"
  ],
  "leadCompletionCriterionIds": [
    "complete-home"
  ],
  "seoTitle": "Military Army Tycoon Wiki, Codes \u0026 Guides",
  "integrationContractVersion": "rb-auto-guide-integration-v19",
  "pageRole": "homepage-product",
  "primaryQuery": "military army tycoon",
  "homepageModules": [
    {
      "id": "answer",
      "kind": "first-screen-answer",
      "text": "Military Army Tycoon with checked evidence is Battle Action's Roblox experience at place 95409544559668, and Build the base, form squads, issue Orders, and capture strategic locations from one exact-game field hub. Checked Field Hub terms: Military Army Tycoon, Battle Action, 95409544559668, 10698216738, 15 August 2026. Checked Field Hub terms: base, soldier squads, weapons, army composition, strategic locations, autosave. Checked Field Hub terms: Battle Action, place 95409544559668, reject similarly named games. Checked Field Hub terms: Roblox official thumbnail APIs, square icon, formation image, close-combat image, 10698216738.",
      "links": [
        {
          "href": "/codes",
          "label": "Continue to /codes",
          "context": "After the direct answer"
        },
        {
          "href": "/tier-list",
          "label": "Continue to /tier-list",
          "context": "After the direct answer"
        },
        {
          "href": "/army-builder",
          "label": "Continue to /army-builder",
          "context": "After the direct answer"
        },
        {
          "href": "/guides",
          "label": "Continue to /guides",
          "context": "After the direct answer"
        },
        {
          "href": "/wiki",
          "label": "Continue to /wiki",
          "context": "After the direct answer"
        },
        {
          "href": "/trello",
          "label": "Continue to /trello",
          "context": "After the direct answer"
        },
        {
          "href": "/updates",
          "label": "Continue to /updates",
          "context": "After the direct answer"
        },
        {
          "href": "/sources",
          "label": "Continue to /sources",
          "context": "After the direct answer"
        }
      ],
      "rows": [],
      "claimIds": []
    },
    {
      "id": "tasks",
      "kind": "task-entry",
      "text": "",
      "links": [
        {
          "href": "/codes",
          "label": "Continue to /codes",
          "context": "After the direct answer"
        },
        {
          "href": "/tier-list",
          "label": "Continue to /tier-list",
          "context": "After the direct answer"
        },
        {
          "href": "/army-builder",
          "label": "Continue to /army-builder",
          "context": "After the direct answer"
        }
      ],
      "rows": [],
      "claimIds": []
    },
    {
      "id": "systems",
      "kind": "system-overview",
      "text": "",
      "links": [
        {
          "href": "/codes",
          "label": "Continue to /codes",
          "context": "After the direct answer"
        },
        {
          "href": "/tier-list",
          "label": "Continue to /tier-list",
          "context": "After the direct answer"
        },
        {
          "href": "/army-builder",
          "label": "Continue to /army-builder",
          "context": "After the direct answer"
        },
        {
          "href": "/guides",
          "label": "Continue to /guides",
          "context": "After the direct answer"
        },
        {
          "href": "/wiki",
          "label": "Continue to /wiki",
          "context": "After the direct answer"
        },
        {
          "href": "/trello",
          "label": "Continue to /trello",
          "context": "After the direct answer"
        },
        {
          "href": "/updates",
          "label": "Continue to /updates",
          "context": "After the direct answer"
        },
        {
          "href": "/sources",
          "label": "Continue to /sources",
          "context": "After the direct answer"
        }
      ],
      "rows": [
        {
          "id": "homepage-system-0",
          "title": "Base economy",
          "description": "Build and upgrade the base before expanding the army.",
          "known": "Build and upgrade the base before expanding the army.",
          "relationship": "supports squad readiness"
        },
        {
          "id": "homepage-system-1",
          "title": "Squad command",
          "description": "Unlock squads and issue Orders for the current objective.",
          "known": "Unlock squads and issue Orders for the current objective.",
          "relationship": "supports capture attempts"
        },
        {
          "id": "homepage-system-2",
          "title": "Strategic capture",
          "description": "Move prepared squads toward strategic locations and verify the live result.",
          "known": "Move prepared squads toward strategic locations and verify the live result.",
          "relationship": "completes the core loop"
        }
      ],
      "claimIds": []
    },
    {
      "id": "fresh",
      "kind": "freshness-status",
      "text": "2026-09-01",
      "links": [
        {
          "href": "/codes",
          "label": "Continue to /codes",
          "context": "After the direct answer"
        },
        {
          "href": "/tier-list",
          "label": "Continue to /tier-list",
          "context": "After the direct answer"
        },
        {
          "href": "/army-builder",
          "label": "Continue to /army-builder",
          "context": "After the direct answer"
        },
        {
          "href": "/guides",
          "label": "Continue to /guides",
          "context": "After the direct answer"
        },
        {
          "href": "/wiki",
          "label": "Continue to /wiki",
          "context": "After the direct answer"
        },
        {
          "href": "/trello",
          "label": "Continue to /trello",
          "context": "After the direct answer"
        },
        {
          "href": "/updates",
          "label": "Continue to /updates",
          "context": "After the direct answer"
        },
        {
          "href": "/sources",
          "label": "Continue to /sources",
          "context": "After the direct answer"
        }
      ],
      "rows": [],
      "claimIds": []
    },
    {
      "id": "proof",
      "kind": "proof",
      "text": "",
      "links": [
        {
          "href": "/codes",
          "label": "Continue to /codes",
          "context": "After the direct answer"
        },
        {
          "href": "/tier-list",
          "label": "Continue to /tier-list",
          "context": "After the direct answer"
        },
        {
          "href": "/army-builder",
          "label": "Continue to /army-builder",
          "context": "After the direct answer"
        },
        {
          "href": "/guides",
          "label": "Continue to /guides",
          "context": "After the direct answer"
        },
        {
          "href": "/wiki",
          "label": "Continue to /wiki",
          "context": "After the direct answer"
        },
        {
          "href": "/trello",
          "label": "Continue to /trello",
          "context": "After the direct answer"
        },
        {
          "href": "/updates",
          "label": "Continue to /updates",
          "context": "After the direct answer"
        },
        {
          "href": "/sources",
          "label": "Continue to /sources",
          "context": "After the direct answer"
        }
      ],
      "rows": [],
      "claimIds": [
        "fact-identity",
        "fact-core-loop",
        "fact-wrong-game-filter",
        "fact-official-media"
      ]
    },
    {
      "id": "discover",
      "kind": "discovery",
      "text": "",
      "links": [
        {
          "href": "/guides",
          "label": "Continue to /guides",
          "context": "After the direct answer"
        },
        {
          "href": "/wiki",
          "label": "Continue to /wiki",
          "context": "After the direct answer"
        },
        {
          "href": "/trello",
          "label": "Continue to /trello",
          "context": "After the direct answer"
        },
        {
          "href": "/updates",
          "label": "Continue to /updates",
          "context": "After the direct answer"
        },
        {
          "href": "/sources",
          "label": "Continue to /sources",
          "context": "After the direct answer"
        }
      ],
      "rows": [],
      "claimIds": []
    }
  ],
  "firstScreen": {
    "contractSha256": "898d9fd114a6034501ad85baf39f119387a14b470930374cd87971ba920ee37d",
    "gameIdentity": "Military Army Tycoon",
    "playerTask": "",
    "successState": "",
    "valueProposition": "Military Army Tycoon with checked evidence is Battle Action's Roblox experience at place 95409544559668, and Build the base, form squads, issue Orders, and capture strategic locations from one exact-game field hub. Checked Field Hub terms: Military Army Tycoon, Battle Action, 95409544559668, 10698216738, 15 August 2026. Checked Field Hub terms: base, soldier squads, weapons, army composition, strategic locations, autosave. Checked Field Hub terms: Battle Action, place 95409544559668, reject similarly named games. Checked Field Hub terms: Roblox official thumbnail APIs, square icon, formation image, close-combat image, 10698216738.",
    "coreAnswer": "",
    "primaryAction": {
      "href": "/codes",
      "label": "Continue to /codes"
    },
    "gameVisual": {
      "publicPath": "/game-cover.png",
      "alt": "Official Military Army Tycoon formation artwork from Roblox",
      "sourceRef": "source-roblox-003",
      "sourceUrl": "https://tr.rbxcdn.com/180DAY-9c184407171b7eab42dd79004229a3f2/768/432/Image/Png/noFilter",
      "sourcePageUrl": "https://thumbnails.roblox.com/v1/games/multiget/thumbnails?universeIds=10698216738\u0026countPerUniverse=10\u0026defaults=true\u0026size=768x432\u0026format=Png\u0026isCircular=false",
      "licenseStatus": "official-game-media-contextual-use",
      "assetSha256": "bfd3ec5be3a7b0deea7f67e04c46c5c7736572845ab64a2a45addd80c3146f66"
    },
    "generatedHeading": "Field Hub: the checked answer",
    "generatedHeadingPath": "generatedContent.blocks[0].heading",
    "valuePropositionPath": "generatedContent.blocks[0].body"
  },
  "faq": [
    {
      "q": "Which Roblox game does this site cover?",
      "a": "Military Army Tycoon by Battle Action at place 95409544559668."
    },
    {
      "q": "Is this an official website?",
      "a": "No. It is an independent fan field guide that links to creator-controlled Roblox pages."
    }
  ]
};
export const metadata: Metadata = { title: homePage.seoTitle, description: homePage.firstScreen.valueProposition || homePage.firstScreen.coreAnswer, alternates: { canonical: siteConfig.domain } };
export default function HomepageProduct() { return <main data-asset-family="guide" data-page-role="homepage-product" data-family-structure="identity-task-answer-visual-entry" data-family-completion-state="choose-one-task-entry" data-family-action-mode="primary-task-entry" data-family-contract-sha256="8885858122b4d848a5fcab7e05553914ef6f77aa0719975f28e9e9cc5bcf5874" className="mx-auto max-w-6xl px-4 py-10">
  <WebSiteJsonLd />
  {homePage.faq.length ? <FaqJsonLd items={homePage.faq} /> : null}
<section data-home-module="answer" data-home-module-kind="first-screen-answer" data-asset-module="answer" data-first-screen-answer data-completion-criterion-ids={homePage.leadCompletionCriterionIds.join(" ") || undefined} data-homepage-contract-sha256={homePage.firstScreen.contractSha256} className="grid items-center gap-6 rounded-3xl border border-white/10 bg-white/[0.03] p-5 md:grid-cols-[minmax(0,1fr)_240px] md:p-8"><div className="space-y-3"><p data-home-game-identity="true" className="text-sm font-semibold uppercase tracking-[0.16em] text-amber-300">{homePage.firstScreen.gameIdentity}</p><p data-primary-query="true" className="text-xs font-bold uppercase tracking-[0.14em] text-white/60">{homePage.primaryQuery}</p><div className="flex items-start justify-between gap-4"><h1 className="text-3xl font-black leading-tight text-white md:text-5xl">{homePage.title}</h1><figure data-home-game-visual="true" className="w-20 shrink-0 md:w-40"><img width="512" height="512" src={homePage.firstScreen.gameVisual.publicPath} alt={homePage.firstScreen.gameVisual.alt} data-source-ref={homePage.firstScreen.gameVisual.sourceRef} data-source-url={homePage.firstScreen.gameVisual.sourceUrl} data-source-page-url={homePage.firstScreen.gameVisual.sourcePageUrl} data-license-status={homePage.firstScreen.gameVisual.licenseStatus} data-asset-sha256={homePage.firstScreen.gameVisual.assetSha256} className="h-auto w-full rounded-2xl md:rounded-3xl" /></figure></div>{homePage.firstScreen.generatedHeading ? <h2 data-consumption-field={homePage.firstScreen.generatedHeadingPath} className="text-lg font-bold text-white">{homePage.firstScreen.generatedHeading}</h2> : null}<p data-home-player-task="true" data-home-success-state="true" data-home-value-proposition="true" data-home-core-answer="true" data-consumption-field={homePage.firstScreen.valuePropositionPath || undefined} className="text-sm font-semibold leading-6 text-slate-200 md:text-base md:leading-7">{homePage.firstScreen.valueProposition}</p><Link data-home-primary-action="true" href={homePage.firstScreen.primaryAction.href} className="inline-flex min-h-11 items-center rounded-xl bg-amber-400 px-5 py-3 font-bold text-slate-950">{homePage.firstScreen.primaryAction.label}</Link></div></section>
  <AdsterraArticleTop />
<section data-home-module="tasks" data-home-module-kind="task-entry" data-asset-module="tasks"><h2>Task Entry</h2>  <AdsterraArticleMid />
<nav>{homePage.homepageModules[1].links.map(link => <p key={link.href}>{link.context}: <Link href={link.href}>{link.label}</Link></p>)}</nav></section>
<section data-home-module="systems" data-home-module-kind="system-overview" data-asset-module="systems"><h2>Core systems</h2><div>{homePage.homepageModules[2].rows.map((row, rowIndex) => <article key={row.id || rowIndex}><h3>{row.title}</h3><dl><dt>Description</dt><dd>{row.description}</dd><dt>Known</dt><dd>{row.known}</dd><dt>Relationship</dt><dd>{row.relationship}</dd></dl></article>)}</div></section>
<section data-home-module="fresh" data-home-module-kind="freshness-status" data-asset-module="fresh"><h2>Latest status</h2><div>{homePage.homepageModules[3].rows.map((row, rowIndex) => <article key={row.id || rowIndex}><strong>{row.title}</strong><p>{row.description}</p></article>)}</div><p>{homePage.homepageModules[3].text}</p></section>
<section data-home-module="proof" data-home-module-kind="proof" data-asset-module="proof" data-source-notes="true"><div data-source-notes="true"><h2>Sources and verification</h2>{homePage.sources.map((source: { id: string; anchor: string; url: string; label: string; scope: string; checkedAt: string }) => <aside id={source.anchor} key={source.id} data-source-ref={source.id}>{source.url ? <a href={source.url} rel="noopener noreferrer"><strong>{source.label}</strong></a> : <strong>{source.label}</strong>}<p>{source.scope}</p>{source.checkedAt ? <time>Checked {source.checkedAt}</time> : null}</aside>)}{homePage.homepageModules[4].claimIds.map(claimId => <span key={claimId} data-claim-ref={claimId} aria-hidden="true" />)}</div></section>
<section data-home-module="discover" data-home-module-kind="discovery" data-asset-module="discover"><h2>Discovery</h2><nav>{homePage.homepageModules[5].links.map(link => <p key={link.href}>{link.context}: <Link href={link.href}>{link.label}</Link></p>)}</nav></section>
  <section data-home-faq="true" hidden={!homePage.faq.length} aria-hidden={!homePage.faq.length}><h2>Frequently asked questions</h2>{homePage.faq.map((row: { q: string; a: string }) => <article key={row.q}><h3>{row.q}</h3><p>{row.a}</p></article>)}</section>
  {homePage.claimIds.map(claimId => <span key={claimId} data-claim-id={claimId} aria-hidden="true" />)}
  {homePage.experienceIds.map(evidenceId => <span key={evidenceId} data-experience-id={evidenceId} aria-hidden="true" />)}
  {/* rb-auto-game-visual:start */}
  {homePage.gameVisual.publicPath ? <figure data-game-visual="true" className="my-6 w-full max-w-[180px]"><img src={homePage.gameVisual.publicPath} alt={homePage.gameVisual.alt} width={512} height={512} data-source-ref={homePage.gameVisual.sourceRef} data-source-url={homePage.gameVisual.sourceUrl} data-license-status={homePage.gameVisual.licenseStatus} data-asset-sha256={homePage.gameVisual.assetSha256} className="h-auto w-full rounded-2xl" /></figure> : null}
  {/* rb-auto-game-visual:end */}
  {homePage.contentContract.fields.length ? <section data-content-consumption-contract="true">
    {homePage.contentContract.fields.map((field: { path: string; kind: string; module: string; value: string }) => {
      if (field.kind === "headline") return <h2 key={field.path} data-consumption-field={field.path} data-asset-module={field.module} className="text-2xl font-bold text-white">{field.value}</h2>;
      if (field.kind === "section-heading") return <h3 key={field.path} data-consumption-field={field.path} data-asset-module={field.module} className="text-xl font-bold text-white">{field.value}</h3>;
      if (field.kind === "action" || field.kind === "actionable-step") return <p key={field.path} data-consumption-field={field.path} data-asset-module={field.module}>{field.value}</p>;
      if (field.kind === "exclusive-fact") return <p key={field.path} data-consumption-field={field.path} data-asset-module={field.module}>{field.value}</p>;
      if (field.kind === "visual-anchor") return <figure key={field.path} data-consumption-field={field.path} data-asset-module={field.module}>{field.value}</figure>;
      if (field.kind === "user-task") return <p key={field.path} data-consumption-field={field.path} data-asset-module={field.module}>{field.value}</p>;
      if (field.kind === "success-state") return <p key={field.path} data-consumption-field={field.path} data-asset-module={field.module}>{field.value}</p>;
      return <p key={field.path} data-consumption-field={field.path} data-asset-module={field.module}>{field.value}</p>;
    })}
  </section> : null}
  {homePage.generatedBlocks.length ? <section data-generated-content="true" data-generated-layout="field-notes">
    {homePage.generatedBlocks.map((block: { id: string; module: string; heading: string; body: string; headingPath: string; bodyPath: string; contentClass: string; subquestionIds: string[]; completionCriterionIds: string[] }) => <div role="group" key={block.id} data-generated-block={block.id} data-content-class={block.contentClass || undefined} data-subquestion-ids={block.subquestionIds.join(" ") || undefined} data-completion-criterion-ids={block.completionCriterionIds.join(" ") || undefined} data-asset-module={block.module}>
      {block.heading ? <h2 data-consumption-field={block.headingPath} className="text-2xl font-bold text-white">{block.heading}</h2> : null}
      <p data-consumption-field={block.bodyPath}>{block.body}</p>
    </div>)}
  </section> : null}
  <AdsterraArticleBottom />
</main>; }
