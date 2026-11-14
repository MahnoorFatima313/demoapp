import React from "react";
import { createRoot } from "react-dom/client";
import "@/index.css";
import "animate.css";
import App from "@/App";

const container = document.getElementById("root");

const app = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// react-snap saves browser DOM, not react-dom/server hydration markup.
// Mount a client root instead of trying to hydrate an incompatible snapshot.
// Remove only serialized page metadata before React takes ownership again;
// keep charset, viewport, stylesheets, fonts and application scripts intact.
if (container.hasChildNodes()) {
  document.head.querySelectorAll([
    "title",
    'meta[name="description"]',
    'meta[name="keywords"]',
    'meta[name="author"]',
    'meta[name="robots"]',
    'meta[property^="og:"]',
    'meta[name^="twitter:"]',
    'link[rel="canonical"]',
    'script[type="application/ld+json"]',
  ].join(",")).forEach((element) => element.remove());
}
createRoot(container).render(app);
