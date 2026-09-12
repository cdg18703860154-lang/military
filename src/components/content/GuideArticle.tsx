import type { ReactNode } from "react";
import { AdsterraArticleBottom, AdsterraArticleMid, AdsterraArticleTop } from "@/components/ads";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/components/seo/JsonLd";
import { PageIntro } from "@/components/ui/content";

export type GuideFaq = { q: string; a: string; answer?: ReactNode; includeInSchema?: boolean };
export type GuideStep = { title: string; body: ReactNode };

export function GuideArticle({
  eyebrow,
  title,
  description,
  status,
  beforeSteps,
  stepsTitle,
  steps,
  children,
  mistakes,
  faq,
  sourceNotes,
  breadcrumb,
  route,
  family = "guide"
}: {
  eyebrow: string;
  title: string;
  description: string;
  status?: ReactNode;
  beforeSteps?: ReactNode;
  stepsTitle?: string;
  steps?: GuideStep[];
  children?: ReactNode;
  mistakes?: string[];
  faq: GuideFaq[];
  sourceNotes: ReactNode;
  breadcrumb: string;
  route: string;
  family?: "guide" | "wiki";
}) {
  return (
    <main data-asset-family={family} data-page-role="guide-how-to" className="mx-auto max-w-4xl px-4 py-10">
      <section data-first-screen-answer>
        <PageIntro eyebrow={eyebrow} title={title} description={description}>
          {status}
        </PageIntro>
      </section>

      <AdsterraArticleTop />
      {beforeSteps}

      {steps?.length ? (
        <section id="guide-steps" data-guide-steps>
          <h2>{stepsTitle}</h2>
          <ol>{steps.map((step) => <li key={step.title}><h3>{step.title}</h3>{step.body}</li>)}</ol>
        </section>
      ) : null}

      <AdsterraArticleMid />
      {children}

      {mistakes?.length ? (
        <section data-guide-common-mistakes>
          <h2>Common mistakes</h2>
          <ul>{mistakes.map((mistake) => <li key={mistake}>{mistake}</li>)}</ul>
        </section>
      ) : null}

      <AdsterraArticleBottom />

      <section data-guide-faq>
        <h2>Frequently asked questions</h2>
        {faq.map((item) => <article key={item.q}><h3>{item.q}</h3>{item.answer ?? <p>{item.a}</p>}</article>)}
      </section>

      <section data-source-notes>{sourceNotes}</section>
      <FaqJsonLd items={faq.filter((item) => item.includeInSchema !== false)} />
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: breadcrumb, href: route }]} />
    </main>
  );
}
