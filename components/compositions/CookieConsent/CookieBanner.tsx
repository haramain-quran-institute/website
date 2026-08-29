"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Cookie } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { delay } from "lodash";
import { useConsent } from "../CookieConsent/ConsentProvider";

type CookieSettings = {
  analytics: boolean;
  advertising: boolean;
};

export const CookieBanner = () => {
  const { consentStatus, settings, updateConsent, isLoading } = useConsent();

  const [open, setOpen] = useState(false);
  const [showCustomize, setShowCustomize] = useState(false);
  const [customSettings, setCustomSettings] = useState<CookieSettings>({
    analytics: false,
    advertising: false,
  });

  useEffect(() => {
    if (!isLoading) {
      if (consentStatus === "granted") {
        setOpen(false);
      } else {
        delay(() => setOpen(true), 3000);
      }
    }
  }, [consentStatus, isLoading]);

  const handleAcceptAll = () => {
    updateConsent({
      necessary: true,
      analytics: true,
      advertising: true,
    });
    setShowCustomize(false);
    setOpen(false);
  };

  const handleCustomize = () => {
    setShowCustomize(true);
    setCustomSettings({
      analytics: !!settings.analytics,
      advertising: !!settings.advertising,
    });
  };

  const handleSavePreferences = () => {
    updateConsent({
      necessary: true,
      analytics: customSettings.analytics,
      advertising: customSettings.advertising,
    });
    setShowCustomize(false);
    setOpen(false);
  };

  const handleCancelCustomization = () => {
    setShowCustomize(false);
    setCustomSettings({
      analytics: false,
      advertising: false,
    });
  };

  const handleToggle = (key: keyof CookieSettings) => {
    setCustomSettings((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  if (!open) return null;

  return (
    <section
      id="cookie-banner"
      className="fixed bottom-4 left-4 z-50 flex w-[calc(100%-32px)] max-h-[calc(100%-32px)] overflow-hidden rounded-lg bg-EbonyShadow-100 text-PearlWhite shadow-[0_0_7px_rgba(251,246,239,.14)]"
    >
      <div className="container py-12 overflow-y-auto">
        {showCustomize ? (
          <div className="flex flex-col items-start gap-4">
            <div className="flex flex-col items-start gap-2 md:gap-3">
              <h5 className="w-full text-heading_xs font-bold leading-tight tracking-wider text-PearlWhite md:text-heading_sm">
                Customise your preferences
              </h5>
              <p className="w-full max-w-prose font-serif text-body_xxxs leading-relaxed tracking-wider text-PolishedSilver md:text-body_xxs">
                We use cookies to help you navigate efficiently and perform certain functions. You will find detailed
                information about all cookies under each consent category below.
              </p>
            </div>

            <Separator className="my-4 bg-PolishedSilver" />

            <div className="flex w-full flex-col gap-4">
              <div className="flex w-full items-center justify-between">
                <div className="flex flex-col items-start gap-2">
                  <Label className="text-body_base font-medium text-PearlWhite">Necessary Cookies</Label>
                  <p className="text-body_xxs text-PolishedSilver">
                    Necessary cookies are required to enable the basic features of this site.
                  </p>
                </div>
                <Switch className="data-[state=checked]:bg-AntiqueGold" defaultChecked disabled />
              </div>
              <div className="flex w-full items-center justify-between">
                <div className="flex flex-col items-start gap-2">
                  <Label className="text-body_base font-medium text-PearlWhite">Analytics Cookies</Label>
                  <p className="text-body_xxs text-PolishedSilver">Help us understand how visitors interact with our website</p>
                </div>
                <Switch
                  checked={customSettings.analytics}
                  onCheckedChange={() => handleToggle("analytics")}
                  className="data-[state=checked]:bg-AntiqueGold"
                />
              </div>
              <div className="flex w-full items-center justify-between">
                <div className="flex flex-col items-start gap-2">
                  <Label className="text-body_base font-medium text-PearlWhite">Advertising Cookies</Label>
                  <p className="text-body_xxs text-PolishedSilver">Used to show you personalized ads outside our website</p>
                </div>
                <Switch
                  checked={customSettings.advertising}
                  onCheckedChange={() => handleToggle("advertising")}
                  className="data-[state=checked]:bg-AntiqueGold"
                />
              </div>
            </div>

            <div className="mt-4 flex w-full flex-col items-center justify-between gap-4 smd:flex-row">
              <button onClick={handleCancelCustomization} className="bg-transparent text-AntiqueGold hover:text-SunsetBronze">
                Cancel
              </button>
              <Button
                onClick={handleSavePreferences}
                className="
                  flex w-full min-w-[256px] items-center gap-2 
                  bg-SapphireSea !text-PearlWhite text-button_base hover:bg-AzureSky 
                  smd:w-auto
                "
              >
                <Cookie className="max-w-5" />
                Save Preferences
              </Button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-4 smd:flex-row smd:items-center smd:justify-between">
            <div className="flex flex-col items-start gap-2 md:gap-3">
              <h5 className="w-full text-heading_xs font-bold leading-tight tracking-wider text-PearlWhite smd:text-heading_sm">
                We value your privacy
              </h5>
              <p className="w-full max-w-prose font-serif text-body_xxs leading-relaxed tracking-wider text-PolishedSilver smd:text-body_xs">
                We use cookies to enhance your browsing experience, serve personalised ads or content, and analyse our traffic.
                By clicking &quot;Accept All&quot;, you consent to our use of cookies.
              </p>
              <button onClick={handleCustomize} className="bg-transparent text-AntiqueGold hover:text-SunsetBronze">
                Customize
              </button>
            </div>

            <div className="flex w-full items-end justify-end smd:w-auto">
              <Button
                onClick={handleAcceptAll}
                className="
                  flex w-full min-w-[256px] items-center gap-2 
                  bg-SapphireSea !text-PearlWhite hover:bg-AzureSky 
                  smd:w-auto
                "
              >
                <Cookie className="max-w-5" />
                Accept
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
