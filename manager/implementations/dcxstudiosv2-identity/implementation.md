# Implementation: DCX Studios Identity Rework

> Rework `../www/dcxstudiosv2` to have a clear studio identity,
> not just a single-game marketing page.
> All paths relative to `dcxstudios-website/` root.

---

## The Problem

The current `dcxstudiosv2` homepage reads as a Crossle marketing page with no studio framing:
- The hero headline is about Crossle
- The hero copy describes Crossle ("daily ritual for your brain")
- The About section is generic studio boilerplate (Innovation, Passion, Community, Quality cards)
- The company was founded in 2022, not 2024
- There's no human presence — no founder story, no photo, no personality

A visitor who lands here doesn't know: who built this, what the studio's mission is, or that there's a person behind it.

---

## 1. Fix Founding Year

**File:** `../www/dcxstudiosv2/src/components/home/About.astro`

Change `"Founded in 2024"` → `"Founded in 2022"`.

---

## 2. Hero Rework

**File:** `../www/dcxstudiosv2/src/components/home/Hero.astro`

The hero should introduce DCX Studios as a studio, then use Crossle as the proof of what the studio can do. Right now it skips straight to Crossle.

Proposed change:

**Current headline:** "Unleash your inner genius."
**Problem:** This is Crossle's tagline, not the studio's identity.

**New approach — two options:**

Option A — Studio-first hero:
- H1: "DCX Studios" (or the studio's actual tagline)
- Subtext: Who you are + what you make ("An independent mobile game studio. We build games that challenge and connect players worldwide.")
- CTA: "See our games ↓" (scrolls to the games section)
- Keep the phone mockup showing Crossle as the visual

Option B — Keep game-first but add studio context:
- Add a small badge/pill above the headline: "DCX Studios — Indie Game Studio"
- Adjust the hero copy so it frames Crossle as "our flagship game" rather than talking to the player directly
- This is a smaller change and less risky

**Recommended:** Option A for a proper studio page. Option B if you want a quicker change.

**Stats bar:** Fix the placeholders per `content-bugs/` (Bug 2). If "#1 Puzzle Game" is removed, consider replacing the third stat with something studio-level: "1 Studio, 1 Developer, 1 Game — so far."

---

## 3. About Section Rework

**File:** `../www/dcxstudiosv2/src/components/home/About.astro`

The current About section has four generic value cards (Innovation, Passion, Community, Quality). These could apply to any company in the world. Replace with content that's specific to this studio.

Options:

**Option A — Founder story block:**
A two-column layout: left side has text (who Fatih is, how the studio started, the Zynga → indie journey), right side has the developer photo (`developer.jpeg` from the deprecated site — copy it in if using this approach).

Something like:
> "DCX Studios is Fatih Kavum — a game developer with 7+ years at companies like Zynga. After shipping features played by 50M+ people, I built something of my own: Crossle. Everything you see here — game design, code, backend, DevOps — is built by one person."

**Option B — Keep cards but make them specific:**
Replace the generic value titles with real facts about the studio:
- "Solo Studio" → "One developer. Full stack. Every system."
- "7+ Years Industry" → "Former Zynga engineer. 50M+ install experience."
- "1 Game Shipped" → "Crossle: live on iOS & Android."
- "Open to Collabs" → Link to contact

**Recommended:** Option A creates more personality and human connection. Option B is faster to implement.

**Developer photo:**
If going with Option A, copy `developer.jpeg` from `../www/dcxstudios/assets/images/developer.jpeg` into `../www/dcxstudiosv2/public/images/developer.jpeg` and use it in the About section.

---

## 4. Hero Copy Accuracy

**File:** `../www/dcxstudiosv2/src/components/home/Hero.astro`

Current text: *"Crossle isn't just a puzzle game. It's a daily ritual for your brain. Dive into infinite procedural levels and compete globally."*

This is inaccurate (see `content-bugs/` Bug 1 — Crossle is PvP, not a daily puzzle). After fixing Bug 1 in `crossle.md`, also update this inline text in `Hero.astro` to match. The component text is separate from the content collection.

Accurate description of Crossle:
> "A real-time word battle game. Challenge opponents worldwide in crossword-style duels — strategy, skill, and a sharp vocabulary win."

---

## 5. Crossle Content File Fix (dependency)

Before or alongside this implementation, ensure `content-bugs/` Bug 1 is fixed first.
File: `../www/dcxstudiosv2/src/content/games/crossle.md`
The game description used by `OurGames` and `Gallery` sections also needs to be correct.

---

## Sequence

1. Fix founding year (5 min)
2. Fix Hero copy accuracy (10 min, after Bug 1 in content-bugs is done)
3. Fix stats bar (done under content-bugs, Bug 2)
4. Decide between Option A and Option B for Hero identity rework
5. Decide between Option A and Option B for About section
6. Implement chosen options
7. Build and verify visually — check desktop and mobile
