import type { Metadata } from "next";
import Link from "next/link";
import { GuideArticle } from "@/components/content/GuideArticle";
import { siteConfig } from "@/data/site";

const statusPage = { "route": "/updates" } as const;
const title = "Military Army Tycoon Updates & GAZ Tiger Status";
const description = "Track verified Military Army Tycoon title changes, current code checks, dated gameplay observations and details that still lack official patch notes.";

export const metadata: Metadata = {
  title: { absolute: title }, description,
  alternates: { canonical: `${siteConfig.domain}${statusPage.route}/` },
  openGraph: { title, description, url: `${siteConfig.domain}${statusPage.route}`, images: [`${siteConfig.domain}/opengraph-image`] },
  twitter: { card: "summary_large_image", title, description, images: [`${siteConfig.domain}/opengraph-image`] }
};

const faq = [
  { q: "Was GAZ Tiger definitely added in a new update?", a: "The official title included [GAZ Tiger] when checked September 6, 2026. Feature details and the exact event date are not confirmed." },
  { q: "Are there official patch notes?", a: "No accessible creator-controlled detailed patch-note feed was confirmed during the September 6, 2026 check." },
  { q: "Are the current codes official?", a: "The strings and rewards are cross-source reported. No accessible developer-controlled code announcement was located." },
  { q: "Why include old dated observations?", a: "They show what a source demonstrated and stop an old result from becoming an undated permanent claim." }
];

export default function UpdatesPage() {
  return (
    <GuideArticle
      eyebrow="Independent verification log • checked September 6, 2026"
      title="Military Army Tycoon Updates"
      description="This is not an official patch-note feed. It records changes on official pages, current cross-source reports, dated gameplay observations, and what remains unconfirmed. The verified official destinations are the Roblox experience and Battle Action group."
      status={<p className="text-sm text-white/70"><strong>Official detailed changelog located:</strong> no.</p>}
      beforeSteps={<><section className="content-card"><h2>September 6, 2026 — Official title now includes “[GAZ Tiger]”</h2><p>The official Roblox experience was titled <strong>Military Army Tycoon [GAZ Tiger]</strong>. This confirms Battle Action was highlighting GAZ Tiger in the live title on that date.</p><p>It does not confirm the unlock method, currency, stats, controls, best use, or whether another system changed. No accessible creator-controlled changelog answered those questions, so a standalone GAZ Tiger guide is not published.</p></section><section className="content-card"><h2>September 5, 2026 — Current code sources list two codes</h2><p>Pro Game Guides and NerdsChalk both list <code>BONUS</code> and <code>JOINED</code>, each with a reported 50,000 Cash reward. Sources disagree about a universal group-membership prerequisite, so the <Link href="/codes/" className="font-bold text-cyan-300">Codes page</Link> keeps that condition unresolved.</p></section></>}
      faq={faq}
      sourceNotes={<><aside><strong>Evidence boundary:</strong> Official title and description, September 5 code-source updates, a dated August 31 capture source, and an August 30 Rebirth record are kept separate. A timestamp or title change is never expanded into invented patch notes.</aside><aside>Verify links through <Link href="/trello/" className="font-bold text-cyan-300">Official Links</Link> and review the full <Link href="/sources/" className="font-bold text-cyan-300">editorial method</Link>.</aside></>}
      breadcrumb="Updates"
      route="/updates/"
    >
      <section className="content-card"><h2>August 31, 2026 — Dated outpost walkthrough</h2><p>A readable exact-game walkthrough documents the early economy-to-Barracks route; Pistol Squad; Follow, Attack, Hold, and Retreat; Tent Camp, Small Town, and Centre; and a Tent Camp banner displaying +10% Income.</p><p>Additional claims about every outpost and cumulative bonuses were not independently confirmed by a second direct source.</p></section>
      <section className="content-card"><h2>August 30, 2026 — Launch-window Rebirth prompt record</h2><p>The dated site record shows a 250,000 Cash prompt, current money being lost, and Robux items being kept. The full reset list and benefit were not confirmed.</p></section>
      <section className="content-card"><h2>August 15, 2026 — Public release date</h2><p>The official Roblox description lists August 15, 2026 as the release date and says progress saves automatically.</p></section>
      <section className="content-card"><h2>What has not been verified</h2><p>As of September 6, 2026: an official detailed patch-note feed, official Trello, accessible official Discord, GAZ Tiger mechanics, the complete squad roster, weapon stats, every outpost reward, bonus stacking, and the current Rebirth multiplier or full reset list are not confirmed.</p></section>
      <section className="content-card"><h2>How this log handles changes</h2><ol className="mt-4 list-decimal space-y-2 pl-6"><li>Official page changes receive a check date.</li><li>Titles and timestamps do not become invented patch notes.</li><li>Gameplay evidence is labeled as a dated observation.</li><li>Multiple editorial reports can support cross-source status, not an official announcement.</li><li>Conflicts remain visible until resolved.</li><li>Dates change only after material review.</li></ol></section>
    </GuideArticle>
  );
}
