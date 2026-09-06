import type { Metadata } from "next";
import Link from "next/link";
import { AdsterraArticleBottom, AdsterraArticleMid, AdsterraArticleTop } from "@/components/ads";
import { FaqJsonLd } from "@/components/seo/JsonLd";
import { PageIntro } from "@/components/ui/content";
import { gameConfig } from "@/data/game.config";
import { siteConfig } from "@/data/site";

const statusPage = { "route": "/trello" } as const;
const title = "Military Army Tycoon Trello, Discord & Official Links";
const description = "Use verified Military Army Tycoon Roblox and Battle Action links, and see the current status of Trello, Discord, wiki and patch-note destinations.";

export const metadata: Metadata = {
  title: { absolute: title }, description,
  alternates: { canonical: `${siteConfig.domain}${statusPage.route}/` },
  openGraph: { title, description, url: `${siteConfig.domain}${statusPage.route}`, images: [`${siteConfig.domain}/opengraph-image`] },
  twitter: { card: "summary_large_image", title, description, images: [`${siteConfig.domain}/opengraph-image`] }
};

const faq = [
  { q: "Is there an official Military Army Tycoon Trello?", a: "No creator-controlled Trello was confirmed during the September 6, 2026 check." },
  { q: "Is there an official Discord?", a: "No accessible creator-controlled Discord destination was confirmed during the September 6, 2026 check." },
  { q: "Which links are verified?", a: "The official Roblox experience and the Battle Action Roblox group." }
];

export default function OfficialLinksPage() {
  return <main data-asset-family="guide" data-page-role="freshness-status" className="mx-auto max-w-4xl px-4 py-10">
    <section data-first-screen-answer><PageIntro eyebrow="Official-link status • checked September 6, 2026" title="Trello, Discord & Official Links" description="The verified destinations are the Battle Action Roblox experience and creator group. No official Trello, accessible Discord, official wiki, or detailed patch-note feed was confirmed during this check." /></section>
    <AdsterraArticleTop />
    <section className="content-card"><h2>Verified destinations</h2><nav className="mt-4 grid gap-3 sm:grid-cols-2" aria-label="Verified destinations"><a href={gameConfig.dataSources.officialGameUrl} target="_blank" rel="noreferrer" className="row-link"><span>Official Roblox experience<small>Battle Action • Place ID 95409544559668</small></span></a><a href="https://www.roblox.com/communities/683115741/Battle-Action" target="_blank" rel="noreferrer" className="row-link"><span>Battle Action Roblox group<small>Verified creator group for the experience</small></span></a></nav></section>
    <section className="content-card"><h2>Not confirmed</h2><div className="mt-4 overflow-x-auto"><table><thead><tr><th>Destination</th><th>Status on September 6, 2026</th><th>Safe action</th></tr></thead><tbody><tr><td>Trello</td><td>No creator-controlled board confirmed</td><td>Do not follow a fan-board link as official</td></tr><tr><td>Discord</td><td>No accessible creator-controlled invite confirmed</td><td>Use the Roblox group for current creator identity</td></tr><tr><td>Official wiki</td><td>Not confirmed</td><td>Treat this site as an independent fan guide</td></tr><tr><td>Detailed patch notes</td><td>No accessible feed confirmed</td><td>Use the dated update log without invented notes</td></tr></tbody></table></div></section>
    <AdsterraArticleMid />
    <section className="content-card"><h2>How a destination is verified</h2><ol className="mt-4 list-decimal space-y-2 pl-6"><li>Start from the official Roblox experience or creator group.</li><li>Confirm Battle Action controls or links to the destination.</li><li>Check the exact experience and Place ID.</li><li>Reject lookalike domains, copied invite lists, and unrelated games.</li><li>Record the date and leave unresolved destinations unlinked.</li></ol></section>
    <section className="content-card"><h2>If a link stops working</h2><p>Return to the official Roblox experience and Battle Action group. Do not search for a replacement invite and assume the first result is official. Report a changed creator link through <Link href="/contact/" className="font-bold text-cyan-300">Contact</Link>.</p></section>
    <section data-guide-faq><h2>Frequently asked questions</h2>{faq.map((item) => <article key={item.q}><h3>{item.q}</h3><p>{item.a}</p></article>)}</section>
    <section data-source-notes><aside><strong>Identity record:</strong> Military Army Tycoon by Battle Action, Place ID 95409544559668, Universe ID 10698216738. The public release date in the official description is August 15, 2026.</aside><aside>See the <Link href="/updates/" className="font-bold text-cyan-300">dated update log</Link> and <Link href="/sources/" className="font-bold text-cyan-300">editorial method</Link>.</aside></section>
    <AdsterraArticleBottom />
    <FaqJsonLd items={faq} />
  </main>;
}
