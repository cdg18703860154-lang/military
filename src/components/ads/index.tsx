"use client";

import { usePathname } from "next/navigation";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { runtimeConfig as sourceRuntimeConfig } from "@/lib/runtime-config";
import { canLoadPopunder, getAdLayoutPolicy, isAdEligibleRoute, normalizeAdUrl, selectBottomBannerSize, selectLeaderboardSize } from "@/lib/ad-layout";
import { mountAdsterraBanner, type BannerLoadState } from "@/lib/adsterra-banner-loader";
import { ensureAdDocumentBoundary, installAdDocumentBoundary, isAdDocumentReady } from "@/lib/adsterra-document-boundary";

export const ADSTERRA_RUNTIME_VERSION = "2026-10-27.2";

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
  adsterraBottomMobileKey?: string;
  adsterraBottomMobileScriptUrl?: string;
  adsterraEnableBottomSticky?: boolean;
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
    __adsterraGlobalsExecuted?: boolean;
    gtag?: (...args: unknown[]) => void;
  }
}

function normalizeScriptUrl(url?: string) {
  return normalizeAdUrl(url);
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

function addAccessibleNames(host: HTMLElement) {
  host.querySelectorAll("iframe").forEach((frame) => {
    if (!frame.title.trim()) frame.title = "Advertisement";
  });
  host.querySelectorAll("a[href]").forEach((link) => {
    if (!link.textContent?.trim() && !link.getAttribute("aria-label")) {
      link.setAttribute("aria-label", "Sponsored advertisement");
    }
  });
}

function useCleanAdRoute() {
  const pathname = usePathname();
  return !pathname || !isAdEligibleRoute(pathname);
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

const EMPTY_AD_DOCUMENT = '<!doctype html><html><head><meta charset="utf-8"></head><body style="margin:0;overflow:hidden"><div id="adsterra-slot"></div></body></html>';

function AdsterraBannerUnit({
  className = "",
  onEmpty,
  slotName,
  size,
  configOverride,
  eager = false
}: {
  className?: string;
  onEmpty?: () => void;
  slotName?: string;
  size: BannerSize;
  configOverride?: BannerConfig;
  eager?: boolean;
}) {
  const cleanAdRoute = useCleanAdRoute();
  const hostRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<HTMLIFrameElement>(null);
  const cleanupRef = useRef<() => void>(() => {});
  const [renderState, setRenderState] = useState<AdRenderState>("loading");
  const config = configOverride || bannerConfigs[size];
  const scriptUrl = getBannerScriptUrl(config);
  const resolvedSlotName = slotName || `banner_${size}`;

  useAdVisibilityTracking(hostRef, resolvedSlotName);
  useEffect(() => () => cleanupRef.current(), []);

  const loadFrame = () => {
    cleanupRef.current();
    const frameDocument = frameRef.current?.contentDocument;
    const slot = frameDocument?.getElementById("adsterra-slot");
    if (!isAdDocumentReady(window, window.location.pathname) || !slot || !scriptUrl || !config.key) return;
    let active = true;
    let reportTimer: number | undefined;
    const observer = new MutationObserver(() => addAccessibleNames(slot));
    observer.observe(slot, { childList: true, subtree: true });
    trackAdEvent("ad_slot_mounted", { ad_slot: resolvedSlotName, ad_format: size });
    reportTimer = window.setTimeout(() => {
      if (active && !hasRenderedCreative(slot)) trackAdEvent("ad_empty_after_5s", { ad_slot: resolvedSlotName, ad_format: size });
    }, AD_EMPTY_REPORT_MS);
    // Each frame has its own Window; the serialized loader never shares atOptions
    // with a removed or differently sized slot. Destroying the frame cancels its runtime.
    const dispose = mountAdsterraBanner(slot, { ...config, key: config.key, scriptUrl }, (state: BannerLoadState) => {
      if (!active || !isAdDocumentReady(window, window.location.pathname)) return;
      if (state === "script-loaded") trackAdEvent("ad_script_loaded", { ad_slot: resolvedSlotName, ad_format: size });
      else if (state === "filled") {
        window.clearTimeout(reportTimer);
        addAccessibleNames(slot);
        setRenderState("rendered");
        trackAdEvent("ad_creative_rendered", { ad_slot: resolvedSlotName, ad_format: size });
      } else if (["script-error", "script-timeout", "script-cancelled", "no-fill"].includes(state)) {
        window.clearTimeout(reportTimer);
        observer.disconnect();
        setRenderState("empty");
        onEmpty?.();
        if (state === "script-error") trackAdEvent("ad_script_error", { ad_slot: resolvedSlotName, ad_format: size });
        trackAdEvent("ad_slot_collapsed", { ad_slot: resolvedSlotName, ad_format: size, reason: state });
      }
    });
    cleanupRef.current = () => {
      active = false;
      window.clearTimeout(reportTimer);
      observer.disconnect();
      dispose();
    };
  };

  if (cleanAdRoute || !scriptUrl || !config.key || renderState === "empty") return null;
  return <AdvertisementShell className={`ad-shell--banner ${className}`} state={renderState}>
    <div ref={hostRef} className="ad-host" style={{ width: config.width, height: config.height }}>
      <iframe key={`${config.key}:${scriptUrl}:${size}`} ref={frameRef} title="Advertisement" srcDoc={EMPTY_AD_DOCUMENT}
        onLoad={loadFrame} width={config.width} height={config.height} loading={eager ? "eager" : "lazy"}
        scrolling="no" style={{ display: "block", border: 0, maxWidth: "100%" }} />
    </div>
  </AdvertisementShell>;
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
  const cleanAdRoute = useCleanAdRoute();
  const hostRef = useRef<HTMLDivElement>(null);
  const [renderState, setRenderState] = useState<AdRenderState>("loading");
  const cleanContainerId = useMemo(() => containerId?.replace(/^#/, ""), [containerId]);
  const normalizedScriptUrl = normalizeScriptUrl(scriptUrl);

  useAdVisibilityTracking(hostRef, slotName);

  useEffect(() => {
    const host = hostRef.current;
    if (cleanAdRoute || !host || !cleanContainerId || !normalizedScriptUrl || !isAdDocumentReady(window, window.location.pathname)) return;

    setRenderState("loading");
    trackAdEvent("ad_slot_mounted", { ad_slot: slotName, ad_format: "native" });
    host.replaceChildren();

    const container = document.createElement("div");
    container.id = cleanContainerId;
    host.appendChild(container);

    let settled = false;
    const markRendered = () => {
      addAccessibleNames(host);
      if (settled || !hasRenderedCreative(host)) return false;
      settled = true;
      setRenderState("rendered");
      trackAdEvent("ad_creative_rendered", { ad_slot: slotName, ad_format: "native" });
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
    observer.observe(host, { childList: true, subtree: true });

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
      script.onload = null;
      script.onerror = null;
      window.clearTimeout(emptyReport);
      window.clearTimeout(collapseTimer);
      observer.disconnect();
      host.replaceChildren();
    };
  }, [cleanAdRoute, cleanContainerId, normalizedScriptUrl, slotName]);

  if (cleanAdRoute || !cleanContainerId || !normalizedScriptUrl || renderState === "empty") return null;

  return (
    <AdvertisementShell className={className} state={renderState}>
      <div ref={hostRef} className="ad-host ad-host-native" />
    </AdvertisementShell>
  );
}

export function AdsterraSmartLink() {
  return null;
}

export function AdsterraSmartLinkAnchor({ children = "Sponsored link: View offer", className = "" }: { children?: React.ReactNode; className?: string } = {}) {
  const cleanAdRoute = useCleanAdRoute();
  const href = normalizeAdUrl(runtimeConfig.adsterraSmartLinkUrl);
  if (cleanAdRoute || !href) return null;
  return <p className="ad-sponsored-cta"><a href={href} target="_blank" rel="nofollow sponsored noopener noreferrer" className={className}>{children} <span aria-hidden="true">↗</span></a></p>;
}

function ResponsiveBanner({ rectangle = false }: { rectangle?: boolean }) {
  const hostRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState<BannerSize | null>(null);
  const clearSize = useCallback(() => setSize(null), []);
  const cleanAdRoute = useCleanAdRoute();

  useEffect(() => {
    const host = hostRef.current;
    if (cleanAdRoute || !host) return;
    let previousSize: BannerSize | null | undefined;
    const chooseSize = (width: number) => {
      const next = rectangle
        ? width >= 300 && hasBannerSlot("300x250") ? "300x250" : null
        : selectLeaderboardSize(width, { desktop: hasBannerSlot("728x90"), mobile: hasBannerSlot("320x50") }, window.innerWidth);
      // A collapsed slot stays empty until a different banner size is needed.
      if (previousSize === next) return;
      previousSize = next;
      setSize(current => current === next ? current : next);
    };
    const measure = () => chooseSize(host.getBoundingClientRect().width);
    measure();
    const observer = new ResizeObserver(entries => chooseSize(entries[0]?.contentRect.width ?? 0));
    observer.observe(host);
    window.addEventListener("resize", measure);
    return () => { observer.disconnect(); window.removeEventListener("resize", measure); };
  }, [cleanAdRoute, rectangle]);

  if (cleanAdRoute) return null;
  return <div className="ad-responsive" ref={hostRef}>{size ? <AdsterraBannerUnit key={size} size={size} onEmpty={clearSize} slotName={rectangle ? "bottom_rectangle" : `responsive_leaderboard_${size}`} /> : null}</div>;
}

export function AdsterraArticleTop() {
  const cleanAdRoute = useCleanAdRoute();
  if (cleanAdRoute || !hasLeaderboardSlot()) return null;
  return <div className="ad-placement ad-placement-top" data-ad-placement="top"><ResponsiveBanner /></div>;
}

export function AdsterraArticleMid() {
  const cleanAdRoute = useCleanAdRoute();
  if (cleanAdRoute || !hasNativeSlot(runtimeConfig.adsterraNative1Id, runtimeConfig.adsterraNative1ScriptUrl)) return null;
  return <div className="ad-placement ad-placement-mid" data-ad-placement="mid"><AdsterraNativeUnit containerId={runtimeConfig.adsterraNative1Id} scriptUrl={runtimeConfig.adsterraNative1ScriptUrl} slotName="native_inline" /></div>;
}

export function AdsterraArticleBottom() {
  const cleanAdRoute = useCleanAdRoute();
  if (cleanAdRoute || !hasBannerSlot("300x250")) return null;
  return <div className="ad-placement ad-placement-bottom" data-ad-placement="bottom"><ResponsiveBanner rectangle /><AdsterraSmartLinkAnchor /></div>;
}

function ArticleRail({ side }: { side: "left" | "right" }) {
  const pathname = usePathname();
  const cleanAdRoute = useCleanAdRoute();
  const [wide, setWide] = useState(false);
  const size = side === "left" ? "160x600" : "160x300";
  useEffect(() => {
    const query = window.matchMedia("(min-width: 1280px)");
    const update = () => setWide(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);
  if (cleanAdRoute || !pathname || !getAdLayoutPolicy(pathname).desktopRails || !wide || !runtimeConfig.adsterraEnableStickyRail || !hasBannerSlot(size)) return null;
  return <div className="article-rail-sticky" data-ad-rail={side}><div><AdsterraBannerUnit size={size} slotName={`article_${side}_rail_${size}`} /></div></div>;
}

export function AdsterraArticleLeftRail() {
  return <ArticleRail side="left" />;
}

export function AdsterraArticleRightRail() {
  return <ArticleRail side="right" />;
}

export function AdsterraToolAd() {
  return <AdsterraArticleTop />;
}

export function AdsterraToolBottom() {
  return <AdsterraArticleBottom />;
}

function loadGlobalScript(id: string, scriptUrl: string, format: string) {
  if (!isAdDocumentReady(window, window.location.pathname) || document.getElementById(id)) return;
  const script = document.createElement("script");
  script.id = id;
  script.src = scriptUrl;
  script.async = true;
  script.dataset.cfasync = "false";
  script.onload = () => trackAdEvent("ad_script_loaded", { ad_slot: format, ad_format: format });
  script.onerror = () => trackAdEvent("ad_script_error", { ad_slot: format, ad_format: format });
  window.__adsterraGlobalsExecuted = true;
  document.body.appendChild(script);
}

export function AdsterraPopunderGate() {
  const pathname = usePathname();
  const lastPage = useRef<string | null>(null);
  useEffect(() => {
    const scriptUrl = normalizeAdUrl(runtimeConfig.adsterraPopunderScriptUrl);
    if (!pathname || !isAdEligibleRoute(pathname) || !runtimeConfig.adsterraEnablePopunder || !scriptUrl) return;
    const pageViewsKey = "roblox-site-adsterra-pageviews";
    const loadedKey = "roblox-site-adsterra-popunder-loaded";
    let pageViews: number;
    try {
      const previous = Number.parseInt(sessionStorage.getItem(pageViewsKey) || "0", 10);
      pageViews = (Number.isFinite(previous) ? previous : 0) + (lastPage.current === pathname ? 0 : 1);
      lastPage.current = pathname;
      sessionStorage.setItem(pageViewsKey, String(pageViews));
      if (sessionStorage.getItem(loadedKey)) return;
    } catch {
      return;
    }
    if (pageViews < Math.max(2, runtimeConfig.adsterraPopunderMinPageViews)) return;
    const started = performance.now();
    const timer = window.setTimeout(() => {
      if (!isAdEligibleRoute(window.location.pathname)) return;
      try {
        if (!canLoadPopunder(performance.now() - started, pageViews, Boolean(sessionStorage.getItem(loadedKey)))) return;
        sessionStorage.setItem(loadedKey, "true");
      } catch {
        return;
      }
      loadGlobalScript("adsterra-popunder", scriptUrl, "popunder");
    }, Math.max(30000, runtimeConfig.adsterraPopunderDelayMs));
    return () => window.clearTimeout(timer);
  }, [pathname]);
  useEffect(() => () => { document.getElementById("adsterra-popunder")?.remove(); }, []);
  return null;
}

export function AdsterraSocialBarGate() {
  const pathname = usePathname();
  const eligible = Boolean(pathname && isAdEligibleRoute(pathname));
  useEffect(() => {
    const scriptUrl = normalizeAdUrl(runtimeConfig.adsterraSocialBarScriptUrl);
    if (!eligible || !runtimeConfig.adsterraEnableSocialBar || !scriptUrl) return;
    loadGlobalScript("adsterra-social-bar", scriptUrl, "social_bar");
    return () => { document.getElementById("adsterra-social-bar")?.remove(); };
  }, [eligible]);
  return null;
}

function AdsterraCleanRouteBoundary() {
  const pathname = usePathname();
  useEffect(() => installAdDocumentBoundary(window), []);
  useEffect(() => ensureAdDocumentBoundary(window), [pathname]);
  return null;
}

export function AdsterraGlobalAds() {
  return <><AdsterraCleanRouteBoundary /><AdsterraPopunderGate /><AdsterraSocialBarGate /></>;
}


const bottomBannerConfigs: Record<"320x50" | "468x60", BannerConfig> = {
  "320x50": { key: runtimeConfig.adsterraBottomMobileKey, scriptUrl: runtimeConfig.adsterraBottomMobileScriptUrl, width: 320, height: 50 },
  "468x60": bannerConfigs["468x60"]
};

function FixedBottomBanner({ size }: { size: "320x50" | "468x60" }) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  const [empty, setEmpty] = useState(false);
  const [obscured, setObscured] = useState(false);
  const markEmpty = useCallback(() => setEmpty(true), []);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;
    const measure = () => setHeight(wrapper.getBoundingClientRect().height);
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(wrapper);
    return () => observer.disconnect();
  }, [empty, obscured]);

  useEffect(() => {
    if (empty) return;
    const update = () => setObscured(Boolean(
      document.querySelector('dialog[open], [role="dialog"][aria-modal="true"], [role="dialog"][data-state="open"], [role="alertdialog"]') ||
      (window.matchMedia('(max-width: 1179px)').matches && document.querySelector('#mobile-site-nav'))
    ));
    update();
    const observer = new MutationObserver(update);
    observer.observe(document.body, { childList: true, subtree: true, attributes: true, attributeFilter: ["open", "aria-modal", "data-state", "data-open", "role"] });
    window.addEventListener("resize", update);
    return () => { observer.disconnect(); window.removeEventListener("resize", update); };
  }, [empty]);

  if (empty) return null;
  return <>
    {!obscured && <div aria-hidden="true" data-ad-bottom-space style={{ height }} />}
    <div ref={wrapperRef} className="ad-bottom-viewport" data-ad-bottom-host hidden={obscured}>
      <AdsterraBannerUnit size={size} configOverride={bottomBannerConfigs[size]} slotName={`bottom_sticky_${size}`} className="ad-bottom-banner" onEmpty={markEmpty} eager />
    </div>
  </>;
}

export function AdsterraBottomSticky() {
  const cleanAdRoute = useCleanAdRoute();
  const [widths, setWidths] = useState({ viewport: 0, available: 0 });
  const enabled = !cleanAdRoute && runtimeConfig.adsterraEnableBottomSticky === true;
  useEffect(() => {
    if (!enabled) return;
    const measure = () => {
      const probe = document.createElement("div");
      probe.className = "ad-bottom-viewport";
      probe.style.visibility = "hidden";
      document.body.appendChild(probe);
      const style = window.getComputedStyle(probe);
      const available = probe.getBoundingClientRect().width - parseFloat(style.paddingLeft) - parseFloat(style.paddingRight) - 10;
      probe.remove();
      setWidths(current => current.viewport === window.innerWidth && current.available === available ? current : { viewport: window.innerWidth, available });
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(document.documentElement);
    window.addEventListener("resize", measure);
    return () => { observer.disconnect(); window.removeEventListener("resize", measure); };
  }, [enabled]);
  if (!enabled) return null;
  const size = selectBottomBannerSize(widths.viewport, widths.available, {
    desktop: Boolean(bottomBannerConfigs["468x60"].key && getBannerScriptUrl(bottomBannerConfigs["468x60"])),
    mobile: Boolean(bottomBannerConfigs["320x50"].key && getBannerScriptUrl(bottomBannerConfigs["320x50"]))
  });
  return size ? <FixedBottomBanner key={`${size}:${bottomBannerConfigs[size].key}`} size={size} /> : null;
}

// Compatibility exports retained for existing generated page templates.
export function SponsoredSmartLink() { return <AdsterraSmartLink />; }
export function AdsterraBanner() { return <AdsterraBannerUnit size="300x250" slotName="content_rectangle" />; }
export function AdsterraRectangle() { return <AdsterraBannerUnit size="300x250" slotName="bottom_rectangle" />; }
export function AdsterraLeaderboard() { return <ResponsiveBanner />; }
export function AdsterraNative1() { return <AdsterraNativeUnit containerId={runtimeConfig.adsterraNative1Id} scriptUrl={runtimeConfig.adsterraNative1ScriptUrl} slotName="native_inline" />; }
export function AdsterraGlobalFallback() { return <AdsterraArticleTop />; }
export function AdSlot({ label }: { label: string }) { return label === "native1" ? <AdsterraNative1 /> : label === "leaderboard" ? <AdsterraLeaderboard /> : <AdsterraRectangle />; }
export function AdsterraStickyRail() { return null; }
export function AdDisclosure() { return <p className="text-xs leading-5 text-white/42">This fan site may show third-party ads to support hosting and updates.</p>; }
