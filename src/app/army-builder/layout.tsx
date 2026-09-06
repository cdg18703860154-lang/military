/* RB-AUTO-TOOL-METADATA-LAYOUT */
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { siteConfig } from "@/data/site";

const route = "/army-builder";
const title = "Military Army Tycoon Army Mission Planner";
const description = "Choose your goal and current readiness to get an explainable Military Army Tycoon plan for economy, squads, Orders, capture or Rebirth checks.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: `${siteConfig.domain}${route}/` },
  openGraph: { title, description, url: `${siteConfig.domain}${route}/`, images: [`${siteConfig.domain}/opengraph-image`] },
  twitter: { card: "summary_large_image", title, description, images: [`${siteConfig.domain}/opengraph-image`] }
};

export default function ToolRouteLayout({ children }: { children: ReactNode }) {
  return children;
}
