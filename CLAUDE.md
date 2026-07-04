# home-page

A personal portfolio site for Ryan Gano: a directory of his software projects, filterable by
technology/idea tags, linking out to each project's live demo and (when public) its GitHub repo.

## Stack

- React 19 + TypeScript + Vite
- React Router (client-side routing: `/` directory, `/projects/:slug` detail pages)
- Plain CSS (no UI framework) — theme variables in `src/index.css`, component styles in `src/App.css`
- No backend; content is static data in `src/data/projects.ts`

## Structure

- `src/data/projects.ts` — the single source of truth for project content: name, tagline,
  description, tags, tech stack, and links (`repo` / `live`). Add a project by adding an entry here.
- `src/components/` — `Header`, `TagFilter`, `ProjectCard`
- `src/pages/` — `Home` (tag-filterable grid) and `ProjectDetail` (full write-up per project)

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

## Deployment

Currently developed and run locally only. Intended to be hosted on Azure (Static Web Apps, matching
the pattern used by the other projects in this workspace) — not yet configured.
