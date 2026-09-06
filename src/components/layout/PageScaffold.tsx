"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { getAdPageFamily } from "@/lib/ad-layout";
import { ArticleThreeColumnLayout } from "./PageLayouts";

export function PageScaffold({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const family = getAdPageFamily(pathname);

  if (family === "home") {
    return (
      <div className="page-scaffold page-scaffold-home" data-page-family={family}>
        <div className="page-scaffold-content">{children}</div>
      </div>
    );
  }

  if (family === "detail") {
    return <ArticleThreeColumnLayout key={pathname}>{children}</ArticleThreeColumnLayout>;
  }

  return (
    <div className="page-scaffold page-scaffold-inner" data-page-family={family}>
      <div className="page-scaffold-content">{children}</div>
    </div>
  );
}
