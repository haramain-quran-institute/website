export type ConsentSettings = {
  necessary: boolean;
  analytics: boolean;
  advertising: boolean;
  timestamp?: string;
};

export type ConsentStatus = "pending" | "granted" | "denied";
