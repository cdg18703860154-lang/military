import type { Metadata } from "next";
import { siteConfig } from "@/data/site";
import { Breadcrumbs, PageIntro } from "@/components/ui/content";

export const metadata: Metadata = {
  title: `Contact ${siteConfig.name}`,
  description: `Contact and correction guidance for ${siteConfig.name}.`,
  alternates: { canonical: `${siteConfig.domain}/contact` },
  openGraph: {
    title: `Contact ${siteConfig.name}`,
    description: `Contact and correction guidance for ${siteConfig.name}.`,
    url: `${siteConfig.domain}/contact`,
    images: [`${siteConfig.domain}/opengraph-image`]
  },
  twitter: {
    card: "summary_large_image",
    title: `Contact ${siteConfig.name}`,
    description: `Contact and correction guidance for ${siteConfig.name}.`,
    images: [`${siteConfig.domain}/opengraph-image`]
  }
};

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <Breadcrumbs items={[{ label: "Contact Us", href: "/contact" }]} />
      <PageIntro
        eyebrow="Contact us"
        title="Corrections and source updates"
        description="Use this page for site corrections, source updates, and editorial feedback. Official game support belongs on Roblox and creator-owned channels."
      />
      <section className="mt-10 grid gap-4">
        <article className="content-card">
          <h2 className="text-xl font-bold text-white">Channel status</h2>
          <p className="mt-2 leading-7 text-white/68">
            The public issue tracker is live for corrections, source updates, editorial feedback, privacy
            questions, and rights requests. Open a new issue and avoid including Roblox account details,
            payment information, private contact details, or other sensitive information.
          </p>
          <a
            className="mt-4 inline-flex min-h-11 items-center rounded-xl border border-cyan-300/35 bg-cyan-300/10 px-4 py-2 font-semibold text-cyan-200 transition hover:bg-cyan-300/15"
            href="https://github.com/cdg18703860154-lang/military/issues"
            rel="noopener noreferrer"
          >
            Open the Military issue tracker
          </a>
        </article>

        <article className="content-card">
          <h2 className="text-xl font-bold text-white">Before sending a correction</h2>
          <p className="mt-2 leading-7 text-white/68">
            Include the page URL, the claim that needs correction, the source that supports the change,
            and the date you checked it. Use a separate issue for privacy or rights requests so the subject
            is clear.
          </p>
        </article>

        <article className="content-card">
          <h2 className="text-xl font-bold text-white">Official support boundary</h2>
          <p className="mt-2 leading-7 text-white/68">
            We cannot recover Roblox accounts, handle purchases, moderate players, grant rewards, or speak
            for the game creators. Use Roblox and creator-owned channels for official support.
          </p>
        </article>
      </section>
    </main>
  );
}
