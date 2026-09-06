import type { Metadata } from "next";
import Link from "next/link";
import { GuideArticle } from "@/components/content/GuideArticle";
import { siteConfig } from "@/data/site";

const title = "Military Army Tycoon Squad Comparison & Tier List Status";
const description = "Compare the currently documented Pistol, Rifle and SMG Squad evidence without fabricated stats, and see why no universal tier rank is published yet.";

export const metadata: Metadata = {
  title: { absolute: title }, description,
  alternates: { canonical: `${siteConfig.domain}/tier-list/` },
  openGraph: { title, description, url: `${siteConfig.domain}/tier-list/`, images: [`${siteConfig.domain}/opengraph-image`] },
  twitter: { card: "summary_large_image", title, description, images: [`${siteConfig.domain}/opengraph-image`] }
};

const faq = [
  { q: "What is the best squad?", a: "No universal best is supported by current evidence." },
  { q: "Is Pistol Squad good?", a: "It is the earliest documented option used in an August 31, 2026 first-outpost walkthrough. That does not prove it beats later squads." },
  { q: "Is Rifle better than SMG?", a: "Not confirmed by a same-condition test." },
  { q: "Why not rank units from official artwork?", a: "Artwork identifies the game visually but does not prove every pictured unit is playable, available, or stronger." },
  { q: "Will this page add a real tier list?", a: "Only after the roster and repeatable tests are available. The date and method will be published." }
];

export default function TierListPage() {
  return (
    <GuideArticle
      eyebrow="Comparison status • reviewed September 6, 2026"
      title="Military Army Tycoon Squad Comparison"
      description="There is not enough reproducible current data for a trustworthy universal letter ranking. Evidence confirms Pistol Squad, Rifle Squad, and SMG Squad labels, while a dated August 31, 2026 walkthrough uses Pistol for an early outpost. Health, damage, cost, range, and same-condition clear times remain incomplete."
      status={<p className="text-sm text-white/70"><strong>Tier status:</strong> no universal letter ranking published. <strong>Reason:</strong> incomplete roster and no repeatable same-condition benchmark.</p>}
      beforeSteps={<section className="content-card"><h2>Current comparison</h2><div className="mt-4 overflow-x-auto"><table><thead><tr><th>Squad</th><th>Documented</th><th>Not documented</th><th>Safe conclusion</th></tr></thead><tbody>
        <tr><td>Pistol Squad</td><td>Visible label; dated early capture use</td><td>Current cost, DPS, survivability, upgrades</td><td>Earliest documented capture option, not universally best</td></tr>
        <tr><td>Rifle Squad</td><td>Visible label; one source calls it sustained-damage</td><td>Same-condition test, current cost, exact damage</td><td>Candidate for later testing; no rank</td></tr>
        <tr><td>SMG Squad</td><td>Visible label; one source describes close-range pressure</td><td>Same-condition test, current cost, range, damage</td><td>Candidate for objective tests; no rank</td></tr>
      </tbody></table></div><p>Breacher, Reaper, vehicles, and promotional-image units stay excluded until exact-game evidence confirms current availability and role.</p></section>}
      faq={faq}
      sourceNotes={<><aside><strong>Evidence boundary:</strong> Pistol, Rifle, and SMG labels are confirmed; role descriptions are secondary and dated. Formation artwork is not ranking evidence.</aside><aside>Review the underlying <Link href="/wiki/squads/" className="font-bold text-cyan-300">squad records</Link>, test commands in <Link href="/wiki/orders/" className="font-bold text-cyan-300">Orders</Link>, or build a goal-based plan with the <Link href="/army-builder/" className="font-bold text-cyan-300">Army Mission Planner</Link>.</aside></>}
      breadcrumb="Squad Comparison"
      route="/tier-list/"
    >
      <section className="content-card"><h2>Which squad should you choose now?</h2><div className="mt-4 grid gap-4 sm:grid-cols-2"><article><h3>Earliest documented outpost route</h3><p>Use a visible, replaceable squad that responds to Orders. The dated route demonstrates Pistol Squad for the first target.</p></article><article><h3>Rifle and SMG are available</h3><p>Compare replacement cost, survival, clear time, Follow and Attack response, Hold usefulness, and Retreat recovery under the same conditions.</p></article><article><h3>Base defense</h3><p>Use a squad that responds reliably to Hold where needed. A label cannot replace a defensive test.</p></article><article><h3>Contested objective</h3><p>Keep replacement Cash and Retreat when the push fails. A “best army” video title is not a benchmark.</p></article></div></section>
      <section className="content-card"><h2>Why there is no letter ranking yet</h2><p>A defensible result needs a verified roster, equal unit count and upgrade state, the same objective and server conditions, at least three runs, clear-time and survivor records, a test date, and retesting after major changes.</p></section>
      <section className="content-card"><h2>Planned test record</h2><div className="mt-4 overflow-x-auto"><table><thead><tr><th>Field</th><th>Required record</th></tr></thead><tbody><tr><td>Squad</td><td>Exact live label</td></tr><tr><td>Unlock and cost</td><td>Current visible values</td></tr><tr><td>Upgrade state</td><td>Same for candidates</td></tr><tr><td>Objective</td><td>Same defender group</td></tr><tr><td>Run count</td><td>At least three</td></tr><tr><td>Results</td><td>Average clear time and survivors</td></tr><tr><td>Commands</td><td>Same Order sequence</td></tr><tr><td>Patch</td><td>Test date plus video or screenshot</td></tr></tbody></table></div><p>This is a future evidence standard, not a claim that testing is complete.</p></section>
      <section data-tier-team-combo="true" className="content-card"><h2>Turn the comparison into a team build</h2><p>The current evidence supports a goal-and-readiness plan, not a fixed team combo. Use the planner to create an explainable team build for income, Orders, capture, defense, recovery, or a Rebirth check.</p><Link href="/army-builder" className="mt-4 inline-flex button-primary">Open the Army Mission Planner</Link></section>
    </GuideArticle>
  );
}
