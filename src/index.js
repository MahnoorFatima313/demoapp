import React from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import "@/index.css";
import "animate.css";
import App from "@/App";

const container = document.getElementById("root");

const app = (
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>
);

// If react-snap already put real HTML inside #root, attach to it (hydrate).
// Otherwise (normal dev mode) render from scratch.
if (container.hasChildNodes()) {
  hydrateRoot(container, app);
} else {
  createRoot(container).render(app);
}