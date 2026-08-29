"use client";
import React, { useEffect } from "react";
import Script from "next/script";
import { useConsent } from "./ConsentProvider";
import { CONVERSION_CONFIG } from "./config/conversionConfig";

const posthogKey = process.env.NEXT_PUBLIC_POSTHOG_KEY || "";
const posthogHost = process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://app.posthog.com";

export function AnalyticsProvider({ children }: { children: React.ReactNode }) {
  const { consentStatus, hasConsent } = useConsent();
  const adsId = CONVERSION_CONFIG.GOOGLE_ADS_ID;

  useEffect(() => {
    if (consentStatus === "granted" && hasConsent("analytics") && posthogKey) {
      initPostHog();
    }
  }, [consentStatus, hasConsent]);

  return (
    <>
      {consentStatus === "granted" && hasConsent("advertising") && adsId && (
        <>
          <Script strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=${adsId}`} />
          <Script
            id="google-ads-config"
            strategy="lazyOnload"
            dangerouslySetInnerHTML={{
              __html: `
               window.dataLayer = window.dataLayer || [];
               function gtag(){dataLayer.push(arguments);}
               gtag('js', new Date());
               gtag('config', '${adsId}', {
                 allow_enhanced_conversions: true,
                 send_page_view: false
               });
             `,
            }}
          />
        </>
      )}
      {children}
    </>
  );
}
async function initPostHog() {
  if (!posthogKey) return;
  const { default: posthog } = await import("posthog-js");
  posthog.init(posthogKey, {
    api_host: posthogHost,
    autocapture: true,
    capture_pageview: true,
    disable_session_recording: false,
    loaded: (ph) => {
      if (process.env.NODE_ENV === "development") {
        ph.debug();
      }
    },
  });
  posthog.capture("$pageview");
}
