# Implementation: Deprecated Site Cleanup

> Remove deprecated sites once confirmed safe. Two sites, two different states.
> All paths relative to `dcxstudios-website/` root.

---

## Site 1: `../www/dcxstudios` — Safe to delete now ✅

All assets and page content from `dcxstudios` have been confirmed present in `dcxstudiosv2`:

| dcxstudios asset | dcxstudiosv2 location |
|---|---|
| `assets/images/crossle-1.webp` | `../www/dcxstudiosv2/public/images/crossle-1.webp` ✅ |
| `assets/images/crossle-2.webp` | `../www/dcxstudiosv2/public/images/crossle-2.webp` ✅ |
| `assets/images/crossle-3.webp` | `../www/dcxstudiosv2/public/images/crossle-3.webp` ✅ |
| `assets/images/tobegif.mp4` | `../www/dcxstudiosv2/public/videos/tobegif.mp4` ✅ |
| `assets/images/icon.webp` | `../www/dcxstudiosv2/public/images/icon.webp` ✅ |
| `assets/images/hero_bg.jpg` | Not needed — dcxstudiosv2 uses CSS gradients instead ✅ |
| `assets/images/developer.jpeg` | Intentionally not ported — About section redesigned ✅ |
| `games/game-1.html` | Was a placeholder — not needed ✅ |
| `test.html` | Scratch file — not needed ✅ |
| Hero, Gallery, About, Contact sections | All rebuilt as Astro components in dcxstudiosv2 ✅ |

**Delete command (run manually, confirm first):**
```bash
rm -rf ../www/dcxstudios
```

**Pre-delete checklist:**
- [ ] Confirm `../www/dcxstudiosv2` builds without errors (`npm run build`)
- [ ] Confirm `dcxstudiosv2` is deployed and serving on the correct domain
- [ ] Delete `../www/dcxstudios`
- [ ] Remove from nginx config if it had its own server block

---

## Site 2: `../www/crossle-ui-nux` — Blocked ❌

Cannot delete yet. Its content and assets need to be preserved in the new Astro project before it's gone.

**Note:** The static `../www/crossle` site is NOT being modified. The plan is to port crossle-ui-nux into a new Astro project at `../www/crossle-landing`, then delete crossle-ui-nux once that Astro build is verified.

**Dependency:** Complete `implementations/crossle-landing-page/` first — specifically: Astro project scaffolded, all assets copied in, build passes, preview verified.

**Delete command (run ONLY after crossle-landing builds and previews correctly):**
```bash
rm -rf ../www/crossle-ui-nux
```

**Pre-delete checklist:**
- [ ] `crossle-landing-page` implementation is marked ✅ done
- [ ] `../www/crossle-landing` builds without errors (`npm run build`)
- [ ] All assets from `crossle-ui-nux/public/` confirmed in `crossle-landing/public/`
- [ ] `crossle-gameplay-trailer.mp4` confirmed in `crossle-landing/public/videos/`
- [ ] Delete `../www/crossle-ui-nux`
