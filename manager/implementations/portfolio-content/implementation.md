# Implementation: Portfolio Content Improvements

> Improve the personal portfolio at `../www/portfolio`.
> Goal: remove placeholders, add real content, fix structural gaps.
> All paths relative to `dcxstudios-website/` root.

---

## 1. Fix DCX Studios Description (`resume.json`)

**File:** `../www/portfolio/src/data/resume.json`

The DCX Studios entry currently has `"description": "I did crossle."` — replace with a real description that matches the portfolio's arcade voice and uses the `<span class="highlight">...</span>` pattern.

Write content that covers:
- What Crossle is (online PvP word game, iOS + Android)
- Solo/full-stack scope: Unity client, .NET backend, game server, DevOps
- Any notable metrics (downloads, app store rating, leaderboard players)

Example direction (adjust with real numbers):
```
"Solo-built <span class=\"highlight\">Crossle</span> — a real-time PvP word game on iOS & Android. Designed, developed, and shipped the full stack: Unity client, .NET game server, ASP.NET REST API, MySQL, Redis, Docker, CI/CD. From art direction to production ops — <span class=\"highlight\">all of it</span>."
```

---

## 3. Expand Skills Section (`resume.json`)

**File:** `../www/portfolio/src/data/resume.json`

Currently only 2 categories: `CORE_TECH` and `INFRA_SKILLS`. Add more categories to fill out the ABILITY_TREE section. Suggested additions:

```json
{
  "category": "GAME_DEV",
  "items": [
    "Unity (6+ Years)",
    "C++ / Unreal",
    "Game Architecture",
    "Addressables / Content"
  ]
},
{
  "category": "WEB_FRONTEND",
  "items": [
    "TypeScript / HTML5",
    "Astro.js / Vue / React",
    "WebGL / Three.js",
    "Tailwind CSS"
  ]
},
{
  "category": "DATA",
  "items": [
    "MySQL / MS SQL",
    "Redis / Caching",
    "Query Optimization",
    "Data Pipelines"
  ]
}
```

Adjust items to match reality — these are suggestions based on the experience entries.

Note: the skill grid in `global.css` is `grid-template-columns: 1fr 1fr` — adding more categories will automatically flow into more rows. No layout changes needed.

---

## 4. Add Projects Section

**File:** `../www/portfolio/src/pages/index.astro` (add new section), `../www/portfolio/src/data/resume.json` (add `projects` array)

Add a `SIDE_QUESTS` (or `PROJECTS`) section between ABILITY_TREE and the footer.

Structure in `resume.json`:
```json
"projects": [
  {
    "name": "Crossle",
    "url": "https://crossle.dcxstudios.org",
    "tags": ["Unity", ".NET", "iOS", "Android"],
    "description": "Online real-time PvP word game. <span class=\"highlight\">Solo-built</span> from game design to production."
  }
]
```

Add more side projects, game jam entries, or open source work as relevant.

In `index.astro`, add:
```astro
<Section id="projects" title="SIDE_QUESTS">
  {resumeData.projects?.map((proj) => (
    <Card title={proj.name} tags={proj.tags}>
      <p set:html={proj.description} />
    </Card>
  ))}
</Section>
```

And add `SIDE_QUESTS` to the nav in `Navigation.astro`:
```html
<a href="/#projects">SIDE_QUESTS</a>
```

---

## 5. Mobile Nav Overflow Fix

**File:** `../www/portfolio/src/styles/global.css` and `../www/portfolio/src/components/Navigation.astro`

Current nav uses `display: flex; justify-content: center` with 4 links. On narrow mobile screens "LOGS" can be cut off.

Fix: Add `flex-wrap: wrap` to `.nav-links`, or reduce font size at small breakpoints, or switch to a scrollable row:

```css
.nav-links {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    justify-content: center;
}
```

Or on very small screens:
```css
@media (max-width: 480px) {
    .nav-links {
        gap: 12px;
    }
    nav a {
        font-size: 0.55rem;
    }
}
```

---

## 6. Blog Posts (Optional — lower priority)

**Files:** `../www/portfolio/src/content/blog/*.md` and `*.mdx`

Four blog post files exist (`engine.mdx`, `redis.md`, `sql.md`, `weztermConfig.md`) but appear to be stub-level. If you want the `/logs` section to be useful:
- Pick 1–2 posts and write them properly
- Check the content schema in `content.config.ts` to understand required frontmatter fields
- Remove or mark as draft any posts that aren't ready

This is lower priority than the structural fixes above.
