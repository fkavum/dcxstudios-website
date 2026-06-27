# DCX Studios Websites — Audit Overview

> Full audit performed on 2026-06-25. This file is the master summary.
> Each section links to a detailed implementation plan.

---

## Site Map & Status

| Site | Stack | Prod URL | State |
|------|-------|----------|-------|
| `../www/portfolio` | Astro + Tailwind + React + Vue + MDX | `dcxstudios.org` | 🟡 Live, has content bugs |
| `../www/dcxstudiosv2` | Astro + Tailwind | `fatihkavum.dcxstudios.org` | 🟡 Live, wrong game description + fake stats |
| `../www/crossle` | Static HTML/CSS/JS | `crossle.dcxstudios.org` | 🔴 Live, no marketing page at all |
| `../www/fallback` | Static HTML | nginx fallback | ✅ Fine as-is |
| `../www/dcxstudios` | Static HTML | — (deprecated) | ✅ Migration complete, safe to delete |
| `../www/crossle-ui-nux` | Nuxt.js | — (deprecated) | 🔴 NOT safe to delete yet — landing page not ported |

---

## Migration Verdict

### `dcxstudios` → `dcxstudiosv2`: Complete ✅

All assets and sections are accounted for in `dcxstudiosv2`. The developer photo (`developer.jpeg`) was intentionally replaced with a values-card style About section. No content is stranded.

**Action:** Delete `../www/dcxstudios`. → See [`implementations/deprecated-cleanup/`](implementations/deprecated-cleanup/implementation.md)

### `crossle-ui-nux` → `crossle-landing` (new Astro project): Not started ❌

The old Nuxt site was a full marketing/landing page for the game. The current `crossle` static site (hub page) is **not being touched** — it works fine as-is. Instead, the Nuxt marketing page will be ported into a new Astro project at `../www/crossle-landing`, ready to deploy whenever needed. Once that project builds and previews correctly, `crossle-ui-nux` can be deleted.

**Action:** Create `../www/crossle-landing` Astro project, then delete crossle-ui-nux. → See [`implementations/crossle-landing-page/`](implementations/crossle-landing-page/implementation.md)

---

## Content Bugs Found (6 live bugs)

These are incorrect or placeholder values that are publicly visible right now.

| # | Location | Bug |
|---|----------|-----|
| 1 | `../www/dcxstudiosv2/src/content/games/crossle.md` | Game described as "Daily Word Puzzle / offline play" — it's an online PvP game |
| 2 | `../www/dcxstudiosv2/src/components/home/Hero.astro` | Stats bar shows "100+ Downloads" and "#1 Puzzle Game" — placeholder values |
| 3 | `../www/dcxstudiosv2/src/components/home/About.astro` | "Founded in 2024" — should be 2022 |
| 4 | `../www/portfolio/src/data/resume.json` | DCX Studios entry description: "I did crossle." |
| 5 | `../www/portfolio/src/data/resume.json` | GitHub social uses `instagram-svgrepo-com.svg` icon |
| 6 | `../www/crossle/crossle_privacy_policy.html` | References "DontCrossMe app" — old app name |

**Action:** Fix all 6. → See [`implementations/content-bugs/`](implementations/content-bugs/implementation.md)

---

## Artistic & Design Findings

### `dcxstudiosv2` — Company Site

**Strengths:** Solid design language. Dark/light section contrast, `#ffdb2d` yellow primary color, blur glow accents, polished Gallery and Header components.

**Problems:**
- Hero is a single-game marketing page, not a studio page. No studio identity in the first screen.
- Hero copy ("daily ritual for your brain / procedural levels") describes the wrong type of game.
- About section uses generic value cards (Innovation, Passion, Community, Quality) — reads like boilerplate for an indie studio run by one person.
- No human presence. The deprecated site had a developer photo and personal story; this site has neither.
- "Founded in 2024" is factually wrong.

**Action:** Rework identity + hero + about. → See [`implementations/dcxstudiosv2-identity/`](implementations/dcxstudiosv2-identity/implementation.md)

---

### `portfolio` — Personal Portfolio (dcxstudios.org)

**Strengths:** Distinctive retro arcade aesthetic. VT323 + Press Start 2P, neon color palette, scanline background, consistent game-themed naming (QUEST_LOG, ABILITY_TREE). Strong personality.

**Problems:**
- No profile photo. Feels anonymous for a personal developer portfolio.
- DCX Studios experience entry: "I did crossle." is live.
- Only 2 skill categories — feels sparse for 7+ years of experience.
- No projects/side-projects section. Work experience alone is thin.
- Blog (`/logs`) exists with 4 posts but content is stub-level.
- GitHub social button uses the Instagram icon.
- Nav has no overflow handling on mobile — "LOGS" can get cut.

**Action:** Content + structure improvements. → See [`implementations/portfolio-content/`](implementations/portfolio-content/implementation.md)

---

### `crossle` — Game Hub (crossle.dcxstudios.org)

**Strengths:** The dark card design on utility pages (support, privacy, terms) is clean. Gradient title text is nice.

**Problems:**
- No marketing landing page. A user landing here from a Google search or app store sees a plain text hub with links — no screenshots, no trailer, no store CTAs.
- Privacy policy references "DontCrossMe" (old app name).
- Pitch deck link is publicly indexed on the home page (may be intentional — worth a decision).

**Action:** Build a proper landing page. → See [`implementations/crossle-landing-page/`](implementations/crossle-landing-page/implementation.md)

---

## Recommended Execution Order

```
Phase 1 — Fix Now (hours, not days)
  [1] content-bugs         Fix 6 live content errors
  [2] deprecated-cleanup   Delete ../www/dcxstudios

Phase 2 — Build (days)
  [3] crossle-landing-page Build Crossle marketing page, then delete crossle-ui-nux
  [4] portfolio-content    Real DCX Studios description, GitHub icon, projects section

Phase 3 — Polish (later)
  [5] dcxstudiosv2-identity Rework hero + about for studio identity
```
