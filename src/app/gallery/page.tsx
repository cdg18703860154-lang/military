import type { Metadata } from "next";
import Image from "next/image";
import { AdsterraArticleBottom, AdsterraArticleMid, AdsterraArticleTop } from "@/components/ads";
import { PageIntro } from "@/components/ui/content";
import { siteConfig } from "@/data/site";

const title = "Military Army Tycoon Official Image Gallery";
const description = "View official Military Army Tycoon Roblox artwork used for game identity, with clear limits on what promotional images can prove.";

export const metadata: Metadata = {
  title: { absolute: title }, description,
  alternates: { canonical: `${siteConfig.domain}/gallery/` },
  openGraph: { title, description, url: `${siteConfig.domain}/gallery/`, images: [`${siteConfig.domain}/opengraph-image`] },
  twitter: { card: "summary_large_image", title, description, images: [`${siteConfig.domain}/opengraph-image`] }
};

const images = [
  { src: "/game-icon.png", width: 512, height: 512, title: "Official square game icon", alt: "Official Military Army Tycoon square game icon from Roblox" },
  { src: "/game-cover.png", width: 768, height: 432, title: "Official formation artwork", alt: "Official Military Army Tycoon promotional artwork showing a military formation" },
  { src: "/roblox-official-cover.png", width: 768, height: 432, title: "Official close-combat artwork", alt: "Official Military Army Tycoon promotional artwork showing close combat" }
] as const;

export default function GalleryPage() {
  return <main data-asset-family="entity" data-page-role="hub-category" className="mx-auto max-w-7xl px-4 py-10">
    <section data-first-screen-answer><PageIntro eyebrow="Official Roblox media" title="Military Army Tycoon Image Gallery" description="These three images were obtained from official Roblox thumbnail surfaces for Universe ID 10698216738. They identify the game visually; they do not prove that a pictured vehicle, weapon, or unit is playable or establish its stats." /></section>
    <AdsterraArticleTop />
    <section className="content-card"><h2>Official game images</h2><div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">{images.slice(0, 2).map((item) => <figure key={item.src} className="content-card"><Image src={item.src} alt={item.alt} width={item.width} height={item.height} className="h-auto w-full rounded-xl" /><figcaption className="mt-3"><strong>{item.title}</strong><p>Official promotional media from the Battle Action Roblox experience.</p></figcaption></figure>)}</div></section>
    <AdsterraArticleMid />
    <section className="content-card"><h2>Additional official artwork</h2><figure className="mt-5 content-card"><Image src={images[2].src} alt={images[2].alt} width={images[2].width} height={images[2].height} className="h-auto w-full rounded-xl" /><figcaption className="mt-3"><strong>{images[2].title}</strong><p>Artwork supports identity and visual recognition only; no combat statistic or unlock claim is inferred.</p></figcaption></figure></section>
    <section className="content-card"><h2>How these images are used</h2><p>Official art can help confirm the Battle Action experience and maintain a consistent visual identity. A thumbnail is not evidence of current availability, price, unlock conditions, or relative power. AI-generated art is not presented as an in-game screenshot.</p></section>
    <AdsterraArticleBottom />
  </main>;
}
