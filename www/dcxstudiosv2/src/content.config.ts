import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const games = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/games' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    icon: z.string().optional(),
    cardImage: z.string().optional(),
    shortDescription: z.string(),
    features: z.array(z.string()),
    appStoreUrl: z.string().optional(),
    googlePlayUrl: z.string().optional(),
    hasGame: z.boolean().default(false),
    order: z.number().default(0),
  }),
});

export const collections = { games };
