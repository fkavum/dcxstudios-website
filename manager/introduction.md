# DCX Studios — Static Websites Project Introduction

All paths are relative to the parent folder of `manager` (i.e. the `dcxstudios-website/` root).

---

## How We Work With AI

For any new feature, redesign, or migration that touches one or more sites, create a folder under:

```
manager/implementations/{feature_name}/
```

Files per folder:
- `{site}_implementation.md` — plan/notes for that site (e.g. `portfolio_implementation.md`, `dcxstudiosv2_implementation.md`)
- `session_progress.md` — tracks what's done, what's left, and next steps

To resume work in a future session: give the AI `introduction.md` + the relevant feature folder.

When every site listed for an implementation is fully ✅ done, move its folder from `implementations/{feature_name}/` to `implementation-done/{feature_name}/` and remove its entry from the Active implementations list below.

**Active implementations:**
- `implementations/content-bugs/` — Fix 6 live content errors across all active sites (🔲 not started)
- `implementations/deprecated-cleanup/` — Delete `../www/dcxstudios` now; delete `../www/crossle-ui-nux` after crossle landing is done (🔲 partially blocked)
- `implementations/crossle-landing-page/` — Build a real marketing page at crossle.dcxstudios.org; port content + assets from crossle-ui-nux (🔲 not started)
- `implementations/portfolio-content/` — Fix placeholder description, GitHub icon, expand skills, add projects section (🔲 not started)
- `implementations/dcxstudiosv2-identity/` — Rework hero + about section to have studio identity instead of single-game marketing (🔲 not started, depends on content-bugs Bug 1 + 2)

---

## Sites

| Site | Stack | Path | Prod URL |
|------|-------|------|----------|
| portfolio | Astro.js + Tailwind + React + Vue + MDX | `../www/portfolio` | `dcxstudios.org` |
| dcxstudiosv2 | Astro.js + Tailwind | `../www/dcxstudiosv2` | `fatihkavum.dcxstudios.org` |
| crossle | Static HTML/CSS/JS | `../www/crossle` | `crossle.dcxstudios.org` |
| fallback | Static HTML | `../www/fallback` | nginx fallback only |

**Deprecated (do not touch):**
- `../www/crossle-ui-nux`
- `../www/dcxstudios`

---

## Astro Project Structure

Both `portfolio` and `dcxstudiosv2` follow the same Astro conventions:

```
src/
  components/    # Reusable UI pieces (.astro, .vue, .tsx)
  content/       # Markdown/MDX content collections (blog posts, case studies, etc.)
  content.config.ts  # Content collection schemas
  data/          # Typed static data files (.ts, .json)
  layouts/       # Page shell wrappers (Layout.astro, BlogLayout.astro, etc.)
  pages/         # File-based routing — every .astro/.md file here becomes a route
  styles/        # Global CSS (global.css, tailwind.css)
public/          # Static assets served at root (images, favicon, fonts)
```

### Components

Components live in `src/components/` and are the unit of reuse across pages. Each component should be self-contained and accept props for variation. Prefer `.astro` for static/structural pieces; use `.vue` or `.tsx` only when interactivity is genuinely needed.

### Layouts

Layouts live in `src/layouts/`. `Layout.astro` is the base shell (head meta, global CSS import, font links, body wrapper). Page-type-specific layouts extend it (e.g. `BlogLayout.astro` wraps `Layout.astro` and adds blog-specific chrome). Never duplicate the `<head>` boilerplate — always go through a layout.

### Content Collections

Markdown/MDX content lives in `src/content/` and is typed via `content.config.ts`. Use content collections for anything that's "data with prose" (blog posts, case studies, changelogs). Never hardcode such data directly in pages.

### Data

Pure TypeScript data files live in `src/data/`. Use these for structured, non-prose content (resume JSON, game card lists, navigation links, shared constants). Import from here rather than scattering literals across components.

---

## CSS & Styling

Both Astro sites use **Tailwind CSS v4** via `@tailwindcss/vite`. Global baseline styles (resets, CSS custom properties, font-face) live in `src/styles/global.css` and are imported once inside the base `Layout.astro` — never import it again anywhere else.

Key rules:
- Design tokens (colors, spacing, typography scale) go into CSS custom properties in `global.css`, not scattered as magic Tailwind values.
- If a visual pattern repeats across more than two components, extract it into a shared component rather than duplicating utility classes.
- Site-specific overrides that cannot belong to a shared component go in scoped `<style>` blocks inside the `.astro` file — never in `global.css`.

---

## Why Astro.js

Astro was chosen because:
- **Modularity** — components, layouts, content, and data are all separated concerns that can be ported across sites without changing the framework language.
- **Zero JS by default** — pages ship no runtime JS unless a component explicitly opts in (React/Vue islands), keeping pages fast.
- **Content collections** — first-class Markdown/MDX support with type-safe schemas makes it easy to add blog posts or docs without touching page code.
- **Framework-agnostic components** — React, Vue, and plain `.astro` components coexist; pick the right tool per component, not per project.

---

## AI Rules

Always read `manager/AI_RULES.md` before implementing anything in this project.

Core principle: **modularity and reusability over convenience.** Before writing new code, ask whether it belongs in a component, a layout, a data file, or a content collection — not inline in a page.
