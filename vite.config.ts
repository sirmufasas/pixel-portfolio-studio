import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
  // This project is deployed as a static site (see scripts/create-netlify-index.mjs),
  // so the Nitro/serverless-function build is unnecessary. It was also broken:
  // nitro 3.0.260603-beta's `nf3` dependency bundles a minified copy of
  // `@vercel/nft` with a named ESM import Node's CJS interop can't resolve,
  // which crashed `vite build` before it ever reached our code.
  nitro: false,
  // Split third-party libraries into their own chunk so the main route
  // bundle stays small and vendor code (which rarely changes) can be
  // cached separately by the browser. Fixes the "chunks larger than
  // 500 kB" build warning.
  vite: {
    build: {
      rollupOptions: {
        output: {
          manualChunks(id: string) {
            if (
              id.includes("node_modules/react/") ||
              id.includes("node_modules/react-dom/") ||
              id.includes("node_modules/@tanstack/react-router") ||
              id.includes("node_modules/@tanstack/react-query")
            ) {
              return "vendor";
            }
          },
        },
      },
    },
  },
});