import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";
import { SITE } from "~/utils/constants";

const posts = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/posts" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tag: z.enum(SITE.TAGS),
  }),
});

export const collections = { posts };
