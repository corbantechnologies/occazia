declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

// Sends a GA4 event when Google Analytics is configured; does nothing otherwise.
export function track(event: string, params?: Record<string, string | number>) {
  window.gtag?.("event", event, params);
}
