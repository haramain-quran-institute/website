"use client";

import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { ConsentSettings, ConsentStatus } from "../types/consent";

type ConsentContextType = {
  consentStatus: ConsentStatus;
  settings: ConsentSettings;
  updateConsent: (settings: ConsentSettings) => void;
  hasConsent: (type: keyof ConsentSettings) => boolean;
  isLoading: boolean;
};

const CONSENT_STORAGE_KEY = "cookie-consent-settings";

export const ConsentContext = createContext<ConsentContextType | undefined>(undefined);

export function ConsentProvider({ children }: { children: ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  const [consentStatus, setConsentStatus] = useState<ConsentStatus>("pending");
  const [settings, setSettings] = useState<ConsentSettings>({
    necessary: true,
    analytics: false,
    advertising: false,
  });

  useEffect(() => {
    const storedConsent = localStorage.getItem(CONSENT_STORAGE_KEY);
    if (storedConsent) {
      const parsedConsent = JSON.parse(storedConsent) as ConsentSettings;
      setSettings(parsedConsent);
      setConsentStatus("granted");
    }
    setIsLoading(false);
  }, []);

  const updateConsent = (newSettings: ConsentSettings) => {
    const updated = { ...newSettings, timestamp: new Date().toISOString() };
    setSettings(updated);
    setConsentStatus("granted");
    localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(updated));
  };

  const hasConsent = (type: keyof ConsentSettings): boolean => {
    if (type === "necessary") return true;
    return !!settings[type];
  };

  return (
    <ConsentContext.Provider
      value={{
        consentStatus,
        settings,
        updateConsent,
        hasConsent,
        isLoading,
      }}
    >
      {children}
    </ConsentContext.Provider>
  );
}

export function useConsent() {
  const context = useContext(ConsentContext);
  if (!context) {
    throw new Error("useConsent must be used within a ConsentProvider");
  }
  return context;
}
