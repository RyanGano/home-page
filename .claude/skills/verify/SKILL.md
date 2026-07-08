---
name: verify
description: Build, serve, and drive the home-page portfolio site to verify changes at the browser surface.
---

# Verifying home-page changes

Client-only Vite/React SPA — no backend, no login. Verify at the browser surface with Playwright.

## Build & serve

```bash
npm run build                          # also runs lint + format:check
npx vite preview --port 4199 --strictPort   # serves dist/ (run in background)
```

`npm run dev` also works, but `vite preview` verifies the production build.

## Drive

Playwright is available via `npx playwright` (Chromium installed globally). The project itself has no
Playwright dep — install it in the scratchpad (`npm init -y && npm i playwright`) and run a `.mjs`
script with `chromium.launch()` against `http://localhost:4199`.

Useful selectors:

- `.project-grid .project-card` — home grid cards (wait on this after `goto`)
- `.tech-toggle` — header "Technical info" switch (`aria-pressed` reflects state; adds `?tech=on` to URL)
- `.tag-filter-toggle` — "Filter by tag" expander (panel is collapsed by default; tag buttons only
  exist after clicking it)
- `.tag-chip` / `.tag-chip-active` — tag filter buttons
- `.project-card-tags`, `.project-detail-tags`, `.project-detail-technical` — tech-info-gated sections

## Flows worth driving

- Home load → grid renders all projects
- Tech toggle: default off (no tags/filter), on shows them, `/?tech=on` deep link defaults on
- Tag filter: expand panel, click a tag, grid narrows; Clear restores
- Card click → `/projects/:slug` detail page; missing slug redirects to `/`

## Gotchas

- SPA `Link` navigation drops `?tech=on` from the URL; state persists in memory, so that's expected.
- The tag filter renders only 2 buttons until the panel is expanded — not a bug.
