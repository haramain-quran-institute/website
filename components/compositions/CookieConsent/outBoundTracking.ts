"use client";
import { type MouseEvent } from "react";
import { CONVERSION_CONFIG } from "./config/conversionConfig";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: any[]) => void;
  }
}

function handleNavigation(url: string) {
  if (url.startsWith("tel:") || url.startsWith("mailto:")) {
    window.location.href = url;
  } else {
    window.open(url, "_blank");
  }
}

async function trackOutboundConversion(e: MouseEvent, url: string, label: string): Promise<void> {
  e.preventDefault();

  if (typeof window.gtag !== "function") {
    handleNavigation(url);
    return;
  }

  try {
    await Promise.race([
      new Promise<void>((resolve) => {
        window.gtag!("event", "conversion", {
          send_to: `${CONVERSION_CONFIG.GOOGLE_ADS_ID}/${label}`,
          event_callback: () => resolve(),
        });
      }),
      new Promise<void>((resolve) => setTimeout(resolve, 500)),
    ]);
  } catch (error) {
    console.error("Tracking error:", error);
  }
  handleNavigation(url);
}

export function handlePhoneClick(e: MouseEvent, phone: string) {
  const label = process.env.NEXT_PUBLIC_PHONE_LABEL || "default";
  return trackOutboundConversion(e, `tel:${phone}`, label);
}

export function handleWhatsAppClick(e: MouseEvent, phone: string) {
  const label = process.env.NEXT_PUBLIC_WHATSAPP_LABEL || "default";
  return trackOutboundConversion(e, `https://wa.me/${phone}`, label);
}

export function handleEmailClick(e: MouseEvent, email: string) {
  const label = process.env.NEXT_PUBLIC_EMAIL_LABEL || "default";
  return trackOutboundConversion(e, `mailto:${email}`, label);
}
