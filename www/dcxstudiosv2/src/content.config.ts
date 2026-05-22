import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const games = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/games' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    icon: z.string(),
    cardImage: z.string().optional(),
    shortDescription: z.string(),
    features: z.array(z.string()),
    appStoreUrl: z.string().optional(),
    googlePlayUrl: z.string().optional(),
    gallery: z.array(z.object({
      id: z.string(),
      src: z.string(),
      alt: z.string(),
      title: z.string(),
      description: z.string(),
      tag: z.string(),
      type: z.enum(['image', 'video']),
    })),
    hasGame: z.boolean().default(false),
    order: z.number().default(0),
  }),
});

export const collections = { games };
