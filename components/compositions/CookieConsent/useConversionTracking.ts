"use client";
import { useConsent } from "./ConsentProvider";
import { ConversionSource, CONVERSION_CONFIG } from "./config/conversionConfig";

type FormData = {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
  communicationPreference: string;
  source: ConversionSource;
};

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: any[]) => void;
  }
}

async function hashData(value: string): Promise<string> {
  try {
    const encoder = new TextEncoder();
    const data = encoder.encode(value.trim().toLowerCase());
    const hashBuffer = await crypto.subtle.digest("SHA-256", data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
  } catch (error) {
    console.error("Error hashing data:", error);
    return "";
  }
}

export function useConversionTracking() {
  const { hasConsent } = useConsent();

  const trackConversion = async (formData: FormData) => {
    if (!hasConsent("advertising")) return;

    if (typeof window.gtag !== "function") {
      console.warn("gtag is not loaded or not a function. Could not track conversion.");
      return;
    }

    const conversionLabel = CONVERSION_CONFIG.LABELS[formData.source];
    if (!conversionLabel) {
      console.error(`Invalid conversion source: ${formData.source}`);
      return;
    }

    const nameParts = formData.name.trim().split(/\s+/);
    const firstName = nameParts[0] || "";
    const lastName = nameParts.slice(1).join(" ") || "";
    const cleanPhone = formData.phone.replace(/\D/g, "");

    const [hashedEmail, hashedPhone, hashedFirstName, hashedLastName] = await Promise.all([
      hashData(formData.email),
      hashData(cleanPhone),
      hashData(firstName),
      hashData(lastName),
    ]);

    const enhancedData = {
      email: hashedEmail,
      phone_number: hashedPhone,
      first_name: hashedFirstName,
      last_name: hashedLastName,
    };

    window.gtag("event", "conversion", {
      send_to: `${CONVERSION_CONFIG.GOOGLE_ADS_ID}/${conversionLabel}`,
      value: 1.0,
      currency: "SEK",
      user_data: enhancedData,
      event_timeout: 2000,
    });
  };

  return { trackConversion };
}
