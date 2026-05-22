import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content/blog" }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    category: z.string(),
    tag: z.string().optional(),
    description: z.string(),
  }),
});

export const collections = {
  'blog': blog,
};
