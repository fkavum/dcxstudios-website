# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Crossle is a landing page and web interface for a multiplayer word game (mobile iOS/Android). Built with **Nuxt 4** (Vue 3), **TypeScript**, **Tailwind CSS v4**, and **Nuxt UI v4**. Serves as the promotional website with an interactive game demo.

## Commands

```bash
pnpm dev              # Start dev server (port 3000)
pnpm build            # Production build (outputs to .output)
pnpm preview          # Preview production build
pnpm lint             # ESLint
pnpm typecheck        # Type checking (vue-tsc)
pnpm postinstall      # Regenerate .nuxt types (nuxt prepare)
```

## Architecture

### Pages (`app/pages/`)
File-based routing: index (landing), support, privacy-policy, terms.

### Components (`app/components/`)
- **GameSection** — Interactive letter wheel demo (drag-to-connect UI, canvas confetti on success, SVG path drawing, touch+mouse support)
- **CookieConsent** — Cookie banner with localStorage persistence, lazy-loads Google Analytics on accept

### Layout
Single layout in `app/app.vue`: sticky header with logo + dark mode toggle, `<NuxtPage />`, global footer, cookie consent banner.

### No Backend
No API routes or server endpoints. Purely presentational — the actual game lives in mobile apps.

### Styling
- Tailwind CSS v4 with custom theme in `app/assets/css/main.css`
- Primary: yellow (`#eab308`), font: Public Sans
- Full dark mode support via `dark:` prefix and `UColorModeButton`
- Custom game wheel styles and animations (spin, slideIn) in `main.css`
- Icons via `UIcon` using Iconify (lucide, simple-icons)

### Key Patterns
- All pages use `<script setup>` with Composition API
- SEO via `useHead()` + `useSeoMeta()` + JSON-LD structured data (SoftwareApplication schema)
- No global state store — local `ref()`/`computed()` only
- Home page is pre-rendered (`routeRules: { '/': { prerender: true } }`)
- Google Analytics loads only after cookie consent

## Environment Variables

```
NUXT_PUBLIC_GOOGLE_ANALYTICS_ID  # GA4 measurement ID
```

## ESLint Config

Stylistic rules: no trailing commas, 1tbs brace style. Config in `eslint.config.mjs` extending `@nuxt/eslint`.

## Deployment

Docker multi-stage build (Node 22-slim), runs `node .output/server/index.mjs`. Static assets in `public/` (images, videos, sitemap.xml, robots.txt).
