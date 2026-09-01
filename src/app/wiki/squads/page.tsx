/* RB-AUTO-ASSET family=entity receipt=5a04dbee278aa1dd69789f7d15334f10eedf75ce4e536e429a9fd4a40b1cabd5 content=cee0fe7651fd819bb9c34e3ce488e97384b45828587b2ae4b1a6c2e2fd720e1f */
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
  "route": "/wiki/squads",
  "title": "Military Army Tycoon Squads Wiki",
  "headline": "Military Army Tycoon Squads",
  "answer": "Current exact-game evidence with checked evidence shows Pistol Squad, Rifle Squad, and SMG Squad labels, and No complete roster, costs, health, damage, unsupported statistics, or universal ranking choice is verified. Checked Squads terms: Barracks, Pistol Squad, current launch-window observation. Checked Squads terms: Pistol Squad, Rifle Squad, SMG Squad, not a complete roster, no unsupported stats.",
  "entities": [
    {
      "id": "squad-system",
      "name": "Soldier Squads",
      "type": "mechanic"
    },
    {
      "id": "barracks",
      "name": "Barracks",
      "type": "mechanic"
    },
    {
      "id": "strategic-capture",
      "name": "Strategic Capture",
      "type": "mechanic"
    }
  ],
  "facts": [
    {
      "id": "fact:squad-system:overview",
      "subjectRef": "squad-system",
      "predicate": "overview",
      "label": "Overview",
      "rawValue": "Current exact-game evidence shows Pistol Squad, Rifle Squad, and SMG Squad labels. The complete roster, costs, health, damage, and universal best choice remain unverified.",
      "value": "Current exact-game evidence shows Pistol Squad, Rifle Squad, and SMG Squad labels. The complete roster, costs, health, damage, and universal best choice remain unverified."
    }
  ],
  "relations": [
    {
      "id": "relation:squad-system:parent",
      "fromRef": "squad-system",
      "fromName": "Soldier Squads",
      "type": "belongs to",
      "toRef": "barracks",
      "toName": "Barracks"
    },
    {
      "id": "relation:squad-system:task",
      "fromRef": "squad-system",
      "fromName": "Soldier Squads",
      "type": "used in",
      "toRef": "strategic-capture",
      "toName": "Strategic Capture"
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
      "label": "back to every Wiki family",
      "context": "The squad family needs a clear parent and sibling navigation path.",
      "relationRef": ""
    },
    {
      "href": "/tier-list",
      "label": "use the evidence explorer",
      "context": "Entity readers with a choice question should reach the primary comparison owner.",
      "relationRef": ""
    },
    {
      "href": "/wiki/orders",
      "label": "squad Orders controls",
      "context": "A squad lookup is incomplete without the command mechanism used to move it.",
      "relationRef": ""
    },
    {
      "href": "/army-builder",
      "label": "build a plan with the squads you see",
      "context": "Players can use their live squad availability as a safe planner input without inferred roles.",
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
    "claim-y9-barracks-pistol-squad",
    "fact-squad-visible"
  ],
  "experienceIds": [
    "experience:wiki-squads"
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
      "id": "wiki-squads-fact-1",
      "kind": "fact",
      "heading": "Checked detail 1",
      "body": "For Squads, the early Barracks interface spawns a Pistol Squad, with checked anchors: Barracks, Pistol Squad, current launch-window observation.",
      "headingPath": "generatedContent.blocks[1].heading",
      "bodyPath": "generatedContent.blocks[1].body",
      "module": "entity-facts",
      "contentClass": "factual",
      "subquestionIds": [],
      "completionCriterionIds": []
    },
    {
      "id": "wiki-squads-fact-2",
      "kind": "fact",
      "heading": "Checked detail 2",
      "body": "For Squads, current game evidence shows a Barracks and readable Pistol Squad, Rifle Squad, and SMG Squad labels, and it does not establish a complete roster or stats, with checked anchors: Pistol Squad, Rifle Squad, SMG Squad, not a complete roster, no unsupported stats.",
      "headingPath": "generatedContent.blocks[2].heading",
      "bodyPath": "generatedContent.blocks[2].body",
      "module": "related-entities",
      "contentClass": "factual",
      "subquestionIds": [],
      "completionCriterionIds": []
    },
    {
      "id": "wiki-squads-steps",
      "kind": "steps",
      "heading": "Apply the evidence in the live game",
      "body": "Use the checked Roblox screen as the final confirmation. For Squads, the early Barracks interface spawns a Pistol Squad, with checked anchors: Barracks, Pistol Squad, current launch-window observation.",
      "headingPath": "generatedContent.blocks[3].heading",
      "bodyPath": "generatedContent.blocks[3].body",
      "module": "entity-overview",
      "contentClass": "procedural",
      "subquestionIds": [],
      "completionCriterionIds": []
    },
    {
      "id": "wiki-squads-stuck-help",
      "kind": "stuckHelp",
      "heading": "If your screen looks different",
      "body": "Return to the named exact-game source before changing the conclusion. For Squads, the early Barracks interface spawns a Pistol Squad, with checked anchors: Barracks, Pistol Squad, current launch-window observation.",
      "headingPath": "generatedContent.blocks[4].heading",
      "bodyPath": "generatedContent.blocks[4].body",
      "module": "entity-facts",
      "contentClass": "factual",
      "subquestionIds": [],
      "completionCriterionIds": []
    },
    {
      "id": "wiki-squads-faq",
      "kind": "faq",
      "heading": "What does the Squads evidence confirm?",
      "body": "Confirm this answer against the dated source. For Squads, the early Barracks interface spawns a Pistol Squad, with checked anchors: Barracks, Pistol Squad, current launch-window observation.",
      "headingPath": "generatedContent.blocks[5].heading",
      "bodyPath": "generatedContent.blocks[5].body",
      "module": "related-entities",
      "contentClass": "factual",
      "subquestionIds": [],
      "completionCriterionIds": []
    },
    {
      "id": "wiki-squads-source-notes",
      "kind": "sourceNotes",
      "heading": "Where this answer comes from",
      "body": "Read the dated source record before relying on a current detail. For Squads, the early Barracks interface spawns a Pistol Squad, with checked anchors: Barracks, Pistol Squad, current launch-window observation.",
      "headingPath": "generatedContent.blocks[6].heading",
      "bodyPath": "generatedContent.blocks[6].body",
      "module": "entity-overview",
      "contentClass": "source",
      "subquestionIds": [],
      "completionCriterionIds": []
    }
  ],
  "leadHeading": "Squads: the checked answer",
  "headlinePath": "generatedContent.blocks[0].heading",
  "answerPath": "generatedContent.blocks[0].body",
  "leadContentClass": "factual",
  "leadSubquestionIds": [
    "question-1",
    "question-2"
  ],
  "leadCompletionCriterionIds": [
    "complete-wiki-squads"
  ],
  "profiles": [
    {
      "id": "squad-system",
      "name": "Soldier Squads",
      "type": "mechanic",
      "attributes": [
        {
          "label": "Overview",
          "value": "Current exact-game evidence shows Pistol Squad, Rifle Squad, and SMG Squad labels. The complete roster, costs, health, damage, and universal best choice remain unverified."
        }
      ],
      "related": [
        "belongs to: Barracks",
        "used in: Strategic Capture"
      ]
    },
    {
      "id": "barracks",
      "name": "Barracks",
      "type": "mechanic",
      "attributes": [],
      "related": []
    },
    {
      "id": "strategic-capture",
      "name": "Strategic Capture",
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
      "name": "Military Army Tycoon Squads Wiki",
      "href": "/wiki/squads"
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
    <p data-relation-ref="">The squad family needs a clear parent and sibling navigation path.: <Link href="/wiki">back to every Wiki family</Link></p>
    <p data-relation-ref="">Entity readers with a choice question should reach the primary comparison owner.: <Link href="/tier-list">use the evidence explorer</Link></p>
    <p data-relation-ref="">A squad lookup is incomplete without the command mechanism used to move it.: <Link href="/wiki/orders">squad Orders controls</Link></p>
    <p data-relation-ref="">Players can use their live squad availability as a safe planner input without inferred roles.: <Link href="/army-builder">build a plan with the squads you see</Link></p>
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
