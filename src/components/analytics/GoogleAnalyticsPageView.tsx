"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function GoogleAnalyticsPageView({ measurementId }: { measurementId: string }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!measurementId || typeof window.gtag !== "function") {
      return;
    }

    const query = searchParams.toString();
    const pagePath = query ? `${pathname}?${query}` : pathname;

    window.gtag("event", "page_view", {
      page_title: document.title,
      page_location: window.location.href,
      page_path: pagePath,
      send_to: measurementId
    });
  }, [measurementId, pathname, searchParams]);

  useEffect(() => {
    function onClick(event: MouseEvent) {
      const link = event.target instanceof Element ? event.target.closest("a[href]") : null;
      if (!(link instanceof HTMLAnchorElement)) return;
      const url = new URL(link.href);
      const source_page = pathname;
      if (url.origin === window.location.origin) {
        if (url.pathname === "/guides/military-army-tycoon-vs-military-tycoon/") {
          window.gtag?.("event", "code_wrong_game_click", { source_page });
        }
        if (url.pathname.startsWith("/guides/") || url.pathname.startsWith("/wiki/")) {
          window.gtag?.("event", "related_guide_click", { source_page, target: url.pathname });
        }
      } else if (url.hostname === "www.roblox.com") {
        if (url.pathname.startsWith("/games/95409544559668/")) {
          window.gtag?.("event", "official_game_click", { source_page });
        } else if (url.pathname.startsWith("/communities/683115741/")) {
          window.gtag?.("event", "official_group_click", { source_page });
        }
      }
    }
    function onToggle(event: Event) {
      const details = event.target;
      if (details instanceof HTMLDetailsElement && details.open && details.dataset.claimGroup) {
        window.gtag?.("event", "source_expand", { page: pathname, claim_group: details.dataset.claimGroup });
      }
    }
    document.addEventListener("click", onClick);
    document.addEventListener("toggle", onToggle, true);
    return () => {
      document.removeEventListener("click", onClick);
      document.removeEventListener("toggle", onToggle, true);
    };
  }, [pathname]);

  return null;
}
