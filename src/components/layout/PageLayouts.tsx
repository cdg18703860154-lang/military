import type { ReactNode } from "react";
import { AdsterraArticleLeftRail, AdsterraArticleRightRail } from "@/components/ads";

export function ArticleThreeColumnLayout({ children }: { children: ReactNode }) {
  return (
    <div className="page-scaffold page-scaffold-inner page-scaffold-detail" data-page-family="detail">
      <div className="article-ad-rail" data-ad-rail="left">
        <AdsterraArticleLeftRail />
      </div>
      <div className="page-scaffold-content">{children}</div>
      <div className="article-ad-rail" data-ad-rail="right">
        <AdsterraArticleRightRail />
      </div>
    </div>
  );
}
