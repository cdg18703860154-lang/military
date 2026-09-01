/* RB-AUTO-ASSET family=tool receipt=c55476e77e0a824ddd72f45c03894fd2ff686619a307db08bc05832d4fb528a8 content=2424cb7d95d3c80dc43b8415c1928112fef35db700ba355a717708617e4de28f */
/* RB-AUTO-MANUAL semantic-integration-reviewed */
"use client";
import { AdsterraToolAd, AdsterraToolBottom } from "@/components/ads";
import Link from "next/link";
import { useMemo, useState } from "react";
const toolPage = {
  "route": "/army-builder",
  "title": "Military Army Tycoon Army Builder",
  "headline": "Build Your Next Army Plan",
  "answer": "Choose the next objective, with checked evidence base readiness, visible squads, and server context, and The Army Builder returns an explainable Base → Squad → Orders → Objective → Verify plan without fake combat power. Checked Army Builder terms: recommendation, Droppers, Upgraders, Oil Containers, before low-impact decoration. Checked Army Builder terms: Orders, under Rebirth in the observed HUD, patch-sensitive. Checked Army Builder terms: Barracks, Pistol Squad, current launch-window observation. Checked Army Builder terms: base, soldier squads, weapons, army composition, strategic locations, autosave. Checked Army Builder terms: Orders, Attack, Hold, Follow, Retreat, +10% Income, launch-window. Checked Army Builder terms: Pistol Squad, Rifle Squad, SMG Squad, not a complete roster, no unsupported stats.",
  "entities": [],
  "facts": [],
  "relations": [],
  "sources": [
    {
      "id": "source-guide-004",
      "anchor": "source-guide-004",
      "label": "How to Capture Outposts for +10% Income",
      "status": "",
      "scope": "",
      "url": "https://allthings.how/military-army-tycoon-how-to-capture-outposts-for-10-income/",
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
      "id": "source-youtube-001",
      "anchor": "source-youtube-001",
      "label": "BUILD THE STRONGEST ARMY IN MILITARY ARMY TYCOON ROBLOX",
      "status": "",
      "scope": "",
      "url": "https://www.youtube.com/watch?v=Y9Eo6kfx9MI",
      "checkedAt": "2026-09-01"
    },
    {
      "id": "source-youtube-003",
      "anchor": "source-youtube-003",
      "label": "All Working Military Army Tycoon Codes Roblox",
      "status": "",
      "scope": "",
      "url": "https://www.youtube.com/watch?v=kgfbstTMwsk",
      "checkedAt": "2026-09-01"
    },
    {
      "id": "source-youtube-004",
      "anchor": "source-youtube-004",
      "label": "Military Army Tycoon Guide",
      "status": "",
      "scope": "",
      "url": "https://www.youtube.com/watch?v=XPwK5cieqW4",
      "checkedAt": "2026-09-01"
    },
    {
      "id": "youtube-claim-crosscheck-002",
      "anchor": "youtube-claim-crosscheck-002",
      "label": "Current gameplay claim cross-check",
      "status": "",
      "scope": "Type: Multi-source gameplay arbitration\n-",
      "url": "#youtube-claim-crosscheck-002",
      "checkedAt": "2026-09-01"
    }
  ],
  "internalLinks": [
    {
      "href": "/",
      "label": "Military Army Tycoon Wiki",
      "context": "Tool users should be able to restart their journey from the main hub.",
      "relationRef": ""
    },
    {
      "href": "/tier-list",
      "label": "compare the available evidence",
      "context": "A generated plan may expose a squad-choice gap that the evidence explorer can resolve honestly.",
      "relationRef": ""
    },
    {
      "href": "/guides/how-to-get-cash",
      "label": "how to get Cash",
      "context": "Economy and just-started result states require a full documented action guide.",
      "relationRef": ""
    },
    {
      "href": "/guides/how-to-capture",
      "label": "capture a strategic location",
      "context": "Capture and balanced result states need the exact procedure and current-result warning.",
      "relationRef": ""
    },
    {
      "href": "/wiki/orders",
      "label": "Attack, Hold, Follow and Retreat",
      "context": "Defense and capture plans need a direct command-label reference.",
      "relationRef": ""
    }
  ],
  "modules": [
    "tool-inputs",
    "tool-result",
    "tool-methodology",
    "source-notes"
  ],
  "claimIds": [
    "claim-xpw-income-first",
    "claim-xpw-orders-control",
    "claim-xpw-player-cash-theft",
    "claim-y9-barracks-pistol-squad",
    "fact-core-loop",
    "fact-orders-capture",
    "fact-squad-visible"
  ],
  "experienceIds": [
    "experience:army-builder"
  ],
  "gameVisual": {
    "publicPath": "/game-cover.png",
    "alt": "Official Military Army Tycoon formation artwork from Roblox",
    "sourceRef": "source-roblox-003",
    "sourceUrl": "https://tr.rbxcdn.com/180DAY-9c184407171b7eab42dd79004229a3f2/768/432/Image/Png/noFilter",
    "licenseStatus": "official-game-media-contextual-use",
    "assetSha256": "bfd3ec5be3a7b0deea7f67e04c46c5c7736572845ab64a2a45addd80c3146f66"
  },
  "contentContract": {
    "fields": []
  },
  "strictGenerated": true,
  "generatedBlocks": [
    {
      "id": "army-builder-fact-1",
      "kind": "fact",
      "heading": "Checked detail 1",
      "body": "For Army Builder, a first-session path prioritizes droppers and upgraders, then oil containers, before low-impact cosmetic purchases, with checked anchors: recommendation, Droppers, Upgraders, Oil Containers, before low-impact decoration.",
      "headingPath": "generatedContent.blocks[1].heading",
      "bodyPath": "generatedContent.blocks[1].body",
      "module": "tool-methodology",
      "contentClass": "factual",
      "subquestionIds": [],
      "completionCriterionIds": []
    },
    {
      "id": "army-builder-fact-2",
      "kind": "fact",
      "heading": "Checked detail 2",
      "body": "For Army Builder, troop commands are opened through the Orders control located under Rebirth in the observed HUD, with checked anchors: Orders, under Rebirth in the observed HUD, patch-sensitive.",
      "headingPath": "generatedContent.blocks[2].heading",
      "bodyPath": "generatedContent.blocks[2].body",
      "module": "tool-inputs",
      "contentClass": "factual",
      "subquestionIds": [],
      "completionCriterionIds": []
    },
    {
      "id": "army-builder-fact-3",
      "kind": "fact",
      "heading": "Checked detail 3",
      "body": "For Army Builder, the recorded public-server session showed a player entering another base and taking cash from its collector area, with checked anchors: recorded public-server session, observed launch-window risk, no fixed steal percentage.",
      "headingPath": "generatedContent.blocks[3].heading",
      "bodyPath": "generatedContent.blocks[3].body",
      "module": "tool-result",
      "contentClass": "factual",
      "subquestionIds": [],
      "completionCriterionIds": []
    },
    {
      "id": "army-builder-fact-4",
      "kind": "fact",
      "heading": "Checked detail 4",
      "body": "For Army Builder, the early Barracks interface spawns a Pistol Squad, with checked anchors: Barracks, Pistol Squad, current launch-window observation.",
      "headingPath": "generatedContent.blocks[4].heading",
      "bodyPath": "generatedContent.blocks[4].body",
      "module": "tool-methodology",
      "contentClass": "factual",
      "subquestionIds": [],
      "completionCriterionIds": []
    },
    {
      "id": "army-builder-fact-5",
      "kind": "fact",
      "heading": "Checked detail 5",
      "body": "For Army Builder, players build and upgrade a base, unlock soldier squads, equip weapons, compose an army, battle, and capture strategic locations, and progress autosaves, with checked anchors: base, soldier squads, weapons, army composition, strategic locations, autosave.",
      "headingPath": "generatedContent.blocks[5].heading",
      "bodyPath": "generatedContent.blocks[5].body",
      "module": "tool-inputs",
      "contentClass": "factual",
      "subquestionIds": [],
      "completionCriterionIds": []
    },
    {
      "id": "army-builder-fact-6",
      "kind": "fact",
      "heading": "Checked detail 6",
      "body": "For Army Builder, the current Orders control commands squads, and a captured early outpost displayed a +10% Income result in launch-window footage, with checked anchors: Orders, Attack, Hold, Follow, Retreat, +10% Income, launch-window.",
      "headingPath": "generatedContent.blocks[6].heading",
      "bodyPath": "generatedContent.blocks[6].body",
      "module": "tool-result",
      "contentClass": "factual",
      "subquestionIds": [],
      "completionCriterionIds": []
    },
    {
      "id": "army-builder-fact-7",
      "kind": "fact",
      "heading": "Checked detail 7",
      "body": "For Army Builder, current game evidence shows a Barracks and readable Pistol Squad, Rifle Squad, and SMG Squad labels, and it does not establish a complete roster or stats, with checked anchors: Pistol Squad, Rifle Squad, SMG Squad, not a complete roster, no unsupported stats.",
      "headingPath": "generatedContent.blocks[7].heading",
      "bodyPath": "generatedContent.blocks[7].body",
      "module": "tool-methodology",
      "contentClass": "factual",
      "subquestionIds": [],
      "completionCriterionIds": []
    },
    {
      "id": "army-builder-steps",
      "kind": "steps",
      "heading": "Apply the evidence in the live game",
      "body": "Use the checked Roblox screen as the final confirmation. For Army Builder, a first-session path prioritizes droppers and upgraders, then oil containers, before low-impact cosmetic purchases, with checked anchors: recommendation, Droppers, Upgraders, Oil Containers, before low-impact decoration.",
      "headingPath": "generatedContent.blocks[8].heading",
      "bodyPath": "generatedContent.blocks[8].body",
      "module": "tool-inputs",
      "contentClass": "procedural",
      "subquestionIds": [],
      "completionCriterionIds": []
    },
    {
      "id": "army-builder-stuck-help",
      "kind": "stuckHelp",
      "heading": "If your screen looks different",
      "body": "Return to the named exact-game source before changing the conclusion. For Army Builder, a first-session path prioritizes droppers and upgraders, then oil containers, before low-impact cosmetic purchases, with checked anchors: recommendation, Droppers, Upgraders, Oil Containers, before low-impact decoration.",
      "headingPath": "generatedContent.blocks[9].heading",
      "bodyPath": "generatedContent.blocks[9].body",
      "module": "tool-result",
      "contentClass": "factual",
      "subquestionIds": [],
      "completionCriterionIds": []
    },
    {
      "id": "army-builder-faq",
      "kind": "faq",
      "heading": "What does the Army Builder evidence confirm?",
      "body": "Confirm this answer against the dated source. For Army Builder, a first-session path prioritizes droppers and upgraders, then oil containers, before low-impact cosmetic purchases, with checked anchors: recommendation, Droppers, Upgraders, Oil Containers, before low-impact decoration.",
      "headingPath": "generatedContent.blocks[10].heading",
      "bodyPath": "generatedContent.blocks[10].body",
      "module": "tool-methodology",
      "contentClass": "factual",
      "subquestionIds": [],
      "completionCriterionIds": []
    },
    {
      "id": "army-builder-source-notes",
      "kind": "sourceNotes",
      "heading": "Where this answer comes from",
      "body": "Read the dated source record before relying on a current detail. For Army Builder, a first-session path prioritizes droppers and upgraders, then oil containers, before low-impact cosmetic purchases, with checked anchors: recommendation, Droppers, Upgraders, Oil Containers, before low-impact decoration.",
      "headingPath": "generatedContent.blocks[11].heading",
      "bodyPath": "generatedContent.blocks[11].body",
      "module": "tool-inputs",
      "contentClass": "source",
      "subquestionIds": [],
      "completionCriterionIds": []
    }
  ],
  "leadHeading": "Army Builder: the checked answer",
  "headlinePath": "generatedContent.blocks[0].heading",
  "answerPath": "generatedContent.blocks[0].body",
  "leadContentClass": "factual",
  "leadSubquestionIds": [
    "question-1",
    "question-2",
    "question-3",
    "question-4",
    "question-5",
    "question-6",
    "question-7"
  ],
  "leadCompletionCriterionIds": [
    "complete-army-builder"
  ],
  "tool": {
    "inputs": [
      {
        "key": "baseReady",
        "label": "Base economy is ready",
        "type": "boolean",
        "default": false,
        "required": true
      },
      {
        "key": "squadReady",
        "label": "A current squad is ready",
        "type": "boolean",
        "default": false,
        "required": true
      },
      {
        "key": "ordersReady",
        "label": "Orders are set for the objective",
        "type": "boolean",
        "default": false,
        "required": true
      },
      {
        "key": "routeChecked",
        "label": "The route and server risk are checked",
        "type": "boolean",
        "default": false,
        "required": true
      }
    ],
    "output": {
      "key": "state",
      "label": "Operation state",
      "type": "text"
    },
    "outputs": [
      {
        "key": "state",
        "label": "Operation state",
        "type": "text"
      },
      {
        "key": "action",
        "label": "Next action",
        "type": "text"
      }
    ],
    "operation": "state-tracker",
    "weights": [],
    "rules": [
      {
        "id": "prepare-base",
        "whenAllTrue": [],
        "whenAnyFalse": [
          "baseReady"
        ],
        "whenAllFalse": [],
        "result": {
          "state": "PREPARE BASE",
          "action": "Stabilize production and collection first."
        }
      },
      {
        "id": "form-squad",
        "whenAllTrue": [
          "baseReady"
        ],
        "whenAnyFalse": [
          "squadReady"
        ],
        "whenAllFalse": [],
        "result": {
          "state": "FORM SQUAD",
          "action": "Return to the Barracks and ready a visible squad."
        }
      },
      {
        "id": "set-orders",
        "whenAllTrue": [
          "baseReady",
          "squadReady"
        ],
        "whenAnyFalse": [
          "ordersReady"
        ],
        "whenAllFalse": [],
        "result": {
          "state": "SET ORDERS",
          "action": "Choose and verify the current Orders label."
        }
      },
      {
        "id": "check-route",
        "whenAllTrue": [
          "baseReady",
          "squadReady",
          "ordersReady"
        ],
        "whenAnyFalse": [
          "routeChecked"
        ],
        "whenAllFalse": [],
        "result": {
          "state": "CHECK ROUTE",
          "action": "Inspect the objective route and public-server risk."
        }
      },
      {
        "id": "move-out",
        "whenAllTrue": [
          "baseReady",
          "squadReady",
          "ordersReady",
          "routeChecked"
        ],
        "whenAnyFalse": [],
        "whenAllFalse": [],
        "result": {
          "state": "MOVE OUT",
          "action": "Advance, then verify the live squad and capture result."
        }
      }
    ],
    "fallbackResult": {
      "state": "REVIEW",
      "action": "Review the readiness checklist."
    },
    "explanation": "Stop at the first missing readiness layer in the verified Base to Squad to Orders to Objective loop; never calculate combat power or income.",
    "dataVersion": "Launch build checked 2026-09-01",
    "limitations": [
      "This checklist does not calculate damage, health, income, or guaranteed capture results.",
      "Regenerate the decision whenever the visible squad, Orders state, objective, or server context changes."
    ],
    "defaultResult": {
      "state": "PREPARE BASE",
      "action": "Stabilize production and collection first."
    },
    "examples": [
      {
        "label": "Fresh plot",
        "inputs": {
          "baseReady": false,
          "squadReady": false,
          "ordersReady": false,
          "routeChecked": false
        },
        "result": {
          "state": "PREPARE BASE",
          "action": "Stabilize production and collection first."
        }
      },
      {
        "label": "Squad ready",
        "inputs": {
          "baseReady": true,
          "squadReady": true,
          "ordersReady": false,
          "routeChecked": false
        },
        "result": {
          "state": "SET ORDERS",
          "action": "Choose and verify the current Orders label."
        }
      },
      {
        "label": "Operation ready",
        "inputs": {
          "baseReady": true,
          "squadReady": true,
          "ordersReady": true,
          "routeChecked": true
        },
        "result": {
          "state": "MOVE OUT",
          "action": "Advance, then verify the live squad and capture result."
        }
      }
    ]
  }
};
const initialInputs = Object.fromEntries(toolPage.tool.inputs.map(input => [input.key, Boolean(input.default)]));
function matches(rule: any, values: Record<string, boolean>) {
  const allTrue = (rule.whenAllTrue || []).every((key: string) => values[key] === true);
  const anyFalseKeys = rule.whenAnyFalse || [];
  const anyFalse = anyFalseKeys.length === 0 || anyFalseKeys.some((key: string) => values[key] === false);
  const allFalseKeys = rule.whenAllFalse || [];
  const allFalse = allFalseKeys.length === 0 || allFalseKeys.every((key: string) => values[key] === false);
  return allTrue && anyFalse && allFalse;
}
export default function ToolAssetPage() {
  const [inputs, setInputs] = useState<Record<string, boolean>>(initialInputs);
  const result = useMemo<Record<string, string>>(() => toolPage.tool.rules.find((rule: any) => matches(rule, inputs))?.result || toolPage.tool.fallbackResult, [inputs]);
  return <main data-asset-family="tool" data-tool-visual-hierarchy="true" data-page-role="task-tool" data-family-structure="inputs-state-result-method-limits" data-family-completion-state="ready-or-first-missing-action" data-family-action-mode="interactive-state-check" data-family-contract-sha256="05867f17c0a0600a7b16aba757dc1b118b229b5903f2e12460ced3f48b8ca563" data-tool-operation="state-tracker" className="mx-auto max-w-4xl px-4 py-10">
    <section data-first-screen-answer data-content-class={toolPage.leadContentClass || undefined} data-subquestion-ids={toolPage.leadSubquestionIds.join(" ") || undefined} data-completion-criterion-ids={toolPage.leadCompletionCriterionIds.join(" ") || undefined} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 md:p-8">{/* rb-auto-game-visual:start */}
  {toolPage.gameVisual.publicPath ? <figure data-game-visual="true" className="float-right mb-3 ml-4 w-16 md:w-24"><img src={toolPage.gameVisual.publicPath} alt={toolPage.gameVisual.alt} width={512} height={512} data-source-ref={toolPage.gameVisual.sourceRef} data-source-url={toolPage.gameVisual.sourceUrl} data-license-status={toolPage.gameVisual.licenseStatus} data-asset-sha256={toolPage.gameVisual.assetSha256} className="h-auto w-full rounded-2xl" /></figure> : null}
  {/* rb-auto-game-visual:end */}
  <h1 className="text-4xl font-extrabold leading-tight md:text-5xl">{toolPage.headline}</h1>{toolPage.leadHeading ? <h2 className="mt-4 text-2xl font-bold md:text-3xl" data-consumption-field={toolPage.headlinePath || undefined}>{toolPage.leadHeading}</h2> : null}<a data-tool-primary-action="true" href="#tool-inputs" className="mt-5 inline-flex min-h-11 items-center rounded-xl bg-amber-400 px-5 py-3 font-bold text-slate-950">Open the readiness checklist</a><p className="mt-4 text-lg leading-8" data-consumption-field={toolPage.answerPath || undefined}>{toolPage.answer}</p><p data-tool-version="true" className="mt-3 text-sm text-white/70">Checked {toolPage.tool.dataVersion}</p></section>
  <AdsterraToolAd />

  {toolPage.claimIds.map(claimId => <span key={claimId} data-claim-id={claimId} aria-hidden="true" />)}
  {toolPage.experienceIds.map(evidenceId => <span key={evidenceId} data-experience-id={evidenceId} aria-hidden="true" />)}
  {toolPage.contentContract.fields.length ? <section data-content-consumption-contract="true">
    {toolPage.contentContract.fields.map((field: { path: string; kind: string; module: string; value: string }) => {
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
  {toolPage.generatedBlocks.length ? <section data-generated-content="true" data-generated-layout="field-notes">
    {toolPage.generatedBlocks.map((block: { id: string; module: string; heading: string; body: string; headingPath: string; bodyPath: string; contentClass: string; subquestionIds: string[]; completionCriterionIds: string[] }) => <div role="group" key={block.id} data-generated-block={block.id} data-content-class={block.contentClass || undefined} data-subquestion-ids={block.subquestionIds.join(" ") || undefined} data-completion-criterion-ids={block.completionCriterionIds.join(" ") || undefined} data-asset-module={block.module}>
      {block.heading ? <h2 data-consumption-field={block.headingPath} className="text-2xl font-bold text-white">{block.heading}</h2> : null}
      <p data-consumption-field={block.bodyPath}>{block.body}</p>
    </div>)}
  </section> : null}
    <form id="tool-inputs" data-tool-runtime="state-tracker" data-asset-module="tool-inputs" onSubmit={event => event.preventDefault()} className="my-8 grid gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-6 md:grid-cols-2">
      {toolPage.tool.inputs.map((input: any) => <label key={input.key} className="flex min-h-12 items-center gap-3 rounded-xl border border-white/10 bg-black/20 p-3 font-semibold"><input type="checkbox" name={input.key} aria-label={input.label} checked={Boolean(inputs[input.key])} onChange={event => setInputs(current => ({...current, [input.key]: event.target.checked}))} /><span>{input.label}</span></label>)}
      <button type="button" className="min-h-11 rounded-xl border border-white/20 px-4 font-bold md:col-span-2" onClick={() => setInputs(initialInputs)}>Reset checklist</button>
    </form>
    <section data-asset-module="tool-result" aria-live="polite" className="my-8 rounded-2xl border border-amber-300/30 bg-amber-300/10 p-6">
      <h2 className="text-2xl font-extrabold">Current decision</h2>
      <dl className="mt-4 grid gap-4 md:grid-cols-2">{toolPage.tool.outputs.map((output: any) => <div key={output.key}><dt className="text-sm text-white/60">{output.label}</dt><dd className="mt-1 text-lg font-bold">{String(result[output.key] || "Unavailable")}</dd></div>)}</dl>
    </section>
    <section data-tool-result-states="true" data-asset-module="tool-result" className="my-8"><h2 className="text-2xl font-bold">All decision states</h2><p className="mt-2 leading-7">Use this reference to see what the checklist can return before changing inputs.</p><ul className="mt-4 grid gap-3">{toolPage.tool.rules.map((rule: any, index: number) => <li key={index} className="rounded-xl border border-white/10 p-4">{Object.values(rule.result).join(" · ")}</li>)}</ul></section>
    <section data-tool-methodology="true" data-asset-module="tool-methodology" className="my-8"><h2 className="text-2xl font-bold">How this checklist decides</h2><p className="mt-3 leading-7">{toolPage.tool.explanation}</p></section>
    <section data-tool-examples="true" className="my-8"><h2 className="text-2xl font-bold">Decision examples</h2>{toolPage.tool.examples.map((example: any) => <article key={example.label} className="mt-3 rounded-xl border border-white/10 p-4"><h3 className="text-xl font-bold">{example.label}</h3><p className="mt-2">{Object.values(example.result).join(" · ")}</p></article>)}</section>
    <section data-tool-limitations="true" className="my-8"><h2 className="text-2xl font-bold">Limits</h2><ul className="mt-3 list-disc space-y-2 pl-6">{toolPage.tool.limitations.map((item: string) => <li key={item}>{item}</li>)}</ul></section>
    <nav aria-label="Related checklist guides">    <p data-relation-ref="">Tool users should be able to restart their journey from the main hub.: <Link href="/">Military Army Tycoon Wiki</Link></p>
    <p data-relation-ref="">A generated plan may expose a squad-choice gap that the evidence explorer can resolve honestly.: <Link href="/tier-list">compare the available evidence</Link></p>
    <p data-relation-ref="">Economy and just-started result states require a full documented action guide.: <Link href="/guides/how-to-get-cash">how to get Cash</Link></p>
    <p data-relation-ref="">Capture and balanced result states need the exact procedure and current-result warning.: <Link href="/guides/how-to-capture">capture a strategic location</Link></p>
    <p data-relation-ref="">Defense and capture plans need a direct command-label reference.: <Link href="/wiki/orders">Attack, Hold, Follow and Retreat</Link></p></nav>
    <section data-source-notes="true" data-asset-module="source-notes"><h2 className="text-2xl font-bold">Sources</h2>{toolPage.sources.map(source => <aside id={source.anchor} key={source.id} data-source-ref={source.id}>{source.url ? <a href={source.url} rel="noopener noreferrer"><strong>{source.label}</strong></a> : <strong>{source.label}</strong>}<p>{source.scope}</p>{source.checkedAt ? <time>Checked {source.checkedAt}</time> : null}</aside>)}</section>
    <AdsterraToolBottom />
</main>;
}