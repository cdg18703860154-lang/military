"use client";

import { usePathname } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import { runtimeConfig as sourceRuntimeConfig } from "@/lib/runtime-config";
import { chooseLeaderboardSize, getAdPageFamily, isCleanAdRoute, normalizeScriptUrl } from "@/lib/ad-layout";

export const ADSTERRA_RUNTIME_VERSION = "2026-09-06.1";

// Static sites do not all declare every optional Adsterra field in their
// environment-derived config type. The generated source can still provide
// any subset at build time, so read it through a common optional contract.
type AdsterraRuntimeConfig = {
  adsterraBanner160x300Key?: string;
  adsterraBanner160x300ScriptUrl?: string;
  adsterraBanner160x600Key?: string;
  adsterraBanner160x600ScriptUrl?: string;
  adsterraBanner300x250Key?: string;
  adsterraBanner300x250ScriptUrl?: string;
  adsterraBanner320x50Key?: string;
  adsterraBanner320x50ScriptUrl?: string;
  adsterraBanner468x60Key?: string;
  adsterraBanner468x60ScriptUrl?: string;
  adsterraBanner728x90Key?: string;
  adsterraBanner728x90ScriptUrl?: string;
  adsterraEnablePopunder?: boolean;
  adsterraEnableSocialBar?: boolean;
  adsterraEnableStickyRail?: boolean;
  adsterraLeaderboardId?: string;
  adsterraNative1Id?: string;
  adsterraNative1ScriptUrl?: string;
  adsterraPopunderDelayMs: number;
  adsterraPopunderMinPageViews: number;
  adsterraPopunderScriptUrl?: string;
  adsterraSmartLinkUrl?: string;
  adsterraSocialBarScriptUrl?: string;
};

const runtimeConfig = sourceRuntimeConfig as unknown as AdsterraRuntimeConfig;

type BannerSize = "160x300" | "160x600" | "300x250" | "320x50" | "468x60" | "728x90";

type BannerConfig = {
  height: number;
  key?: string;
  scriptUrl?: string;
  width: number;
};

type AdRenderState = "loading" | "rendered" | "empty";

const AD_EMPTY_REPORT_MS = 5000;
const AD_COLLAPSE_MS = 8000;

const bannerConfigs: Record<BannerSize, BannerConfig> = {
  "300x250": {
    width: 300,
    height: 250,
    key: runtimeConfig.adsterraBanner300x250Key,
    scriptUrl: runtimeConfig.adsterraBanner300x250ScriptUrl
  },
  "320x50": {
    width: 320,
    height: 50,
    key: runtimeConfig.adsterraBanner320x50Key,
    scriptUrl: runtimeConfig.adsterraBanner320x50ScriptUrl
  },
  "728x90": {
    width: 728,
    height: 90,
    key: runtimeConfig.adsterraBanner728x90Key || runtimeConfig.adsterraLeaderboardId,
    scriptUrl: runtimeConfig.adsterraBanner728x90ScriptUrl
  },
  "468x60": {
    width: 468,
    height: 60,
    key: runtimeConfig.adsterraBanner468x60Key,
    scriptUrl: runtimeConfig.adsterraBanner468x60ScriptUrl
  },
  "160x300": {
    width: 160,
    height: 300,
    key: runtimeConfig.adsterraBanner160x300Key,
    scriptUrl: runtimeConfig.adsterraBanner160x300ScriptUrl
  },
  "160x600": {
    width: 160,
    height: 600,
    key: runtimeConfig.adsterraBanner160x600Key,
    scriptUrl: runtimeConfig.adsterraBanner160x600ScriptUrl
  }
};

declare global {
  interface Window {
    atOptions?: {
      key?: string;
      format: "iframe";
      height: number;
      width: number;
      params: Record<string, unknown>;
    };
    __adsterraBannerQueue?: Promise<void>;
    gtag?: (...args: unknown[]) => void;
  }
}

function getBannerScriptUrl(config: BannerConfig) {
  return normalizeScriptUrl(config.scriptUrl);
}

function hasBannerSlot(size: BannerSize) {
  const config = bannerConfigs[size];
  return Boolean(getBannerScriptUrl(config) && config.key);
}

function hasLeaderboardSlot() {
  return hasBannerSlot("728x90") || hasBannerSlot("320x50");
}

function hasNativeSlot(containerId?: string, scriptUrl?: string) {
  return Boolean(containerId && normalizeScriptUrl(scriptUrl));
}

function hasRenderedCreative(host: HTMLElement) {
  return Boolean(host.querySelector("iframe, ins, a[href], img, object, embed"));
}

function useCleanAdRoute() {
  return isCleanAdRoute(usePathname());
}

function useDesktopArticleRails() {
  const [enabled, setEnabled] = useState(false);
  const family = getAdPageFamily(usePathname());
  useEffect(() => {
    const query = window.matchMedia("(min-width: 1280px)");
    const sync = () => setEnabled(query.matches);
    sync();
    query.addEventListener("change", sync);
    return () => query.removeEventListener("change", sync);
  }, []);
  return enabled && family === "detail";
}

function useAdAccessibilityLabels(hostRef: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;
    const labelMarkup = () => {
      host.querySelectorAll("iframe").forEach((frame) => {
        if (!frame.title.trim()) frame.title = "Advertisement";
      });
      host.querySelectorAll("a").forEach((anchor) => {
        const imageAlt = anchor.querySelector("img[alt]")?.getAttribute("alt")?.trim();
        if (!anchor.textContent?.trim() && !anchor.getAttribute("aria-label")?.trim() && !anchor.title.trim() && !imageAlt) {
          anchor.setAttribute("aria-label", "Advertisement");
        }
      });
    };
    labelMarkup();
    const observer = new MutationObserver(labelMarkup);
    observer.observe(host, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, [hostRef]);
}

function trackAdEvent(eventName: string, payload: Record<string, unknown>) {
  window.gtag?.("event", eventName, {
    event_category: "ads",
    ad_network: "adsterra",
    ...payload
  });
}

function useAdVisibilityTracking(hostRef: React.RefObject<HTMLElement | null>, slotName: string) {
  useEffect(() => {
    const host = hostRef.current;
    if (!host || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry?.isIntersecting) return;
        trackAdEvent("ad_slot_viewed", {
          ad_slot: slotName,
          visible_ratio: Math.round(entry.intersectionRatio * 100)
        });
        observer.disconnect();
      },
      { threshold: 0.5 }
    );

    observer.observe(host);
    return () => observer.disconnect();
  }, [hostRef, slotName]);
}

function AdvertisementShell({
  children,
  className = "",
  label = "Advertisement",
  state
}: {
  children: React.ReactNode;
  className?: string;
  label?: string;
  state: Exclude<AdRenderState, "empty">;
}) {
  return (
    <aside className={`ad-shell ${className}`} aria-label={label} data-ad-state={state}>
      <span className="ad-label">{label}</span>
      {children}
    </aside>
  );
}

function AdsterraBannerUnit({
  className = "",
  slotName,
  size
}: {
  className?: string;
  slotName?: string;
  size: BannerSize;
}) {
  const hostRef = useRef<HTMLDivElement>(null);
  const [renderState, setRenderState] = useState<AdRenderState>("loading");
  const config = bannerConfigs[size];
  const scriptUrl = getBannerScriptUrl(config);
  const resolvedSlotName = slotName || `banner_${size}`;

  useAdVisibilityTracking(hostRef, resolvedSlotName);
  useAdAccessibilityLabels(hostRef);

  useEffect(() => {
    const host = hostRef.current;
    if (!host || !scriptUrl || !config.key) return;

    setRenderState("loading");
    let cancelled = false;
    let settled = false;
    let reportTimer: number | undefined;
    let collapseTimer: number | undefined;
    let observer: MutationObserver | undefined;
    let releaseQueue: (() => void) | undefined;

    const markRendered = () => {
      if (cancelled || settled || !hasRenderedCreative(host)) return false;
      settled = true;
      setRenderState("rendered");
      trackAdEvent("ad_creative_rendered", { ad_slot: resolvedSlotName, ad_format: size });
      if (reportTimer) window.clearTimeout(reportTimer);
      if (collapseTimer) window.clearTimeout(collapseTimer);
      observer?.disconnect();
      return true;
    };

    const collapseEmptySlot = (reason: "script_error" | "timeout") => {
      if (cancelled || settled || markRendered()) return;
      settled = true;
      setRenderState("empty");
      trackAdEvent("ad_slot_collapsed", { ad_slot: resolvedSlotName, ad_format: size, reason });
      if (reportTimer) window.clearTimeout(reportTimer);
      if (collapseTimer) window.clearTimeout(collapseTimer);
      observer?.disconnect();
      host.replaceChildren();
      releaseQueue?.();
    };

    const startFillWatch = () => {
      observer = new MutationObserver(markRendered);
      observer.observe(host, { childList: true, subtree: true });
      reportTimer = window.setTimeout(() => {
        if (!markRendered()) {
          trackAdEvent("ad_empty_after_5s", { ad_slot: resolvedSlotName, ad_format: size });
        }
      }, AD_EMPTY_REPORT_MS);
      collapseTimer = window.setTimeout(() => collapseEmptySlot("timeout"), AD_COLLAPSE_MS);
    };

    const queue = window.__adsterraBannerQueue || Promise.resolve();
    window.__adsterraBannerQueue = queue.then(
      () =>
        new Promise<void>((resolve) => {
          releaseQueue = resolve;
          if (cancelled || !host.isConnected) {
            resolve();
            return;
          }

          trackAdEvent("ad_slot_mounted", { ad_slot: resolvedSlotName, ad_format: size });
          host.replaceChildren();
          startFillWatch();
          window.atOptions = {
            key: config.key,
            format: "iframe",
            height: config.height,
            width: config.width,
            params: {}
          };

          const script = document.createElement("script");
          script.type = "text/javascript";
          script.src = scriptUrl;
          script.async = false;
          script.onload = () => {
            trackAdEvent("ad_script_loaded", { ad_slot: resolvedSlotName, ad_format: size });
            resolve();
          };
          script.onerror = () => {
            trackAdEvent("ad_script_error", { ad_slot: resolvedSlotName, ad_format: size });
            collapseEmptySlot("script_error");
            resolve();
          };
          host.appendChild(script);
        })
    );

    return () => {
      cancelled = true;
      settled = true;
      if (reportTimer) window.clearTimeout(reportTimer);
      if (collapseTimer) window.clearTimeout(collapseTimer);
      observer?.disconnect();
      host.replaceChildren();
      releaseQueue?.();
    };
  }, [config.height, config.key, config.width, resolvedSlotName, scriptUrl, size]);

  if (!scriptUrl || !config.key || renderState === "empty") return null;

  return (
    <AdvertisementShell className={`${className} ad-shell--banner ad-shell--${size}`} state={renderState}>
      <div
        ref={hostRef}
        data-ad-slot={resolvedSlotName}
        data-ad-format={size}
        className="ad-host"
        style={{ minHeight: config.height, width: "100%", maxWidth: config.width }}
      />
    </AdvertisementShell>
  );
}

function usePreferredLeaderboardSize(hostRef: React.RefObject<HTMLDivElement | null>) {
  const [size, setSize] = useState<BannerSize | null>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;
    const chooseSize = () => {
      setSize(chooseLeaderboardSize(host.getBoundingClientRect().width, hasBannerSlot("728x90"), hasBannerSlot("320x50")));
    };

    chooseSize();
    const observer = new ResizeObserver(chooseSize);
    observer.observe(host);
    return () => observer.disconnect();
  }, [hostRef]);

  return size;
}

function AdsterraNativeUnit({
  className = "",
  containerId,
  slotName = "native",
  scriptUrl
}: {
  className?: string;
  containerId?: string;
  slotName?: string;
  scriptUrl?: string;
}) {
  const hostRef = useRef<HTMLDivElement>(null);
  const [renderState, setRenderState] = useState<AdRenderState>("loading");
  const cleanContainerId = useMemo(() => containerId?.replace(/^#/, ""), [containerId]);
  const normalizedScriptUrl = normalizeScriptUrl(scriptUrl);

  useAdVisibilityTracking(hostRef, slotName);
  useAdAccessibilityLabels(hostRef);

  useEffect(() => {
    const host = hostRef.current;
    if (!host || !cleanContainerId || !normalizedScriptUrl) return;

    setRenderState("loading");
    trackAdEvent("ad_slot_mounted", { ad_slot: slotName, ad_format: "native" });
    host.replaceChildren();

    const container = document.createElement("div");
    container.id = cleanContainerId;
    host.appendChild(container);

    let settled = false;
    const markRendered = () => {
      if (settled || !hasRenderedCreative(container)) return false;
      settled = true;
      setRenderState("rendered");
      trackAdEvent("ad_creative_rendered", { ad_slot: slotName, ad_format: "native" });
      observer.disconnect();
      window.clearTimeout(emptyReport);
      window.clearTimeout(collapseTimer);
      return true;
    };

    const collapseEmptySlot = (reason: "script_error" | "timeout") => {
      if (settled || markRendered()) return;
      settled = true;
      setRenderState("empty");
      trackAdEvent("ad_slot_collapsed", { ad_slot: slotName, ad_format: "native", reason });
      window.clearTimeout(emptyReport);
      window.clearTimeout(collapseTimer);
      observer.disconnect();
      host.replaceChildren();
    };

    const observer = new MutationObserver(markRendered);
    observer.observe(container, { childList: true, subtree: true });

    const emptyReport = window.setTimeout(() => {
      if (!markRendered()) trackAdEvent("ad_empty_after_5s", { ad_slot: slotName, ad_format: "native" });
    }, AD_EMPTY_REPORT_MS);
    const collapseTimer = window.setTimeout(() => collapseEmptySlot("timeout"), AD_COLLAPSE_MS);

    const script = document.createElement("script");
    script.async = true;
    script.dataset.cfasync = "false";
    script.src = normalizedScriptUrl;
    script.onload = () => {
      trackAdEvent("ad_script_loaded", { ad_slot: slotName, ad_format: "native" });
      markRendered();
    };
    script.onerror = () => {
      trackAdEvent("ad_script_error", { ad_slot: slotName, ad_format: "native" });
      collapseEmptySlot("script_error");
    };
    host.appendChild(script);

    return () => {
      settled = true;
      observer.disconnect();
      window.clearTimeout(emptyReport);
      window.clearTimeout(collapseTimer);
      host.replaceChildren();
    };
  }, [cleanContainerId, normalizedScriptUrl, slotName]);

  if (!cleanContainerId || !normalizedScriptUrl || renderState === "empty") return null;

  return (
    <AdvertisementShell className={className} state={renderState}>
      <div ref={hostRef} className="ad-host ad-host-native" data-ad-slot={slotName} data-ad-format="native" />
    </AdvertisementShell>
  );
}

export function AdsterraSmartLink() {
  return null;
}

// Backward-compatible name used by first-generation site layouts.
export function SponsoredSmartLink() {
  return <AdsterraSmartLink />;
}

export function AdsterraSmartLinkAnchor({
  children = "Sponsored link",
  className = ""
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  if (!runtimeConfig.adsterraSmartLinkUrl) return null;

  return (
    <a
      className={className}
      href={runtimeConfig.adsterraSmartLinkUrl}
      rel="nofollow sponsored noopener noreferrer"
      target="_blank"
    >
      {children}
    </a>
  );
}

export function AdsterraBanner() {
  const clean = useCleanAdRoute();
  if (clean) return null;
  return <AdsterraBannerUnit size="300x250" slotName="content_rectangle" />;
}

export function AdsterraRectangle() {
  const clean = useCleanAdRoute();
  if (clean) return null;
  return <AdsterraBannerUnit size="300x250" slotName="bottom_rectangle" />;
}

export function AdsterraLeaderboard() {
  const hostRef = useRef<HTMLDivElement>(null);
  const clean = useCleanAdRoute();
  const size = usePreferredLeaderboardSize(hostRef);
  if (clean) return null;

  return (
    <div ref={hostRef} className="ad-leaderboard">
      {size ? <AdsterraBannerUnit key={size} size={size} slotName={size === "728x90" ? "top_leaderboard" : "mobile_leaderboard"} /> : null}
    </div>
  );
}

export function AdsterraNative1() {
  const clean = useCleanAdRoute();
  if (clean) return null;
  return (
    <AdsterraNativeUnit
      containerId={runtimeConfig.adsterraNative1Id}
      slotName="native_inline"
      scriptUrl={runtimeConfig.adsterraNative1ScriptUrl}
    />
  );
}

export function AdsterraArticleTop() {
  const clean = useCleanAdRoute();
  if (clean || !hasLeaderboardSlot()) return null;

  return (
    <div className="ad-placement ad-placement-top">
      <AdsterraLeaderboard />
    </div>
  );
}

export function AdsterraArticleMid() {
  const clean = useCleanAdRoute();
  if (clean || !hasNativeSlot(runtimeConfig.adsterraNative1Id, runtimeConfig.adsterraNative1ScriptUrl)) return null;

  return (
    <div className="ad-placement ad-placement-mid">
      <AdsterraNative1 />
    </div>
  );
}

export function AdsterraArticleBottom() {
  const clean = useCleanAdRoute();
  if (clean || !hasBannerSlot("300x250")) return null;

  return (
    <div className="ad-placement ad-placement-bottom">
      <AdsterraRectangle />
    </div>
  );
}

export function AdsterraToolAd() {
  const clean = useCleanAdRoute();
  if (clean || !hasLeaderboardSlot()) return null;

  return (
    <div className="ad-placement ad-placement-tool">
      <AdsterraLeaderboard />
    </div>
  );
}

export function AdsterraToolBottom() {
  const clean = useCleanAdRoute();
  if (clean || !hasBannerSlot("300x250")) return null;

  return (
    <div className="ad-placement ad-placement-tool-bottom">
      <AdsterraRectangle />
    </div>
  );
}

/**
 * A conservative portfolio fallback for legacy sites whose page templates
 * have little or no inline inventory. It is wired only by the migration
 * tool when source coverage is below the threshold, and remains clean-route
 * aware even though it lives in the root layout.
 */
export function AdsterraGlobalFallback() {
  const cleanAdRoute = useCleanAdRoute();
  if (cleanAdRoute || !hasLeaderboardSlot()) return null;

  return (
    <div className="ad-placement ad-placement-global-fallback">
      <AdsterraLeaderboard />
    </div>
  );
}

// Backward-compatible placement API used by older generated page templates.
export function AdSlot({ label }: { label: string }) {
  if (label === "native1") return <AdsterraNative1 />;
  if (label === "leaderboard") return <AdsterraLeaderboard />;
  return <AdsterraRectangle />;
}

export function AdsterraPopunderGate() {
  const pathname = usePathname();

  useEffect(() => {
    const scriptUrl = normalizeScriptUrl(runtimeConfig.adsterraPopunderScriptUrl);
    if (isCleanAdRoute(pathname) || !runtimeConfig.adsterraEnablePopunder || !scriptUrl) return;

    const pageViewsKey = "roblox-site-adsterra-pageviews";
    const loadedKey = "roblox-site-adsterra-popunder-loaded";
    const lastPageKey = "roblox-site-adsterra-last-page";
    try {
      if (window.sessionStorage.getItem(loadedKey)) return;
      const newPage = window.sessionStorage.getItem(lastPageKey) !== pathname;
      const nextPageViews = Number(window.sessionStorage.getItem(pageViewsKey) || "0") + Number(newPage);
      window.sessionStorage.setItem(pageViewsKey, String(nextPageViews));
      window.sessionStorage.setItem(lastPageKey, pathname);
      if (nextPageViews < Math.max(2, runtimeConfig.adsterraPopunderMinPageViews)) return;
    } catch {
      // Without session storage, the once-per-session limit cannot be enforced.
      return;
    }

    let script: HTMLScriptElement | undefined;
    const timer = window.setTimeout(() => {
      if (document.getElementById("adsterra-popunder")) return;
      try {
        window.sessionStorage.setItem(loadedKey, "true");
      } catch {
        return;
      }
      script = document.createElement("script");
      script.id = "adsterra-popunder";
      script.src = scriptUrl;
      script.async = true;
      script.onload = () => trackAdEvent("ad_script_loaded", { ad_slot: "popunder_gate", ad_format: "popunder" });
      script.onerror = () => trackAdEvent("ad_script_error", { ad_slot: "popunder_gate", ad_format: "popunder" });
      document.body.appendChild(script);
    }, Math.max(30000, runtimeConfig.adsterraPopunderDelayMs));

    return () => {
      window.clearTimeout(timer);
      script?.remove();
    };
  }, [pathname]);

  return null;
}

export function AdsterraSocialBarGate() {
  const cleanAdRoute = useCleanAdRoute();

  useEffect(() => {
    if (cleanAdRoute) return;
    const scriptUrl = normalizeScriptUrl(runtimeConfig.adsterraSocialBarScriptUrl);
    if (!runtimeConfig.adsterraEnableSocialBar || !scriptUrl) return;
    if (document.getElementById("adsterra-social-bar")) return;

    const script = document.createElement("script");
    script.id = "adsterra-social-bar";
    script.async = true;
    script.dataset.cfasync = "false";
    script.src = scriptUrl;
    script.onload = () => trackAdEvent("ad_script_loaded", { ad_slot: "social_bar", ad_format: "social_bar" });
    script.onerror = () => trackAdEvent("ad_script_error", { ad_slot: "social_bar", ad_format: "social_bar" });
    document.body.appendChild(script);
    return () => script.remove();
  }, [cleanAdRoute]);

  return null;
}

export function AdsterraStickyRail() {
  // Compatibility export: the article layout owns both rails.
  return null;
}

export function AdsterraArticleLeftRail() {
  const enabled = useDesktopArticleRails();
  if (!enabled || !runtimeConfig.adsterraEnableStickyRail || !hasBannerSlot("160x600")) return null;
  return <AdsterraBannerUnit size="160x600" slotName="article_left_160x600" />;
}

export function AdsterraArticleRightRail() {
  const enabled = useDesktopArticleRails();
  if (!enabled || !runtimeConfig.adsterraEnableStickyRail || !hasBannerSlot("160x300")) return null;
  return <AdsterraBannerUnit size="160x300" slotName="article_right_160x300" />;
}

export function AdDisclosure() {
  return (
    <p className="text-xs leading-5 text-white/42">
      This fan site may show third-party ads to support hosting and updates.
    </p>
  );
}
