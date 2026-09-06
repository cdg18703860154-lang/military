import type { Metadata } from "next";
import Link from "next/link";
import { GuideArticle } from "@/components/content/GuideArticle";
import { siteConfig } from "@/data/site";

const title = "Military Army Tycoon Squads: Confirmed Names & Limits";
const description = "Review the currently documented Pistol, Rifle and SMG Squad labels, what each source supports and which stats or rankings remain unverified.";

export const metadata: Metadata = {
  title: { absolute: title }, description,
  alternates: { canonical: `${siteConfig.domain}/wiki/squads/` },
  openGraph: { title, description, url: `${siteConfig.domain}/wiki/squads/`, images: [`${siteConfig.domain}/opengraph-image`] },
  twitter: { card: "summary_large_image", title, description, images: [`${siteConfig.domain}/opengraph-image`] }
};

const faq = [
  { q: "Which squads are confirmed?", a: "Pistol Squad, Rifle Squad, and SMG Squad labels." },
  { q: "Is Pistol Squad enough for the first outpost?", a: "It is used for the early objective in a dated August 31, 2026 walkthrough. Current conditions can change the result." },
  { q: "Are Breacher and Reaper confirmed?", a: "One secondary walkthrough lists them, but this review did not obtain enough independent exact-game evidence to place them in the confirmed table." },
  { q: "Which squad is best?", a: "Not confirmed. Use the Squad Comparison page to see the current evidence and testing standard." }
];

export default function SquadsPage() {
  return (
    <GuideArticle
      eyebrow="Wiki entity record • reviewed September 6, 2026"
      title="Military Army Tycoon Squads"
      description="Current exact-game evidence supports Pistol Squad, Rifle Squad, and SMG Squad labels. A dated August 31, 2026 walkthrough uses Pistol as an early outpost option. The full roster, current costs, health, damage, range, upgrades, and universal ranking are not verified."
      status={<p className="text-sm text-white/70"><strong>Complete roster:</strong> not confirmed. <strong>Public hidden stats:</strong> unavailable.</p>}
      beforeSteps={<section className="content-card"><h2>Current squad records</h2><div className="mt-4 overflow-x-auto"><table><thead><tr><th>Squad</th><th>Confirmed evidence</th><th>Secondary description</th><th>Safe conclusion</th></tr></thead><tbody>
        <tr><td>Pistol Squad</td><td>Visible label; used in a dated early capture route</td><td>Starting infantry in the August 31, 2026 walkthrough</td><td>Earliest documented option, not universal best</td></tr>
        <tr><td>Rifle Squad</td><td>Visible label</td><td>One walkthrough calls it a sustained-damage step</td><td>Keep unranked until same-condition tests</td></tr>
        <tr><td>SMG Squad</td><td>Visible label</td><td>One walkthrough describes close-range pressure</td><td>Keep unranked until range and performance tests</td></tr>
      </tbody></table></div><p>Other names found on fan sites or in promotional images are not added without exact-game evidence.</p></section>}
      faq={faq}
      sourceNotes={<><aside><strong>Evidence boundary:</strong> Only Pistol, Rifle, and SMG Squad labels are confirmed. Breacher and Reaper remain single-source, and no prices, health, damage, or rank is inferred.</aside><aside>Compare the evidence in <Link href="/tier-list/" className="font-bold text-cyan-300">Squad Comparison</Link>, learn <Link href="/wiki/orders/" className="font-bold text-cyan-300">Orders</Link>, or plan a route with the <Link href="/army-builder/" className="font-bold text-cyan-300">Army Mission Planner</Link>.</aside></>}
      breadcrumb="Squads"
      route="/wiki/squads/"
      family="wiki"
    >
      <section className="content-card"><h2>How to choose a current squad</h2><ol className="mt-4 list-decimal space-y-2 pl-6"><li>Use a squad that is visible and unlocked.</li><li>Keep enough Cash to replace it.</li><li>Confirm it responds to Follow.</li><li>Match it to a real objective.</li><li>Use Retreat if the fight fails.</li><li>Compare the same conditions before calling one better.</li></ol></section>
      <section className="content-card"><h2>Missing data</h2><p>Full roster, unlock requirements, prices, squad size, health, damage, range, upgrade costs, replacement behavior, same-outpost performance, and changes after the September 6, 2026 [GAZ Tiger] title observation remain unverified.</p></section>
    </GuideArticle>
  );
}
