import type { Metadata } from "next";
import Link from "next/link";
import { AdsterraArticleBottom, AdsterraArticleMid, AdsterraArticleTop } from "@/components/ads";
import { PageIntro } from "@/components/ui/content";
import { siteConfig } from "@/data/site";

const title = "Military Army Tycoon Wiki: Systems & Records";
const description = "Browse documented Military Army Tycoon economy, squad, weapon and Order records plus the current evidence-first squad comparison.";

export const metadata: Metadata = {
  title: { absolute: title }, description,
  alternates: { canonical: `${siteConfig.domain}/wiki/` },
  openGraph: { title, description, url: `${siteConfig.domain}/wiki/`, images: [`${siteConfig.domain}/opengraph-image`] },
  twitter: { card: "summary_large_image", title, description, images: [`${siteConfig.domain}/opengraph-image`] }
};

const records = [
  { title: "Base & Economy", body: "Documented Droppers, Upgraders, collector and launch-window economy records—without invented rates or prices.", href: "/wiki/base-economy/" },
  { title: "Squads", body: "Current Pistol, Rifle and SMG labels, evidence status, selection limits and missing stats.", href: "/wiki/squads/" },
  { title: "Weapons", body: "Confirmed Glock-17 and AK-47 Rifle labels, unconfirmed Intervention Sniper reports, and how to evaluate a live weapon.", href: "/wiki/weapons/" },
  { title: "Orders", body: "How Follow, Attack, Hold and Retreat are used for travel, combat, defense and recovery.", href: "/wiki/orders/" },
  { title: "Squad Comparison", body: "An evidence-first comparison of current squad records and the test standard required before publishing a real tier list.", href: "/tier-list/" }
] as const;

export default function WikiPage() {
  return (
    <main data-asset-family="wiki" data-page-role="hub-category" data-hub-directory="true" className="mx-auto max-w-5xl px-4 py-10">
      <section data-first-screen-answer><PageIntro eyebrow="Exact-game record directory" title="Military Army Tycoon Wiki Records" description="Browse conservative system and entity records for Battle Action's experience at Place ID 95409544559668. Missing prices, stats, and mechanics stay missing rather than being borrowed from another game." /></section>
      <AdsterraArticleTop />
      <section className="content-card"><h2>Base, squads, and equipment</h2><div className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">{records.slice(0, 3).map((record) => <article key={record.href} className="content-card"><h3>{record.title}</h3><p>{record.body}</p><Link href={record.href} className="mt-4 inline-flex font-bold text-cyan-300">Open {record.title} →</Link></article>)}</div></section>
      <AdsterraArticleMid />
      <section className="content-card"><h2>Commands and comparison</h2><div className="mt-5 grid gap-4 sm:grid-cols-2">{records.slice(3).map((record) => <article key={record.href} className="content-card"><h3>{record.title}</h3><p>{record.body}</p><Link href={record.href} className="mt-4 inline-flex font-bold text-cyan-300">Open {record.title} →</Link></article>)}</div></section>
      <section className="content-card"><h2>Apply a record to your next task</h2><p>Use the first-session and capture guides for procedures. Use the planner when you know the objective but need the next safe step.</p><div className="mt-4 flex flex-wrap gap-3"><Link href="/guides/" className="button-secondary">Browse guides</Link><Link href="/army-builder/" className="button-primary">Open the Army Mission Planner</Link></div></section>
      <AdsterraArticleBottom />
    </main>
  );
}
