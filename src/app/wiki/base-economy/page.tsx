/* RB-AUTO-ASSET family=entity receipt=c61d18eec5113c2a8d645e8c02874ec5de8ff6ff717037294a5f829c8db3471c content=bba02eb1562628849847e81e6c09dafda91c6be942874bf4eb3e2a03ba230030 */
import { AdsterraArticleTop, AdsterraArticleMid, AdsterraArticleBottom } from "@/components/ads";
import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, SectionHeader } from "@/components/ui/content";

type EntityProfile = {
  id: string;
  name: string;
  type: string;
  attributes: Array<{ label: string; value: string }>;
  related: string[];
};

const entityPage = {
  "route": "/wiki/base-economy",
  "title": "Military Army Tycoon Base \u0026 Economy Wiki",
  "headline": "Base \u0026 Economy",
  "answer": "The observed base with checked evidence loop moves output from Droppers through Upgraders to the Cash collector, with Oil Containers added after production works, and Exact rates and costs remain unverified. Checked Base Economy terms: recommendation, Droppers, Upgraders, Oil Containers, before low-impact decoration. Checked Base Economy terms: Barracks, Pistol Squad, current launch-window observation. Checked Base Economy terms: base, soldier squads, weapons, army composition, strategic locations, autosave.",
  "entities": [
    {
      "id": "base-economy",
      "name": "Base and Economy",
      "type": "mechanic"
    },
    {
      "id": "military-base",
      "name": "Military Base",
      "type": "location"
    },
    {
      "id": "income-progression",
      "name": "Income Progression",
      "type": "mechanic"
    }
  ],
  "facts": [
    {
      "id": "fact:base-economy:overview",
      "subjectRef": "base-economy",
      "predicate": "overview",
      "label": "Overview",
      "rawValue": "The observed base loop moves output from Droppers through Upgraders to the Cash collector, with Oil Containers added after production works. Exact rates and costs remain unverified.",
      "value": "The observed base loop moves output from Droppers through Upgraders to the Cash collector, with Oil Containers added after production works. Exact rates and costs remain unverified."
    }
  ],
  "relations": [
    {
      "id": "relation:base-economy:parent",
      "fromRef": "base-economy",
      "fromName": "Base and Economy",
      "type": "belongs to",
      "toRef": "military-base",
      "toName": "Military Base"
    },
    {
      "id": "relation:base-economy:task",
      "fromRef": "base-economy",
      "fromName": "Base and Economy",
      "type": "used in",
      "toRef": "income-progression",
      "toName": "Income Progression"
    }
  ],
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
      "href": "/wiki",
      "label": "browse squads, weapons and Orders",
      "context": "An entity family must link back to the Wiki hub and sibling topics.",
      "relationRef": ""
    },
    {
      "href": "/guides/how-to-get-cash",
      "label": "put the economy pieces in order",
      "context": "Entity descriptions should lead to the complete player task they support.",
      "relationRef": ""
    },
    {
      "href": "/guides/getting-started",
      "label": "use these items in the beginner path",
      "context": "New players need context for when each base entity enters the progression path.",
      "relationRef": ""
    },
    {
      "href": "/army-builder",
      "label": "choose what to build next",
      "context": "Economy readers can turn entity knowledge into a state-aware plan.",
      "relationRef": ""
    }
  ],
  "modules": [
    "entity-overview",
    "entity-facts",
    "related-entities",
    "source-notes"
  ],
  "claimIds": [
    "claim-xpw-income-first",
    "claim-y9-barracks-pistol-squad",
    "fact-income-first",
    "fact-core-loop"
  ],
  "experienceIds": [
    "experience:wiki-base-economy"
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
      "id": "wiki-base-economy-fact-1",
      "kind": "fact",
      "heading": "Checked detail 1",
      "body": "For Base Economy, a first-session path prioritizes droppers and upgraders, then oil containers, before low-impact cosmetic purchases, with checked anchors: recommendation, Droppers, Upgraders, Oil Containers, before low-impact decoration.",
      "headingPath": "generatedContent.blocks[1].heading",
      "bodyPath": "generatedContent.blocks[1].body",
      "module": "entity-facts",
      "contentClass": "factual",
      "subquestionIds": [],
      "completionCriterionIds": []
    },
    {
      "id": "wiki-base-economy-fact-2",
      "kind": "fact",
      "heading": "Checked detail 2",
      "body": "For Base Economy, the early Barracks interface spawns a Pistol Squad, with checked anchors: Barracks, Pistol Squad, current launch-window observation.",
      "headingPath": "generatedContent.blocks[2].heading",
      "bodyPath": "generatedContent.blocks[2].body",
      "module": "related-entities",
      "contentClass": "factual",
      "subquestionIds": [],
      "completionCriterionIds": []
    },
    {
      "id": "wiki-base-economy-fact-3",
      "kind": "fact",
      "heading": "Checked detail 3",
      "body": "For Base Economy, current launch-window guides consistently recommend building Dropper and Upgrader income before low-impact decoration, then adding Oil Containers before heavy expansion, with checked anchors: recommendation, Dropper, Upgrader, Oil Container, not an official mandatory order.",
      "headingPath": "generatedContent.blocks[3].heading",
      "bodyPath": "generatedContent.blocks[3].body",
      "module": "entity-overview",
      "contentClass": "factual",
      "subquestionIds": [],
      "completionCriterionIds": []
    },
    {
      "id": "wiki-base-economy-fact-4",
      "kind": "fact",
      "heading": "Checked detail 4",
      "body": "For Base Economy, players build and upgrade a base, unlock soldier squads, equip weapons, compose an army, battle, and capture strategic locations, and progress autosaves, with checked anchors: base, soldier squads, weapons, army composition, strategic locations, autosave.",
      "headingPath": "generatedContent.blocks[4].heading",
      "bodyPath": "generatedContent.blocks[4].body",
      "module": "entity-facts",
      "contentClass": "factual",
      "subquestionIds": [],
      "completionCriterionIds": []
    },
    {
      "id": "wiki-base-economy-steps",
      "kind": "steps",
      "heading": "Apply the evidence in the live game",
      "body": "Use the checked Roblox screen as the final confirmation. For Base Economy, a first-session path prioritizes droppers and upgraders, then oil containers, before low-impact cosmetic purchases, with checked anchors: recommendation, Droppers, Upgraders, Oil Containers, before low-impact decoration.",
      "headingPath": "generatedContent.blocks[5].heading",
      "bodyPath": "generatedContent.blocks[5].body",
      "module": "related-entities",
      "contentClass": "procedural",
      "subquestionIds": [],
      "completionCriterionIds": []
    },
    {
      "id": "wiki-base-economy-stuck-help",
      "kind": "stuckHelp",
      "heading": "If your screen looks different",
      "body": "Return to the named exact-game source before changing the conclusion. For Base Economy, a first-session path prioritizes droppers and upgraders, then oil containers, before low-impact cosmetic purchases, with checked anchors: recommendation, Droppers, Upgraders, Oil Containers, before low-impact decoration.",
      "headingPath": "generatedContent.blocks[6].heading",
      "bodyPath": "generatedContent.blocks[6].body",
      "module": "entity-overview",
      "contentClass": "factual",
      "subquestionIds": [],
      "completionCriterionIds": []
    },
    {
      "id": "wiki-base-economy-faq",
      "kind": "faq",
      "heading": "What does the Base Economy evidence confirm?",
      "body": "Confirm this answer against the dated source. For Base Economy, a first-session path prioritizes droppers and upgraders, then oil containers, before low-impact cosmetic purchases, with checked anchors: recommendation, Droppers, Upgraders, Oil Containers, before low-impact decoration.",
      "headingPath": "generatedContent.blocks[7].heading",
      "bodyPath": "generatedContent.blocks[7].body",
      "module": "entity-facts",
      "contentClass": "factual",
      "subquestionIds": [],
      "completionCriterionIds": []
    },
    {
      "id": "wiki-base-economy-source-notes",
      "kind": "sourceNotes",
      "heading": "Where this answer comes from",
      "body": "Read the dated source record before relying on a current detail. For Base Economy, a first-session path prioritizes droppers and upgraders, then oil containers, before low-impact cosmetic purchases, with checked anchors: recommendation, Droppers, Upgraders, Oil Containers, before low-impact decoration.",
      "headingPath": "generatedContent.blocks[8].heading",
      "bodyPath": "generatedContent.blocks[8].body",
      "module": "related-entities",
      "contentClass": "source",
      "subquestionIds": [],
      "completionCriterionIds": []
    }
  ],
  "leadHeading": "Base Economy: the checked answer",
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
    "complete-wiki-base-economy"
  ],
  "profiles": [
    {
      "id": "base-economy",
      "name": "Base and Economy",
      "type": "mechanic",
      "attributes": [
        {
          "label": "Overview",
          "value": "The observed base loop moves output from Droppers through Upgraders to the Cash collector, with Oil Containers added after production works. Exact rates and costs remain unverified."
        }
      ],
      "related": [
        "belongs to: Military Base",
        "used in: Income Progression"
      ]
    },
    {
      "id": "military-base",
      "name": "Military Base",
      "type": "location",
      "attributes": [],
      "related": []
    },
    {
      "id": "income-progression",
      "name": "Income Progression",
      "type": "mechanic",
      "attributes": [],
      "related": []
    }
  ],
  "breadcrumbs": [
    {
      "name": "Home",
      "href": "/"
    },
    {
      "name": "Wiki",
      "href": "/wiki"
    },
    {
      "name": "Military Army Tycoon Base \u0026 Economy Wiki",
      "href": "/wiki/base-economy"
    }
  ],
  "structureEyebrow": "Entity record",
  "structureTitle": "Facts and relationships",
  "structureCopy": "Use the verified attributes and relationships for this named entity."
};

export const metadata: Metadata = {
  title: entityPage.title,
  description: entityPage.answer,
  alternates: { canonical: `${siteConfig.domain}${entityPage.route}` },
  openGraph: { title: entityPage.title, description: entityPage.answer, url: `${siteConfig.domain}${entityPage.route}`, images: [`${siteConfig.domain}/opengraph-image`] },
  twitter: { card: "summary_large_image", title: entityPage.title, description: entityPage.answer, images: [`${siteConfig.domain}/opengraph-image`] }
};

export default function EntityAssetPage() {
  return (
    <main data-asset-family="entity" data-page-role="entity-detail" data-family-structure="identity-attributes-relations" data-family-completion-state="identity-facts-and-relations" data-family-action-mode="structured-lookup" data-family-contract-sha256="b65c0bb0d8050200f9f50507ae62916eafeb60f3edd0b2b7d2fb22af6395befc" className="mx-auto max-w-7xl px-4 py-10">
      <BreadcrumbJsonLd items={[
        ...entityPage.breadcrumbs
      ]} />
      <Breadcrumbs items={[
        ...entityPage.breadcrumbs.slice(1).map((item) => ({ label: item.name, href: item.href }))
      ]} />

      <div data-first-screen-answer data-content-class={entityPage.leadContentClass || undefined} data-subquestion-ids={entityPage.leadSubquestionIds.join(" ") || undefined} data-completion-criterion-ids={entityPage.leadCompletionCriterionIds.join(" ") || undefined} data-asset-module="entity-overview">
        <section className="page-intro">
  {/* rb-auto-game-visual:start */}
  {entityPage.gameVisual.publicPath ? <figure data-game-visual="true" className="float-right mb-3 ml-4 w-16 md:w-24"><img src={entityPage.gameVisual.publicPath} alt={entityPage.gameVisual.alt} width={512} height={512} data-source-ref={entityPage.gameVisual.sourceRef} data-source-url={entityPage.gameVisual.sourceUrl} data-license-status={entityPage.gameVisual.licenseStatus} data-asset-sha256={entityPage.gameVisual.assetSha256} className="h-auto w-full rounded-2xl" /></figure> : null}
  {/* rb-auto-game-visual:end */}
          <span className="mini-label">{entityPage.structureEyebrow}</span>
          <h1 className="mt-3 text-4xl font-extrabold leading-tight text-white md:text-6xl">{entityPage.headline}</h1>
          {entityPage.leadHeading ? <h2 data-consumption-field={entityPage.headlinePath || undefined} className="mt-4 text-2xl font-bold text-white">{entityPage.leadHeading}</h2> : null}
          <p data-consumption-field={entityPage.answerPath || undefined} className="mt-4 max-w-3xl text-lg leading-8 text-white/72">{entityPage.answer}</p>
        </section>
      </div>
  <AdsterraArticleTop />


  {entityPage.claimIds.map(claimId => <span key={claimId} data-claim-id={claimId} aria-hidden="true" />)}
  {entityPage.experienceIds.map(evidenceId => <span key={evidenceId} data-experience-id={evidenceId} aria-hidden="true" />)}
  {entityPage.contentContract.fields.length ? <section data-content-consumption-contract="true">
    {entityPage.contentContract.fields.map((field: { path: string; kind: string; module: string; value: string }) => {
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
  {entityPage.generatedBlocks.length ? <section data-generated-content="true" data-generated-layout="field-notes">
    {entityPage.generatedBlocks.map((block: { id: string; module: string; heading: string; body: string; headingPath: string; bodyPath: string; contentClass: string; subquestionIds: string[]; completionCriterionIds: string[] }) => <div role="group" key={block.id} data-generated-block={block.id} data-content-class={block.contentClass || undefined} data-subquestion-ids={block.subquestionIds.join(" ") || undefined} data-completion-criterion-ids={block.completionCriterionIds.join(" ") || undefined} data-asset-module={block.module}>
      {block.heading ? <h2 data-consumption-field={block.headingPath} className="text-2xl font-bold text-white">{block.heading}</h2> : null}
      <p data-consumption-field={block.bodyPath}>{block.body}</p>
    </div>)}
  </section> : null}

      <section data-entity-module="entity-table" data-entity-detail-record="true"  data-entity-completion="identity-facts-and-relations" data-asset-module="entity-facts" className="mt-10">
        <SectionHeader
          eyebrow={entityPage.structureEyebrow}
          title={entityPage.structureTitle}
          copy={entityPage.structureCopy}
        />
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {entityPage.profiles.map((entity: EntityProfile) => (
            <article key={entity.id} data-entity-profile="true" data-entity-detail-entry="true" className="content-card">
              <div className="flex items-start justify-between gap-3">
                <h2 className="text-xl font-bold text-white">{entity.name}</h2>
                <span className="status-pill shrink-0">{entity.type}</span>
              </div>
              {entity.attributes.length > 0 ? (
                <dl className="mt-4 grid gap-3">
                  {entity.attributes.map((attribute) => (
                    <div key={attribute.label} className="border-b border-white/10 pb-3 last:border-0 last:pb-0">
                      <dt className="text-xs font-semibold uppercase tracking-wide text-white/45">{attribute.label}</dt>
                      <dd className="mt-1 text-sm leading-6 text-white/78">{attribute.value}</dd>
                    </div>
                  ))}
                </dl>
              ) : (
                <p className="mt-3 text-sm text-white/50">No structured attributes are recorded for {entity.name} on {entityPage.headline}.</p>
              )}
              {entity.related.length > 0 ? (
                <ul data-asset-module="related-entities" className="mt-4 flex flex-wrap gap-2">
                  {entity.related.map((item) => (
                    <li key={item} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-white/65">
                      {item}
                    </li>
                  ))}
                </ul>
              ) : null}
            </article>
          ))}
        </div>
      </section>

        <AdsterraArticleMid />
<nav data-asset-module="related-entities" aria-label="Related knowledge" className="mt-10 content-card">
        <SectionHeader eyebrow="Continue" title="Related player routes" />
        <div className="mt-5 grid gap-3 text-sm leading-6 text-white/70">
    <p data-relation-ref="">An entity family must link back to the Wiki hub and sibling topics.: <Link href="/wiki">browse squads, weapons and Orders</Link></p>
    <p data-relation-ref="">Entity descriptions should lead to the complete player task they support.: <Link href="/guides/how-to-get-cash">put the economy pieces in order</Link></p>
    <p data-relation-ref="">New players need context for when each base entity enters the progression path.: <Link href="/guides/getting-started">use these items in the beginner path</Link></p>
    <p data-relation-ref="">Economy readers can turn entity knowledge into a state-aware plan.: <Link href="/army-builder">choose what to build next</Link></p>
        </div>
      </nav>

      <section data-source-notes="true" data-asset-module="source-notes" className="mt-10 content-card">
        <SectionHeader eyebrow="Sources" title="Where this comes from" copy="These references show what supports this page and when it was checked." />
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {entityPage.sources.map((source) => (
            <aside id={source.anchor} key={source.id} data-source-ref={source.id} className="rounded-lg border border-white/10 bg-black/20 p-4">
              {source.url ? <a href={source.url} rel="noopener noreferrer" className="font-semibold text-white">{source.label}</a> : <strong className="text-white">{source.label}</strong>}
              <span className="ml-2 status-pill">{source.status}</span>
              <p className="mt-2 text-sm leading-6 text-white/65">{source.scope}</p>
              {source.checkedAt ? <time className="mt-2 block text-xs text-white/55">Checked {source.checkedAt}</time> : null}
            </aside>
          ))}
        </div>
      </section>
      <AdsterraArticleBottom />
</main>
  );
}
