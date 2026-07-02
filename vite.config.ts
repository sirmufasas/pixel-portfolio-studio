import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
  nitro: {
    preset: "netlify",
    // @ts-expect-error - `renderer` is a valid Nitro option, just not yet typed by this wrapper
    renderer: false,
  },
});