import { defineConfig } from "cf/config";

export default defineConfig(() => ({
  worker: {
    name: "kbkaran",
    compatibilityDate: "2026-11-01",
    // Pure static site: `entrypoint` is omitted so static requests are 100% free & unmetered.
    // Uncomment when adding server-side Worker routes later:
    // entrypoint: "./src/index.ts",

    domains: ["kbkaran.com", "www.kbkaran.com"],

    assets: {
      htmlHandling: "auto-trailing-slash",
      notFoundHandling: "404-page",
    },

    observability: {
      enabled: true,
    },
  },
}));
