"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

export function PageScaffold({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isHomepage = pathname === "/";

  if (isHomepage) {
    return (
      <div className="page-scaffold page-scaffold-home">
        <div className="page-scaffold-content">{children}</div>
      </div>
    );
  }

  return (
    <div className="page-scaffold page-scaffold-inner">
      <aside data-empty-rail="left" aria-hidden="true" />
      <div className="page-scaffold-content">{children}</div>
      <aside data-empty-rail="right" aria-hidden="true" />
    </div>
  );
}
