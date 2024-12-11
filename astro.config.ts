import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://wiki.jspark.dev",
  integrations: [tailwind(), sitemap()],
  markdown: {
    shikiConfig: {
      theme: "andromeeda",
    },
  },
  vite: {
    build: {
      target: "esnext",
    },
  },
});
