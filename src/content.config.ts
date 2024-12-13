import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";
import { techStack } from "./consts";

const posts = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/posts" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tag: z.enum(techStack),
  }),
});

export const collections = { posts };
