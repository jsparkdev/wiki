import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://wiki.jspark.dev",
  integrations: [sitemap()],
  experimental: {
    svg: true,
  },
  markdown: {
    shikiConfig: {
      theme: "andromeeda",
    },
  },
  vite: {
    plugins: [tailwindcss()],
    build: {
      target: "esnext",
    },
  },
});
