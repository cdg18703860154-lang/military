/* RB-AUTO-ASSET family=entity receipt=482c1a538751d60e569477fca8f644d6a95f16dfd633751f63cdc87eb7636b30 content=81e51810da469d3a7ee53ad0fb1563d6e953fe7876d28d98d5ba5c8e817c9e11 */
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
  "route": "/wiki",
  "title": "Military Army Tycoon Wiki Database",
  "headline": "Military Army Tycoon Wiki Database",
  "answer": "Browse the exact-game with checked evidence knowledge base by system: base economy, squads, weapons, and Orders, and each entry separates official description, current observation, editorial guidance, and unknown fields. Checked Wiki terms: base, soldier squads, weapons, army composition, strategic locations, autosave.",
  "entities": [],
  "facts": [],
  "relations": [],
  "sources": [
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
      "label": "see every guide and tool",
      "context": "Entity browsers need a route back to player jobs and exact identity.",
      "relationRef": ""
    },
    {
      "href": "/wiki/base-economy",
      "label": "browse Droppers, Upgraders and Oil Containers",
      "context": "The documented economy theme needs a visible child route.",
      "relationRef": ""
    },
    {
      "href": "/wiki/squads",
      "label": "Military Army Tycoon squads",
      "context": "Three current squad names form a required entity-family child route.",
      "relationRef": ""
    },
    {
      "href": "/wiki/weapons",
      "label": "check the Glock-17 and AK-47 labels",
      "context": "Weapon lookup has a dedicated transparent family page.",
      "relationRef": ""
    },
    {
      "href": "/wiki/orders",
      "label": "find Attack, Hold, Follow and Retreat",
      "context": "Orders is a documented mechanic family with several exact queries.",
      "relationRef": ""
    },
    {
      "href": "/gallery",
      "label": "Military Army Tycoon gallery",
      "context": "Official imagery supports identity and visual browsing without creating unsupported entity pages.",
      "relationRef": ""
    },
    {
      "href": "/tier-list",
      "label": "choose by objective and evidence",
      "context": "Entity lookup should feed the primary comparison page rather than leave players with isolated facts.",
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
    "fact-core-loop"
  ],
  "experienceIds": [
    "experience:wiki"
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
      "id": "wiki-fact-1",
      "kind": "fact",
      "heading": "Checked detail 1",
      "body": "For Wiki, players build and upgrade a base, unlock soldier squads, equip weapons, compose an army, battle, and capture strategic locations, and progress autosaves, with checked anchors: base, soldier squads, weapons, army composition, strategic locations, autosave.",
      "headingPath": "generatedContent.blocks[1].heading",
      "bodyPath": "generatedContent.blocks[1].body",
      "module": "entity-facts",
      "contentClass": "factual",
      "subquestionIds": [],
      "completionCriterionIds": []
    },
    {
      "id": "wiki-steps",
      "kind": "steps",
      "heading": "Apply the evidence in the live game",
      "body": "Use the checked Roblox screen as the final confirmation. For Wiki, players build and upgrade a base, unlock soldier squads, equip weapons, compose an army, battle, and capture strategic locations, and progress autosaves, with checked anchors: base, soldier squads, weapons, army composition, strategic locations, autosave.",
      "headingPath": "generatedContent.blocks[2].heading",
      "bodyPath": "generatedContent.blocks[2].body",
      "module": "related-entities",
      "contentClass": "procedural",
      "subquestionIds": [],
      "completionCriterionIds": []
    },
    {
      "id": "wiki-stuck-help",
      "kind": "stuckHelp",
      "heading": "If your screen looks different",
      "body": "Return to the named exact-game source before changing the conclusion. For Wiki, players build and upgrade a base, unlock soldier squads, equip weapons, compose an army, battle, and capture strategic locations, and progress autosaves, with checked anchors: base, soldier squads, weapons, army composition, strategic locations, autosave.",
      "headingPath": "generatedContent.blocks[3].heading",
      "bodyPath": "generatedContent.blocks[3].body",
      "module": "entity-overview",
      "contentClass": "factual",
      "subquestionIds": [],
      "completionCriterionIds": []
    },
    {
      "id": "wiki-faq",
      "kind": "faq",
      "heading": "What does the Wiki evidence confirm?",
      "body": "Confirm this answer against the dated source. For Wiki, players build and upgrade a base, unlock soldier squads, equip weapons, compose an army, battle, and capture strategic locations, and progress autosaves, with checked anchors: base, soldier squads, weapons, army composition, strategic locations, autosave.",
      "headingPath": "generatedContent.blocks[4].heading",
      "bodyPath": "generatedContent.blocks[4].body",
      "module": "entity-facts",
      "contentClass": "factual",
      "subquestionIds": [],
      "completionCriterionIds": []
    },
    {
      "id": "wiki-source-notes",
      "kind": "sourceNotes",
      "heading": "Where this answer comes from",
      "body": "Read the dated source record before relying on a current detail. For Wiki, players build and upgrade a base, unlock soldier squads, equip weapons, compose an army, battle, and capture strategic locations, and progress autosaves, with checked anchors: base, soldier squads, weapons, army composition, strategic locations, autosave.",
      "headingPath": "generatedContent.blocks[5].heading",
      "bodyPath": "generatedContent.blocks[5].body",
      "module": "related-entities",
      "contentClass": "source",
      "subquestionIds": [],
      "completionCriterionIds": []
    }
  ],
  "leadHeading": "Wiki: the checked answer",
  "headlinePath": "generatedContent.blocks[0].heading",
  "answerPath": "generatedContent.blocks[0].body",
  "leadContentClass": "factual",
  "leadSubquestionIds": [
    "question-1"
  ],
  "leadCompletionCriterionIds": [
    "complete-wiki"
  ],
  "profiles": [],
  "breadcrumbs": [
    {
      "name": "Home",
      "href": "/"
    },
    {
      "name": "Military Army Tycoon Wiki Database",
      "href": "/wiki"
    }
  ],
  "structureEyebrow": "Entity directory",
  "structureTitle": "Browse current entities",
  "structureCopy": "Choose a named entity to continue into its detail record."
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
    <main data-asset-family="entity" data-page-role="hub-category" data-family-structure="category-directory-to-detail" data-family-completion-state="discover-a-qualified-detail-route" data-family-action-mode="directory-navigation" data-family-contract-sha256="200530a8b1be2d78ad02b7363f5da25cbf044cf2b8179cf77f88df612694efef" className="mx-auto max-w-7xl px-4 py-10">
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

      <section data-entity-module="entity-table" data-entity-hub-directory="true" data-hub-directory="true" data-hub-entry="true" data-entity-completion="identity-facts-and-relations" data-asset-module="entity-facts" className="mt-10">
        <SectionHeader
          eyebrow={entityPage.structureEyebrow}
          title={entityPage.structureTitle}
          copy={entityPage.structureCopy}
        />
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {entityPage.profiles.map((entity: EntityProfile) => (
            <article key={entity.id} data-entity-profile="true" data-hub-entry="true" className="content-card">
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
    <p data-relation-ref="">Entity browsers need a route back to player jobs and exact identity.: <Link href="/">see every guide and tool</Link></p>
    <p data-relation-ref="">The documented economy theme needs a visible child route.: <Link href="/wiki/base-economy">browse Droppers, Upgraders and Oil Containers</Link></p>
    <p data-relation-ref="">Three current squad names form a required entity-family child route.: <Link href="/wiki/squads">Military Army Tycoon squads</Link></p>
    <p data-relation-ref="">Weapon lookup has a dedicated transparent family page.: <Link href="/wiki/weapons">check the Glock-17 and AK-47 labels</Link></p>
    <p data-relation-ref="">Orders is a documented mechanic family with several exact queries.: <Link href="/wiki/orders">find Attack, Hold, Follow and Retreat</Link></p>
    <p data-relation-ref="">Official imagery supports identity and visual browsing without creating unsupported entity pages.: <Link href="/gallery">Military Army Tycoon gallery</Link></p>
    <p data-relation-ref="">Entity lookup should feed the primary comparison page rather than leave players with isolated facts.: <Link href="/tier-list">choose by objective and evidence</Link></p>
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
