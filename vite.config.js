// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// import tailwindcss from '@tailwindcss/vite'

// export default defineConfig({
//   plugins: [react(), tailwindcss(),], build: {
//     lib: {
//       entry: "src/widget-entry.jsx",  // always use widget-entry
//       name: "InitChatWidget",
//       fileName: "chat-widget",
//       formats: ["umd"],
//     },
//     rollupOptions: {
//       external: [], // bundle everything in
//       output: {
//         globals: {},
//       },
//     },
//   },
// });

// vite.config.js
// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// import tailwindcss from "@tailwindcss/vite";

// export default defineConfig(({ command }) => {
//   if (command === "serve") {
//     // DEV: run normal React app with index.html
//     return {
//       plugins: [react(), tailwindcss()],
//     };
//   } else {
//     // BUILD: library mode (no index.html, just widget bundle)
//     return {
//       plugins: [react(), tailwindcss()],
//       build: {
//         lib: {
//           entry: "src/widget-entry.jsx", // your exposed init
//           name: "ChatWidget",
//           fileName: "chat-widget",
//           formats: ["umd"],
//         },
//         rollupOptions: {
//           external: [],
//           output: { globals: {} },
//         },
//         emptyOutDir: true,
//       },
//     };
//   }
// });


// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

export default defineConfig(({ command }) => {
  if (command === "serve") {
    // DEV: run normal React app with index.html
    return {
      plugins: [react(), tailwindcss()],
    };
  } else {
    // PROD: build a single UMD bundle with CSS inlined
    return {
      plugins: [react(), tailwindcss(), cssInjectedByJsPlugin()],
      build: {
        lib: {
          entry: "src/widget-entry.jsx",
          name: "ChatWidget",
          fileName: "chat-widget",
          formats: ["umd"],
        },
        rollupOptions: {
          external: [],
          output: { globals: {} },
        },
        cssCodeSplit: false, // ⬅️ force bundling CSS into JS
        emptyOutDir: true,
      },
    };
  }
});
