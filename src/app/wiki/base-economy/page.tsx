import type { Metadata } from "next";
import Link from "next/link";
import { GuideArticle } from "@/components/content/GuideArticle";
import { siteConfig } from "@/data/site";

const title = "Military Army Tycoon Base & Economy Guide";
const description = "Understand the documented Dropper, Upgrader, collector, Oil Container and Barracks progression without unsupported income rates or prices.";

export const metadata: Metadata = {
  title: { absolute: title }, description,
  alternates: { canonical: `${siteConfig.domain}/wiki/base-economy/` },
  openGraph: { title, description, url: `${siteConfig.domain}/wiki/base-economy/`, images: [`${siteConfig.domain}/opengraph-image`] },
  twitter: { card: "summary_large_image", title, description, images: [`${siteConfig.domain}/opengraph-image`] }
};

const faq = [
  { q: "What is the early economy loop?", a: "Dated exact-game evidence shows Droppers, Upgraders, and a collector." },
  { q: "Are Oil Containers worth it?", a: "They appear in the site's launch-window record, but their current cost and return are not verified." },
  { q: "Should I finish the base before recruiting?", a: "Not necessarily. Stabilize income, then buy the squad needed for the next objective while retaining recovery Cash." },
  { q: "Does progress save?", a: "The official Roblox description says progress saves automatically." }
];

export default function BaseEconomyPage() {
  return (
    <GuideArticle
      eyebrow="Wiki system record • reviewed September 6, 2026"
      title="Military Army Tycoon Base & Economy"
      description="The documented early base loop moves production from Droppers through Upgraders to a Cash collector. Launch-window evidence also shows Oil Containers later in the route, while the official description confirms base expansion and upgrades. Exact current prices, rates, and payback times are not verified."
      status={<p className="text-sm text-white/70"><strong>Purpose:</strong> system record, not a fixed fastest-money build. <strong>Exact current rates:</strong> unavailable.</p>}
      beforeSteps={<section className="content-card"><h2>Current system record</h2><div className="mt-4 overflow-x-auto"><table><thead><tr><th>System</th><th>What is supported</th><th>Evidence limit</th></tr></thead><tbody>
        <tr><td>Droppers</td><td>Part of the early production route</td><td>Exact price and output not current-verified</td></tr>
        <tr><td>Upgraders</td><td>Improve the documented production chain</td><td>Exact multiplier and payback not verified</td></tr>
        <tr><td>Cash collector</td><td>Makes generated value available</td><td>Collection behavior should be checked live</td></tr>
        <tr><td>Oil Containers</td><td>Present in launch-window site evidence</td><td>Current price, rate, and priority not rechecked</td></tr>
        <tr><td>Barracks</td><td>Connects economy to squad recruitment</td><td>Current purchase route and cost can change</td></tr>
        <tr><td>Base upgrades</td><td>Official description confirms expansion and upgrades</td><td>Complete building list not verified</td></tr>
        <tr><td>Autosave</td><td>Official description says progress saves automatically</td><td>Does not explain every account or server issue</td></tr>
      </tbody></table></div></section>}
      faq={faq}
      sourceNotes={<><aside><strong>Evidence boundary:</strong> Official sources support expansion and autosave. The production chain and Oil Containers are dated records. No empty prices, Cash-per-minute claims, or another game&apos;s oil systems are substituted.</aside><aside>For a task-focused purchase route, use <Link href="/guides/how-to-get-cash/" className="font-bold text-cyan-300">How to Get Cash</Link>. Continue to <Link href="/wiki/squads/" className="font-bold text-cyan-300">Squads</Link> after income is stable.</aside></>}
      breadcrumb="Base & Economy"
      route="/wiki/base-economy/"
      family="wiki"
    >
      <section className="content-card"><h2>Practical purchase principle</h2><ul className="mt-4 list-disc space-y-2 pl-6"><li>Need income: start or improve active production.</li><li>Need a squad: complete the Barracks route after income is stable.</li><li>Need a capture: retain replacement Cash.</li><li>Need Rebirth: read the current prompt before freezing progression.</li><li>Optional visual purchase: delay it when it does not unlock the next useful system.</li></ul></section>
      <section className="content-card"><h2>What this page does not claim</h2><ul className="mt-4 list-disc space-y-2 pl-6"><li>A complete building list or universal pad order.</li><li>Exact Cash per minute, prices, or Oil Container ROI.</li><li>A Barracks price or permanent outpost multiplier.</li><li>An auto-collect feature or working auto-farm.</li></ul></section>
    </GuideArticle>
  );
}
