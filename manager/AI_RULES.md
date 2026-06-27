# AI Rules — DCX Studios Static Websites

Read this file before implementing anything in any site under `../www/`.

---

## Core Principle: Modularity First

This project values modularity and reusability above all else. Astro was specifically chosen because it makes this easy. Every implementation decision must reinforce that.

Before writing any code, ask:
1. Does this belong in a **component** (reusable UI piece)?
2. Does this belong in a **layout** (page shell)?
3. Does this belong in **data** (typed static data file)?
4. Does this belong in a **content collection** (prose/markdown content)?
5. Only if none of the above: does it belong inline in a **page**?

If you answer "inline in a page" for something that could be extracted, stop and extract it first.

---

## Components (`src/components/`)

- Every repeating UI element must be a component. Three similar markup blocks in different pages = extract a component.
- Components accept props for variation. Never duplicate a component with minor differences — parameterize instead.
- Use `.astro` components by default. Only reach for `.tsx` (React) or `.vue` when the component genuinely needs client-side interactivity or reactive state.
- Name components by what they are, not where they're used. `Card.astro` not `HomeCard.astro`.
- Do not put page-specific logic inside a shared component. If a component needs branching per page, reconsider whether it should be a component or a layout slot.

---

## Layouts (`src/layouts/`)

- `Layout.astro` is the single source of truth for `<head>` content: charset, viewport, meta description, OG tags, font links, favicon, global CSS import.
- Never import `global.css` anywhere except inside `Layout.astro`. Never duplicate the `<head>` block.
- Page-type-specific layouts (e.g. `BlogLayout.astro`) must wrap `Layout.astro` via `<slot />` — they should never rebuild the shell from scratch.
- New layout patterns (e.g. a landing page shell, a legal page shell) get a new layout file, not a duplicated page.

---

## Content Collections (`src/content/`)

- Use content collections for anything that is "data with prose": blog posts, case studies, changelogs, project descriptions with long text.
- Every collection must have a typed schema in `content.config.ts`. Never access frontmatter fields that aren't in the schema.
- Do not hardcode prose or long-form text directly in `.astro` pages or components. Move it to a content collection or a data file.
- Collection slugs are derived from filenames — name files deliberately.

---

## Data Files (`src/data/`)

- Use `.ts` data files for structured non-prose content: navigation items, game/project card data, resume JSON, shared constants (URLs, social handles, studio name).
- Export data as typed arrays or objects, not `any`.
- If the same piece of data (e.g. the studio logo path, a prod URL, a brand name) is referenced in more than one file, it must live in a data file — not duplicated inline.
- Data files are not components. They export plain data only; no JSX, no `.astro` template logic.

---

## CSS & Styling

- Design tokens (brand colors, spacing scale, font families) live as CSS custom properties in `src/styles/global.css`. Reference them via `var(--token-name)` in both CSS and Tailwind's arbitrary value syntax. Never hardcode a hex color or pixel value that represents a design token.
- Tailwind utility classes are the default for layout and spacing. Scoped `<style>` blocks inside `.astro` files handle anything Tailwind can't do cleanly (complex animations, pseudo-element tricks, highly specific selectors).
- If the same set of Tailwind classes appears in three or more places, extract a component instead of duplicating the class string.
- Do not add a new CSS file. Work within `global.css` or scoped `<style>` blocks.
- Both sites must feel visually consistent where they share brand elements. If you update a brand color or font in one site, check whether the other site needs the same change.

---

## Portability & Cross-Site Reuse

- Components and layouts should be written so they could be copied to another site in this monorepo with minimal changes. Avoid hardcoding site-specific strings (URLs, titles, brand names) inside components — receive them as props or import from a data file.
- When building something for one site that clearly applies to the other, note it in `session_progress.md` rather than silently shipping a duplicate.

---

## Astro-Specific Rules

- Prefer static rendering (no `client:*` directive) unless the component genuinely requires browser interactivity.
- When a component needs interactivity, choose the least-hydration option: `client:idle` > `client:visible` > `client:load`.
- Never use `client:only` unless the component is completely incompatible with SSR. If you reach for it, explain why in the implementation notes.
- Use `Astro.props` for data that comes from the parent. Use content collections or data files for data that comes from files. Never `fetch()` at build time unless there is no other way.
- Image optimization: use Astro's `<Image />` component for any image that isn't a decorative background. Pass explicit `width` and `height`.

---

## General Rules

- Do not invent new abstractions. Extend what exists before creating something new.
- Do not rename files, components, or variables without a clear reason stated in the implementation plan.
- Do not add npm packages without discussing it first. Prefer solving problems with what is already installed.
- Do not delete files that appear unused without checking whether they're referenced in a content collection, data import, or `public/` path.
- Match the existing code style exactly: indentation, quote style, import order.
- If something is ambiguous or could be done two ways, ask before implementing. Don't guess.
- Use relative paths everywhere. No absolute filesystem paths in code or config.
