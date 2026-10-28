import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ga4 from "react-ga4";
import "./index.css";

// Initialize GA4 lazily on first user interaction or idle callback to prevent blocking critical path
if (typeof window !== "undefined" && !import.meta.env.DEV) {
  let initialized = false;
  const initAnalytics = () => {
    if (initialized) return;
    initialized = true;
    ga4.initialize("G-XV28YL4FJL");
  };

  const interactionEvents = ["scroll", "mousemove", "touchstart", "click", "keydown"];
  const onUserInteraction = () => {
    initAnalytics();
    interactionEvents.forEach((event) =>
      window.removeEventListener(event, onUserInteraction)
    );
  };

  interactionEvents.forEach((event) =>
    window.addEventListener(event, onUserInteraction, { once: true, passive: true })
  );

  // Fallback idle initialization after 3.5 seconds
  if ("requestIdleCallback" in window) {
    window.requestIdleCallback(() => setTimeout(initAnalytics, 3500));
  } else {
    setTimeout(initAnalytics, 3500);
  }
}

const container = document.getElementById("root")!;
const appElement = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

if (container.hasChildNodes()) {
  ReactDOM.hydrateRoot(container, appElement);
} else {
  ReactDOM.createRoot(container).render(appElement);
}

export { ga4 };
