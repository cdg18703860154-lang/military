import type { Metadata } from "next";
import Link from "next/link";
import { AdsterraArticleBottom, AdsterraArticleMid, AdsterraArticleTop } from "@/components/ads";
import { PageIntro } from "@/components/ui/content";
import { siteConfig } from "@/data/site";

const title = "Military Army Tycoon Guides";
const description = "Choose a Military Army Tycoon guide for your first session, Cash progression, outpost capture, or the current Rebirth warning.";

export const metadata: Metadata = {
  title: { absolute: title }, description,
  alternates: { canonical: `${siteConfig.domain}/guides/` },
  openGraph: { title, description, url: `${siteConfig.domain}/guides/`, images: [`${siteConfig.domain}/opengraph-image`] },
  twitter: { card: "summary_large_image", title, description, images: [`${siteConfig.domain}/opengraph-image`] }
};

const guides = [
  { title: "Correct Game Check", body: "Tell Battle Action’s Military Army Tycoon from InfinityInteractive’s Military Tycoon using developer names, Place IDs, code UI and map clues.", href: "/guides/military-army-tycoon-vs-military-tycoon/", action: "Open the correct game" },
  { title: "Getting Started", body: "Build the first income loop, redeem current codes, recruit an early squad, learn Orders and prepare for your first outpost.", href: "/guides/getting-started/", action: "Follow the first-session route" },
  { title: "How to Get Cash", body: "Compare current Cash sources, spending priorities, code rewards and the dated evidence behind outpost income.", href: "/guides/how-to-get-cash/", action: "Improve the Cash loop" },
  { title: "How to Capture", body: "Use Follow and Attack, enter the marked capture area, verify the live banner and fix common failed attempts.", href: "/guides/how-to-capture/", action: "Prepare an outpost capture" },
  { title: "Rebirth", body: "Read the dated cost and reset warning, separate known details from unknowns, and check the current prompt before confirming.", href: "/guides/rebirth/", action: "Read the Rebirth warning" }
] as const;

export default function GuidesPage() {
  return (
    <main data-asset-family="guide" data-page-role="hub-category" data-hub-directory="true" className="mx-auto max-w-4xl px-4 py-10">
      <section data-first-screen-answer><PageIntro eyebrow="Task directory" title="Military Army Tycoon Guides" description="Choose the problem you need to solve now. Each guide uses the Battle Action experience at Place ID 95409544559668 and labels dated or unconfirmed details." /></section>
      <AdsterraArticleTop />
      <section className="content-card"><h2>Start with your current task</h2><div className="mt-5 grid gap-4 sm:grid-cols-2">{guides.slice(0, 2).map((guide) => <article key={guide.href} className="content-card"><h3>{guide.title}</h3><p>{guide.body}</p><Link href={guide.href} className="mt-4 inline-flex font-bold text-cyan-300">{guide.action} →</Link></article>)}</div></section>
      <AdsterraArticleMid />
      <section className="content-card"><h2>Continue progression safely</h2><div className="mt-5 grid gap-4 sm:grid-cols-2">{guides.slice(2).map((guide) => <article key={guide.href} className="content-card"><h3>{guide.title}</h3><p>{guide.body}</p><Link href={guide.href} className="mt-4 inline-flex font-bold text-cyan-300">{guide.action} →</Link></article>)}</div></section>
      <section className="content-card"><h2>Need a system reference?</h2><p>Use the wiki for documented economy, squad, weapon, and Order records, or turn your readiness into a conservative next step.</p><div className="mt-4 flex flex-wrap gap-3"><Link href="/wiki/" className="button-secondary">Browse the wiki</Link><Link href="/army-builder/" className="button-primary">Open the Army Mission Planner</Link></div></section>
      <AdsterraArticleBottom />
    </main>
  );
}
