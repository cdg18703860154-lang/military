import type { Metadata, Viewport } from "next";
import { Suspense } from "react";
import { Inter } from "next/font/google";
import Script from "next/script";
import { AdsterraPopunderGate, AdsterraSmartLink, AdsterraSocialBarGate } from "@/components/ads";
import { GoogleAnalyticsPageView } from "@/components/analytics/GoogleAnalyticsPageView";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { PageScaffold } from "@/components/layout/PageScaffold";
import { runtimeConfig } from "@/lib/runtime-config";
import { siteConfig } from "@/data/site";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: {
    default: "Military Army Tycoon Wiki, Codes & Guides",
    template: `%s | ${siteConfig.gameName}`
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: siteConfig.keywords,
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png", sizes: "96x96" },
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" }
    ],
    apple: [{ url: "/apple-touch-icon.png", type: "image/png", sizes: "180x180" }],
    shortcut: ["/favicon.png"]
  },
  openGraph: {
    type: "website",
    url: `${siteConfig.domain.replace(/\/+$/, "")}/`,
    siteName: siteConfig.name,
    title: "Military Army Tycoon Wiki, Codes & Guides",
    description: siteConfig.description,
    images: [{ url: "/opengraph-image" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Military Army Tycoon Wiki, Codes & Guides",
    description: siteConfig.description,
    images: ["/opengraph-image"]
  },
  robots: {
    index: true,
    follow: true
  },
  appleWebApp: {
    capable: true,
    title: siteConfig.name,
    statusBarStyle: "black-translucent"
  }
};

export const viewport: Viewport = {
  themeColor: "#061116"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const analyticsId = runtimeConfig.analyticsId;
  const analyticsIdJson = JSON.stringify(analyticsId);

  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans`}>
        {analyticsId ? (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${analyticsId}`} strategy="afterInteractive" />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', ${analyticsIdJson}, { send_page_view: false });
              `}
            </Script>
            <Suspense fallback={null}>
              <GoogleAnalyticsPageView measurementId={analyticsId} />
            </Suspense>
          </>
        ) : null}
        <AdsterraPopunderGate />
        <AdsterraSocialBarGate />
        <AdsterraSmartLink />
        <Navbar />
        <PageScaffold>{children}</PageScaffold>
        <Footer />
      </body>
    </html>
  );
}
