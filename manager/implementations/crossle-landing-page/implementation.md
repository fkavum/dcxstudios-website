# Implementation: Crossle Landing Page (Astro)

> Convert the crossle-ui-nux (Nuxt.js) marketing site into an Astro project.
> The current static `../www/crossle` site is NOT touched — it stays as-is.
> The new Astro project is a future-ready landing page, ready to swap in when needed.
> All paths relative to `dcxstudios-website/` root.

---

## Goal

- Port the crossle-ui-nux marketing page to Astro.js as `../www/crossle-landing`
- Once the Astro project is confirmed working, delete `../www/crossle-ui-nux`
- `../www/crossle` (static hub) remains unchanged

---

## New Project: `../www/crossle-landing`

Scaffold a new Astro project with Tailwind, matching the setup used by `dcxstudiosv2`:

```bash
npm create astro@latest crossle-landing
cd crossle-landing
npm install @tailwindcss/vite tailwindcss
```

Reference `../www/dcxstudiosv2/astro.config.mjs` and `package.json` for the config pattern. Keep it minimal — no React/Vue needed unless the GameSection interactive component requires it.

---

## Structure

```
crossle-landing/
  src/
    components/
      Hero.astro
      Features.astro
      GameplayVideo.astro
      Screenshots.astro
      DownloadCta.astro
      Footer.astro
    layouts/
      Layout.astro
    pages/
      index.astro
    styles/
      global.css
  public/
    images/
      hero-mockup.png
      crossle-gameplay.webp
      crossle-home-screen.webp
      crossle-leaderboard.webp
      icon.webp
    videos/
      crossle-gameplay-trailer.mp4
```

---

## Assets to Copy from `../www/crossle-ui-nux/public/`

| Source | Destination |
|---|---|
| `public/images/hero-mockup.png` | `crossle-landing/public/images/hero-mockup.png` |
| `public/images/crossle-gameplay.webp` | `crossle-landing/public/images/crossle-gameplay.webp` |
| `public/images/crossle-home-screen.webp` | `crossle-landing/public/images/crossle-home-screen.webp` |
| `public/images/crossle-leaderboard.webp` | `crossle-landing/public/images/crossle-leaderboard.webp` |
| `public/videos/crossle-gameplay-trailer.mp4` | `crossle-landing/public/videos/crossle-gameplay-trailer.mp4` |
| `public/icon.webp` | `crossle-landing/public/images/icon.webp` |

Screenshots from `../www/dcxstudiosv2/public/images/crossle-1/2/3.webp` can also be used if the above aren't enough.

---

## Content to Port from `../www/crossle-ui-nux/`

All content comes from `app/pages/index.vue`. Port it as static Astro components — no Vue reactivity needed.

### Hero (`Hero.astro`)
- Headline: "Crossle" / "Online Word Duel"
- Subtext: "The ultimate multiplayer word game. Compete in crossword-style duels, use strategy to outsmart your opponents, and climb the global ranks."
- App Store + Google Play buttons
- `hero-mockup.png` phone image (right side, rotated 3deg with hover-to-0 effect — already in dcxstudiosv2 Hero.astro)

Store URLs:
- App Store: `https://apps.apple.com/tr/app/crossle-online-word-duel/id6751605835`
- Google Play: `https://play.google.com/store/apps/details?id=com.dcxstudios.dcm`

### Features (`Features.astro`)
Three feature cards from `index.vue`:
- **PvP Duels** — "Challenge your friends or match with random opponents in real-time crossword battles."
- **Strategy & Skill** — "It's not just about big words. Use the board multipliers and block your opponent to win."
- **Global Rankings** — "Climb the leaderboards and prove you are the best word master in the world."

### Gameplay Video (`GameplayVideo.astro`)
```html
<video controls poster="/images/hero-mockup.png" preload="none">
  <source src="/videos/crossle-gameplay-trailer.mp4" type="video/mp4" />
</video>
```
Style as a centered phone-shaped container. Reference the video section in `crossle-ui-nux/app/pages/index.vue` for the phone-frame border styling.

### Screenshots (`Screenshots.astro`)
Three screenshots in a horizontal row, horizontal scroll on mobile. Use the webp images from crossle-ui-nux.

### Download CTA (`DownloadCta.astro`)
Repeat the two store buttons with a short tagline — same as the bottom section in `index.vue`.

### Layout (`Layout.astro`)
Standard shell: `<head>` with meta, OG tags, canonical URL pointing to `crossle.dcxstudios.org` (for when it goes live), Tailwind import. No Header/Footer nav needed — this is a single-page marketing site.

---

## Styling

Use the same dark color palette as the crossle-ui-nux site:
- Background: `#0f172a` (slate-900)
- Card/surface: `#1e293b` (slate-800)
- Primary accent: `#6366f1` (indigo-500) — for CTAs and highlights
- Text: `#f8fafc`

Define these as CSS custom properties in `global.css` then reference via Tailwind's arbitrary values or a `@theme` block.

The `dcxstudiosv2` global.css pattern (`@theme { --color-primary: ...; }`) is the cleanest approach to follow.

---

## GameSection (Interactive Component)

The Nuxt `crossle-ui-nux` had a `GameSection.vue` — an interactive letter-wheel component. This is non-trivial to port. **Skip it for now.** The dcxstudiosv2 already has a working version of this component in its own codebase (`src/styles/global.css` has the `.wheel-container`, `.letter-button` etc. CSS). If you want this in the future, it can be lifted from there.

---

## After This Is Done

1. Confirm `crossle-landing` builds cleanly (`npm run build`)
2. Preview it locally (`npm run preview`) and verify all sections render correctly
3. Update `session_progress.md` to ✅ done
4. Return to `implementations/deprecated-cleanup/` and delete `../www/crossle-ui-nux`
5. Add `crossle-landing` to the sites table in `introduction.md` when it's ready to deploy
