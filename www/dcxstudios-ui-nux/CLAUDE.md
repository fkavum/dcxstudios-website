# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

DCX Studios marketing website built with **Nuxt 4** (Vue 3), **TypeScript**, **Tailwind CSS v4**, and **Nuxt UI v4**. Bilingual (English/Turkish) with live app store data integration.

## Commands

```bash
pnpm dev              # Start dev server
pnpm build            # Production build
pnpm preview          # Preview production build
pnpm lint             # ESLint
pnpm typecheck        # Type checking (vue-tsc)
pnpm postinstall      # Regenerate .nuxt types (nuxt prepare)
```

## Architecture

### Routing & Pages
File-based routing in `app/pages/`. Pages: index, about, games, contact, privacy-policy, cookie-policy, terms.

### Components (`app/components/`)
- **Layout**: `AppHeader`, `AppFooter`
- **Home sections**: `HomeHero`, `FeaturesSection`, `GameSection` (interactive letter wheel), `GallerySection`, `CommunityCta`
- **Global**: `LanguageSwitcher`, `CookieConsent`

### Server API (`server/api/`)
- `contact.post.ts` — Contact form via Resend API (simulates if no API key)
- `app-data.get.ts` — Fetches live ratings/downloads from iTunes + Google Play

### Internationalization
- Uses `@nuxtjs/i18n` with `no_prefix` strategy and cookie-based locale detection
- Translations are co-located in each page/component via `<i18n lang="json">` blocks at the bottom of `.vue` files (not in separate translation files)
- Always use `useI18n()` with `useScope: 'local'`

### Styling
- Tailwind CSS v4 with custom theme in `app/assets/css/main.css`
- Primary color: `#ffdb2d` (yellow), dark surface: `#181811`, font: Inter
- Custom animations defined in `main.css`: spin, slideIn, fade, slide
- Icons via `UIcon` component using Iconify (lucide, simple-icons, heroicons)

### Key Patterns
- All pages use `<script setup>` with Composition API
- Pages set SEO via `useHead()` + `useSeoMeta()`
- Data fetching via `useFetch()` (lazy where appropriate)
- No global state store — local `ref()`/`computed()` only
- Google Analytics loads only after cookie consent

## Environment Variables

```
RESEND_API_KEY              # Resend email API key (optional for dev)
NUXT_PUBLIC_GOOGLE_ANALYTICS_ID  # GA4 measurement ID
```

## ESLint Config

Stylistic rules: no trailing commas, 1tbs brace style. Config in `eslint.config.mjs` extending `@nuxt/eslint`.

## Deployment

Docker-based (Nuxt standalone mode), deployed via Coolify. Static assets in `public/` (images, videos, sitemap.xml, robots.txt).
