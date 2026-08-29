"use client";
import { ReactNode, useState, useEffect, useContext } from "react";
import { ConsentContext } from "./context/ConsentContext";
import { ConsentSettings, ConsentStatus } from "./types/consent";

const CONSENT_STORAGE_KEY = "cookie-consent-settings";

type ConsentProviderProps = {
  children: ReactNode;
};

export const ConsentProvider = ({ children }: ConsentProviderProps) => {
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
      const parsedConsent = JSON.parse(storedConsent);
      setSettings(parsedConsent);
      setConsentStatus("granted");
    }
    setIsLoading(false);
  }, []);

  const updateConsent = (newSettings: ConsentSettings) => {
    const updatedSettings = {
      ...newSettings,
      timestamp: new Date().toISOString(),
    };
    setSettings(updatedSettings);
    setConsentStatus("granted");
    localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(updatedSettings));
  };

  const hasConsent = (type: keyof ConsentSettings): boolean => {
    return type === "necessary" ? true : !!settings[type];
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
};

export const useConsent = () => {
  const context = useContext(ConsentContext);
  if (context === undefined) {
    throw new Error("useConsent must be used within a ConsentProvider");
  }
  return context;
};
