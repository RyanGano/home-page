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

The project has no Playwright dep — install it in the scratchpad (`npm init -y && npm i playwright`)
and run a `.mjs` script against `http://localhost:4199`. Its bundled Chromium may not be downloaded;
`chromium.launch({ channel: "msedge" })` uses the installed Edge instead.

## Main site (`/`)

Useful selectors:

- `.v2-card` — project cards (wait on this after `goto`); `.v2-group-title` — group headings
- `.v2-search` — "Find a project…" box (matches name and tagline)
- `.v2-chips .v2-chip` — project type chips; `.v2-skills .v2-chip` — skill chips in About
- `.v2-pin` — pin button (`aria-pressed`); pins persist in `localStorage`

Flows worth driving:

- Home load → 11 cards in three groups, no broken images, no horizontal overflow at 375px
- Search narrows the cards; a type chip shows one group; a skill chip filters and "Show all" resets
- Pinning adds a "Pinned" group at the top and survives a reload
- "Open <name>" link has the project's live URL; "Details" goes to `/projects/:slug`
- Missing slug and unknown paths redirect to `/`; `/v2/...` redirects to the same path without `/v2`
- `/#about` scrolls to the About section; `/resume` renders with both download buttons

## Classic site (`/v1`)

Kept for comparison only. Check that `/v1` renders `.project-grid .project-card`, that its links stay
under `/v1` (`/v1/projects/:slug`, `/v1/resume`), and that `<html>` loses the `v2` class there.

## Gotchas

- Card images are `loading="lazy"`; force them eager before a full-page screenshot.
- On the classic site, `Link` navigation drops `?tech=on` from the URL; state persists in memory.
