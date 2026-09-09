import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs, PageIntro } from "@/components/ui/content";
import { gameConfig } from "@/data/game.config";
import { siteConfig } from "@/data/site";

const title = "Sources & Editorial Method | Military Army Tycoon Wiki";
const description = "See how this independent Military Army Tycoon guide checks game identity, current codes, dated gameplay evidence, source conflicts and corrections.";

export const metadata: Metadata = {
  title: { absolute: title }, description,
  alternates: { canonical: `${siteConfig.domain}/sources/` },
  openGraph: { title, description, url: `${siteConfig.domain}/sources/`, images: [`${siteConfig.domain}/opengraph-image`] },
  twitter: { card: "summary_large_image", title, description, images: [`${siteConfig.domain}/opengraph-image`] }
};

export default function SourcesPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <Breadcrumbs items={[{ label: "Sources", href: "/sources/" }]} />
      <PageIntro eyebrow="Editorial method • updated and fact-checked September 9, 2026" title="Sources and Editorial Method" description="Military Army Tycoon Wiki covers Battle Action's Roblox experience at Place ID 95409544559668. It is not operated by Roblox or Battle Action. The goal is to answer player tasks without mixing in similarly named games." />

      <section className="content-card"><h2>Who creates the content?</h2><p>Content is researched and edited by the site&apos;s editorial team. The site owner is responsible for source selection, claim wording, corrections, and publication. A date changes only when a page or its evidence has been meaningfully reviewed; no fictional expert profile is used.</p></section>

      <section className="content-card"><h2>How the content is researched</h2><ol className="mt-4 list-decimal space-y-2 pl-6"><li>Confirm the official experience, developer, Place ID, and Universe ID.</li><li>Check official descriptions and creator-controlled destinations first.</li><li>Use footage or screenshots only when exact-game identity is visible.</li><li>Compare current independent sources for time-sensitive details.</li><li>Record both source date and site check date.</li><li>Separate demonstrated results from advice and inference.</li><li>Exclude other Military Tycoon experiences.</li><li>Publish unresolved conflict and correct pages when stronger evidence appears.</li></ol></section>

      <section className="content-card"><h2>Evidence levels</h2><div className="mt-4 overflow-x-auto"><table><thead><tr><th>Level</th><th>Meaning</th><th>Public wording</th></tr></thead><tbody><tr><td>Official</td><td>Roblox or Battle Action controlled</td><td>Confirmed in the official description</td></tr><tr><td>Observed</td><td>Clear dated exact-game footage or screenshot</td><td>Observed in a dated game record</td></tr><tr><td>Cross-source reported</td><td>At least two current independent sources agree</td><td>Reported by multiple current sources</td></tr><tr><td>Single-source</td><td>One readable source, not independently confirmed</td><td>Visible limitation or excluded from firm conclusions</td></tr><tr><td>Excluded</td><td>Wrong game, artwork inference, AI guess, copied claim, or unusable evidence</td><td>Not published as fact</td></tr></tbody></table></div></section>

      <section className="content-card"><h2>How conflicts are handled</h2><p>Sources are not decided by a simple vote. Editors compare publication and event dates, exact Roblox experience, platform or mode, account and group conditions, whether a live result is visible, and whether several articles copied one original. If conflict remains, the page says so—as the <Link href="/codes/" className="font-bold text-cyan-300">Codes page</Link> does for possible group membership.</p></section>

      <section className="content-card"><h2>Source independence</h2><p>Several articles repeating one YouTube video, screenshot set, or original post are not independent direct sources. Claims are traced to the earliest accessible evidence. If a direct video is unavailable and only a fan transcription or search snippet can be read, the claim remains single-source. A quoted timestamp is not adopted until the underlying segment can be checked.</p></section>
      <section className="content-card"><h2>Time-sensitive information</h2><p>Codes, title changes, outpost rewards, prices, squad availability, and Rebirth prompts can change. Pages use labels such as “Last materially updated,” “Last fact-checked,” “Observed on,” “Cross-source reported,” and “Current status unconfirmed.” Dates are not advanced just to appear fresh.</p></section>

      <section className="content-card"><h2>Use of AI and automation</h2><p>AI may help organize notes, compare claims, draft original wording, check consistency, and find repeated templates. AI is not a gameplay source and cannot create a reward, price, probability, unlock condition, route, code, patch note, or first-hand test.</p></section>

      <section className="content-card"><h2>Wrong-game exclusions</h2><p><Link href="/guides/military-army-tycoon-vs-military-tycoon/">Check Battle Action versus InfinityInteractive</Link> before applying another guide.</p><p>Data from Military Tycoon by another developer, Army Tycoon, War Tycoon, Noob Army Tycoon, or similarly named experiences is excluded. Warning signs include unrelated Diamonds, vaults, bunker workers, oil rigs, heists, or a different Place ID.</p></section>

      <section className="content-card"><h2>Image and video policy</h2><ul className="mt-4 list-disc space-y-2 pl-6"><li>Official art identifies the game; it does not prove mechanics.</li><li>A thumbnail does not prove a pictured unit is playable.</li><li>Third-party screenshots are not copied merely because attribution is possible.</li><li>Video details require the relevant content or timestamp.</li><li>A video title is a topic signal, not an answer.</li><li>AI art is never presented as a game screenshot.</li><li>Search snippets, thumbnails and competitor-written transcriptions are discovery leads, not substitutes for a directly checked segment.</li></ul></section>

      <section className="content-card"><h2>Corrections</h2><p>Send the exact page URL, exact claim, current screenshot or video, date, visible game identity, and an explanation through <Link href="/contact/" className="font-bold text-cyan-300">Contact</Link>. Correction records use the date, page, previous wording, new wording, and reason.</p></section>

      <section className="content-card"><h2>Primary official identity links</h2><nav className="mt-4 grid gap-3 sm:grid-cols-2" aria-label="Official identity sources"><a href={gameConfig.dataSources.officialGameUrl} target="_blank" rel="noreferrer" className="row-link"><span>Official Roblox experience<small>Battle Action • Place ID 95409544559668</small></span></a><Link href="/trello/" className="row-link"><span>Verified official destinations<small>Official-link status and safety notes</small></span></Link></nav></section>

      <section className="content-card"><h2>Why this site exists</h2><p>The site exists to help players finish a real Military Army Tycoon task without searching again for a clearer answer. It does not create a separate page for every keyword variation.</p><div className="mt-4 flex flex-wrap gap-3"><Link href="/updates/" className="button-secondary">See the dated update log</Link><Link href="/about/" className="button-secondary">About this guide</Link></div></section>
    </main>
  );
}
