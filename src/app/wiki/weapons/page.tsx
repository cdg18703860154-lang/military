import type { Metadata } from "next";
import Link from "next/link";
import { GuideArticle } from "@/components/content/GuideArticle";
import { siteConfig } from "@/data/site";

const title = "Military Army Tycoon Weapons: Confirmed Names & Limits";
const description = "See the currently documented Glock-17 and AK-47 Rifle names, evidence limits and how weapons connect to the current capture loop.";

export const metadata: Metadata = {
  title: { absolute: title }, description,
  alternates: { canonical: `${siteConfig.domain}/wiki/weapons/` },
  openGraph: { title, description, url: `${siteConfig.domain}/wiki/weapons/`, images: [`${siteConfig.domain}/opengraph-image`] },
  twitter: { card: "summary_large_image", title, description, images: [`${siteConfig.domain}/opengraph-image`] }
};

const faq = [
  { q: "Which weapons are documented?", a: "Glock-17 and AK-47 Rifle labels." },
  { q: "Is the AK-47 Rifle better?", a: "The evidence does not include a same-condition damage or clear-time test." },
  { q: "What is the best weapon for an outpost?", a: "Not confirmed. Use a currently available weapon without sacrificing base and squad preparation." }
];

export default function WeaponsPage() {
  return (
    <GuideArticle
      eyebrow="Wiki entity record • reviewed September 6, 2026"
      title="Military Army Tycoon Weapons"
      description="Current exact-game visual evidence supports the labels Glock-17 and AK-47 Rifle. It does not establish a complete arsenal, current prices, damage, fire rate, range, upgrade values, or a trustworthy weapon ranking."
      status={<p className="text-sm text-white/70"><strong>Complete arsenal:</strong> not confirmed. <strong>Weapon stats:</strong> not verified.</p>}
      beforeSteps={<section className="content-card"><h2>Current weapon records</h2><div className="mt-4 overflow-x-auto"><table><thead><tr><th>Weapon</th><th>What is confirmed</th><th>What remains unknown</th></tr></thead><tbody><tr><td>Glock-17</td><td>Visible exact-game label</td><td>Cost, damage, fire rate, range, unlock requirement</td></tr><tr><td>AK-47 Rifle</td><td>Visible exact-game label</td><td>Cost, damage, fire rate, range, unlock requirement</td></tr></tbody></table></div></section>}
      faq={faq}
      sourceNotes={<><aside><strong>Evidence boundary:</strong> The labels are supported by exact-game visuals; the general equip-and-fight role is official. No additional weapon, price, stat, or rank is inferred from promotional artwork.</aside><aside>Prepare the wider objective with the <Link href="/guides/how-to-capture/" className="font-bold text-cyan-300">capture guide</Link>, <Link href="/guides/how-to-get-cash/" className="font-bold text-cyan-300">Cash guide</Link>, and <Link href="/wiki/squads/" className="font-bold text-cyan-300">squad record</Link>.</aside></>}
      breadcrumb="Weapons"
      route="/wiki/weapons/"
      family="wiki"
    >
      <section className="content-card"><h2>How weapons fit the current loop</h2><p>The official description says players equip weapons and fight enemy armies. A dated capture walkthrough shows the player contributing at an outpost. That supports the general role of personal weapons, but not a current best weapon or exact damage advantage.</p><p>Use the live interface to check availability, displayed price, unlock requirement, value for the objective, and whether the purchase removes Cash needed for base or squad preparation.</p></section>
      <section className="content-card"><h2>What this page does not publish</h2><ul className="mt-4 list-disc space-y-2 pl-6"><li>A complete weapon list or Glock-versus-AK DPS.</li><li>A weapon ranking or fixed AK price.</li><li>Promotional-image weapons or weapons from another game.</li><li>Scripted or executor-based access.</li></ul></section>
    </GuideArticle>
  );
}
