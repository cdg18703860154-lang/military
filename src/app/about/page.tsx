import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs, PageIntro } from "@/components/ui/content";
import { gameConfig } from "@/data/game.config";
import { siteConfig } from "@/data/site";

const title = "About Military Army Tycoon Wiki";
const description = "Learn who maintains this independent Military Army Tycoon guide, how information is checked and how to submit a correction.";

export const metadata: Metadata = {
  title: { absolute: title }, description,
  alternates: { canonical: `${siteConfig.domain}/about/` },
  openGraph: { title, description, url: `${siteConfig.domain}/about/`, images: [`${siteConfig.domain}/opengraph-image`] },
  twitter: { card: "summary_large_image", title, description, images: [`${siteConfig.domain}/opengraph-image`] }
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <Breadcrumbs items={[{ label: "About", href: "/about/" }]} />
      <PageIntro eyebrow="Independent fan guide" title="About Military Army Tycoon Wiki" description="Military Army Tycoon Wiki is a fan-made guide for the Battle Action Roblox experience at Place ID 95409544559668. It is not affiliated with, endorsed by, or operated by Roblox or Battle Action." />

      <section className="content-card"><h2>What the site covers</h2><ul className="mt-4 list-disc space-y-2 pl-6"><li>Current code status and first-session progression.</li><li>Base and Cash decisions.</li><li>Squad Orders and outpost capture.</li><li>Rebirth warnings.</li><li>Documented squads and weapons.</li><li>Verified update checks.</li></ul></section>

      <section className="content-card"><h2>Who maintains the site</h2><p>The site owner and editorial team are responsible for source selection, content decisions, corrections, and publication. A real editor or team name will be displayed only when the owner chooses to publish it. The site does not invent a military expert, Roblox tester, or author profile.</p><p><strong>Current editorial record:</strong> researched and reviewed by the site editorial team; last fact-checked September 9, 2026.</p></section>

      <section className="content-card"><h2>How guides are made</h2><p>The process checks official Roblox identity first, then accessible creator pages, exact-game evidence, current editorial sources, and player topic signals. Unsupported data is removed or labeled unconfirmed. The site owner has not personally tested every mechanic, so pages do not say “we tested” without a real live-client record.</p><Link href="/sources/" className="mt-4 inline-flex font-bold text-cyan-300">Read the editorial method →</Link></section>

      <section className="content-card"><h2>Why the site exists</h2><p>The purpose is to give players one clear, evidence-aware answer to a real task while avoiding wrong-game information. Content is not expanded merely to hit a word count or cover every keyword variation.</p></section>

      <section className="content-card"><h2>Advertising and independence</h2><p>Advertising or affiliate relationships, when present, do not change the evidence standard. Sponsored links must be disclosed and appropriately labeled. Read the <Link href="/disclosure/" className="font-bold text-cyan-300">site disclosure</Link>.</p></section>

      <section className="content-card"><h2>Corrections</h2><p>Use Contact to report a code change, moved button, new squad, changed price, outpost result, or Rebirth prompt. Include the date and exact game identity where possible.</p><div className="mt-4 flex flex-wrap gap-3"><Link href="/updates/" className="button-secondary">See the update log</Link><Link href="/contact/" className="button-secondary">Submit a correction</Link><a href={gameConfig.dataSources.officialGameUrl} target="_blank" rel="noreferrer" className="button-primary">Open the official Roblox experience</a></div></section>
    </main>
  );
}
