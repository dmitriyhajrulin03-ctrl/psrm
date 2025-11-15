export function trackEvent(eventName: string, properties?: Record<string, unknown>) {
  if (typeof window !== "undefined") {
    // Analytics tracking logic
    console.log("Track event:", eventName, properties);
  }
}

export function trackPageView(path: string) {
  trackEvent("page_view", { path });
}






