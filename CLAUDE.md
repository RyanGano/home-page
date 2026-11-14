# home-page

A personal site for Ryan Gano: his apps, games and tabletop tools, each one click from launching,
with a short About section and a résumé. Each project links to its live site and (when public) its
GitHub repo.

## Stack

- React 19 + TypeScript + Vite
- React Router (client-side routing)
- Plain CSS (no UI framework)
- No backend; content is static data in `src/data/projects.ts` and `src/data/resume.ts`

## Two sites in one app

`src/App.tsx` routes between them:

- **The main site** at `/` — `src/v2/` (`V2App`, `V2Home`, `V2ProjectCard`, `V2ProjectDetail`,
  `V2About`). Routes: `/`, `/projects/:slug`, `/resume`. Styles are in `src/v2/v2.css`, scoped by a
  `v2` class on `<html>` plus `v2-` class names. It was previewed under `/v2` before going live, so
  `/v2/*` redirects to the same page at the root. The `v2` names are historical.
- **The classic site** at `/v1` — `src/ClassicApp.tsx`, `src/pages/Home.tsx`,
  `src/pages/ProjectDetail.tsx`, `src/components/`. Kept only for comparison: lazy-loaded and marked
  `noindex`. Don't add features to it.

Shared by both: `src/data/`, `src/pages/Resume.tsx`, `ObfuscatedEmail`, theme variables in
`src/index.css`, and the résumé styles in `src/App.css`.

## Project data

`src/data/projects.ts` is the single source of truth for project content. Add a project by adding
an entry there. Each project's `category`, `year` and `screenshot` fields are used only by the main
site; screenshots are 3:4 portrait JPEGs (900x1200, phone-sized viewport, showing the app in use)
in `public/screenshots/` (the CSP only allows same-origin images).

The résumé exists three times and must be kept in step: `src/data/resume.ts` (web page) and
`public/Ryan_Gano_Resume.docx` / `.pdf` (downloads; the PDF is exported from the DOCX with Word).

## Content rules

- Only link a GitHub repo if the repo is actually public. Check with `gh repo view <owner>/<repo> --json visibility`
  before adding a `repo` link — some of Ryan's repos (e.g. goal-reacher) are private and should only
  show a `live` link.
- Tags are freeform strings shared across projects for filtering — reuse existing tags from
  `projects.ts` where the technology/idea matches, rather than inventing near-duplicates
  (e.g. use "React" everywhere, not "React.js" in one place and "ReactJS" in another).
- Don't guess live URLs or repo names — ask the user if a link isn't already known.

## Adding a new project

Use the `add-portfolio-project` skill (see `.claude/skills/`), which walks through gathering the
project's description, tech stack, tags, and links, then adds it to `src/data/projects.ts`.

## Workflow

- Always commit and push after verifying the work.
- Always lint (`npm run lint`) and format (`npm run format`) files before committing.
  `npm run build` also runs lint and a format check (`format:check`) and fails if
  either finds unformatted files, so unformatted code won't build in CI either.

## Deployment

Hosted on Azure Static Web Apps at ryangano.com. Every push to `main` builds and deploys to
production (`.github/workflows/`), so a push is a release.
