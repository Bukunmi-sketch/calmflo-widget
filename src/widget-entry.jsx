// widget-entry.jsx
import React from "react";
import { createRoot } from "react-dom/client";
import ChatWidget from "./App";
import widgetStyles from "./index.css?inline"; // ⬅️ Import Tailwind CSS as raw text

function initChatWidget(widgetId) {
  let container = document.getElementById("chat-widget-container");
  if (!container) {
    container = document.createElement("div");
    container.id = "chat-widget-container";
    document.body.appendChild(container);
  }

  // Shadow DOM isolation
  if (!container.shadowRoot) {
    const shadowRoot = container.attachShadow({ mode: "open" });

    // Inject Tailwind styles into shadow DOM
    const style = document.createElement("style");
    style.textContent = widgetStyles;
    shadowRoot.appendChild(style);

    const widgetRoot = document.createElement("div");
    shadowRoot.appendChild(widgetRoot);

    const root = createRoot(widgetRoot);
    root.render(
      <React.StrictMode>
        <ChatWidget widgetId={widgetId} />
      </React.StrictMode>
    );
  }
}

// Expose globally (for production UMD build)
window.initChatWidget = initChatWidget;

export { initChatWidget };

// Auto-init in dev
if (import.meta.env.DEV) {
  initChatWidget("Mzg6MTc6UG04M1l6MGYxNGk0TTQwOTZuRFo6MmMwMjQ3NzU");
}

