// Conversion tracking helper — pushes to window.dataLayer.
// Compatible with GA4 (via Google Tag Manager) and Google Ads once the
// container is added to __root.tsx. Works out of the box with Lovable
// Analytics as inert calls (no error if dataLayer is undefined).

type ConversionEvent =
  | "call_click"
  | "quote_cta_click"
  | "quote_submit"
  | "contact_submit"
  | "simulator_complete"
  | "email_click";

interface DataLayerWindow extends Window {
  dataLayer?: Array<Record<string, unknown>>;
}

export function track(event: ConversionEvent, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  const w = window as DataLayerWindow;
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({ event, ...params, ts: Date.now() });
}

export function trackCall(source: string) {
  track("call_click", { source });
}

export function trackQuoteCta(source: string) {
  track("quote_cta_click", { source });
}