/* RB-AUTO-TOOL-METADATA-LAYOUT */
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { siteConfig } from "@/data/site";

const route = "/army-builder";
const title = "Military Army Tycoon Army Builder";
const description = "Turn four current-session inputs into a copyable army plan that respects base readiness, squad evidence, public-server risk, and the chosen objective.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${siteConfig.domain}${route}` },
  openGraph: { title, description, url: `${siteConfig.domain}${route}`, images: [`${siteConfig.domain}/opengraph-image`] },
  twitter: { card: "summary_large_image", title, description, images: [`${siteConfig.domain}/opengraph-image`] }
};

export default function ToolRouteLayout({ children }: { children: ReactNode }) {
  return children;
}
