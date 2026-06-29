# Implementation: Content Bugs Fix

> Phase 1 — fix all 6 live content errors across the active sites.
> All paths relative to `dcxstudios-website/` root.

---

## Bug 1 — Wrong Crossle game description

**File:** `../www/dcxstudiosv2/src/content/games/crossle.md`

**Problem:** Describes Crossle as a "Daily Word Puzzle" with offline play and daily procedural puzzles. The actual game is an online real-time PvP word duel.

**Fix:** Rewrite the frontmatter and body to accurately describe the game. Use the crossle-ui-nux content as reference — it had the correct description before it was deprecated.

Correct facts (from crossle-ui-nux):
- Genre: Online multiplayer / PvP word game
- Mechanic: Crossword-style real-time duels
- Key features: Real-time PvP, turn-based strategy, power-ups/boosters, global leaderboards, progression

What to change:
- `subtitle`: "Daily Word Puzzle" → "Online Word Duel"
- `shortDescription`: rewrite to reflect PvP, real-time, competitive
- `features` list: replace daily/offline features with PvP/leaderboard/booster features
- Body prose: update to match the competitive multiplayer nature

---

## Bug 2 — Fake stats in Hero

**File:** `../www/dcxstudiosv2/src/components/home/Hero.astro`

**Problem:** Stats bar shows `100+` downloads and `#1 Puzzle Game`. These are hardcoded fallback values that look like placeholders. The "#1 Puzzle Game" has no source.

**Fix:**

- Replace "#1 Puzzle Game" with something verifiable, e.g. "Indie Game" or a feature count.

**Recommended:** Option B. Keep the two live-API stats, remove the "#1 Puzzle Game" column. Fallback for downloads can be changed from `100+` to something honest like `Growing` or just the current real count.

Implementation note: The iTunes API call is at the bottom of `Hero.astro` in a `<script>` block. The fallback values for `hero-downloads` and `hero-rating` are set in the HTML. Just update the fallback and remove the third stat column.

---

## Bug 4 — Placeholder DCX Studios description

**File:** `../www/portfolio/src/data/resume.json`

**Problem:** The DCX Studios experience entry has `"description": "I did crossle."` — this renders live on the portfolio homepage.

**Fix:** Write a real description. Keep the retro/arcade voice that matches the rest of the portfolio. Should mention: Crossle (the flagship), the full-stack solo nature of the work, and any notable metrics (downloads, ratings, engineering challenge). Use the `<span class="highlight">...</span>` pattern that other entries use.

Example direction:
> "Solo-built <span class=\"highlight\">Crossle</span> — an online real-time PvP word game on iOS & Android. Full stack: Unity client, .NET game server, ASP.NET REST API, MySQL/Redis, Docker, CI/CD. <span class=\"highlight\">Everything</span> from game design to DevOps."

---

## Bug 5 — GitHub social uses Instagram icon

**File:** `../www/portfolio/src/data/resume.json`

**Problem:** The GitHub entry in `socials` has `"icon": "/icons/instagram-svgrepo-com.svg"` — it renders the Instagram logo for the GitHub link.

**Fix:** Change the icon path to `/icons/GitHub_Invertocat_Black.svg`. That file already exists in `../www/portfolio/public/icons/`.

Note: The icon is black and the site has a dark background — may need to invert it with CSS or use the white version. Check how the LinkedIn and DCX icons look at runtime; if they're visible, the GitHub icon will need the same treatment.

---

## Bug 6 — Privacy policy old app name

**File:** `../www/crossle/crossle_privacy_policy.html`

**Problem:** The privacy policy text references "the DontCrossMe app" — the old name before rebranding to Crossle.

**Fix:** Replace all occurrences of "DontCrossMe" with "Crossle". Also check the full document for any other stale references (old URLs, old package names, etc.).

Reference: `../www/crossle-ui-nux/app/pages/privacy-policy.vue` has the correctly updated version of the policy that already uses "Crossle" throughout — use it as a guide for what the correct text should be.
