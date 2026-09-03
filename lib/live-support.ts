export interface LiveSupportHandoff {
  status: "prepared";
  provider: "development-fallback";
  visitorContext: Record<string, string>;
}

export interface LiveSupportProvider {
  readonly isConfigured: boolean;
  prepareHandoff(visitorContext: Record<string, string>): LiveSupportHandoff;
}

class DevelopmentLiveSupportProvider implements LiveSupportProvider {
  readonly isConfigured = false;

  prepareHandoff(visitorContext: Record<string, string>): LiveSupportHandoff {
    return { status: "prepared", provider: "development-fallback", visitorContext };
  }
}

// Replace this adapter with a Chatwoot provider when its credentials and inbox are configured.
export const liveSupportProvider: LiveSupportProvider = new DevelopmentLiveSupportProvider();
