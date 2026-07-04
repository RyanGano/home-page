---
name: add-portfolio-project
description: Add a new project card to the home-page portfolio site (src/data/projects.ts). Use when the user asks to "add a project to the site", "add my new app to the portfolio", "showcase X on the home page", or similar. Gathers the project's description, tech stack, tags, and links, checks GitHub visibility, and wires up the new entry.
---

# Add a portfolio project

This site (`home-page`) showcases Ryan's projects as filterable cards on `/` that link to a
detail page at `/projects/:slug`. All content lives in one file:
`src/data/projects.ts`, typed by the `Project` interface in that same file.

## Procedure

### 1. Identify the project's source folder

The project being added usually lives as a sibling folder in the workspace (e.g.
`c:/Code/<project-name>`), alongside `home-page`. Read that folder to gather content —
but **never write to it**. All edits for this task go in `home-page` only.

Gather:
- `README.md` — usually has a description and may list the tech stack.
- `package.json` (and `*.csproj` / backend project files if present) — dependencies and
  frameworks in use.
- `CLAUDE.md` if present — often has a maintained description and architecture notes.
- Top-level source layout — skim it to sanity-check the README's claims and spot anything
  notable worth tagging (auth method, database, notable APIs, testing setup).
- Once you think you've gathered enough context about the app, ask targeted questions to fill in any gaps and validate assumptions.

If you're missing enough context to write an accurate paragraph, ask the user rather than
guessing.

### 2. Check GitHub visibility before linking a repo

Never assume a repo is public. Confirm with:

```
gh repo view <owner>/<repo-name> --json visibility,url
```

- `visibility: "PUBLIC"` → include a `repo` link in the project's `links`.
- `visibility: "PRIVATE"` (or `gh` errors / no remote) → omit `repo` entirely. Only
  include a `live` link if one exists.

### 3. Get the live URL — don't guess it

If the project has a live/deployed site, ask the user for the URL if it isn't already
known (custom domains and Azure Static Web Apps hostnames are not guessable). Never
fabricate or infer a URL.

### 4. Write the tags

Tags are freeform strings used for cross-project filtering on the home page — reuse
existing tags from `projects.ts` wherever the technology or idea already appears there
(e.g. `"React"`, `"TypeScript"`, `"Vite"`, `".NET"`, `"Azure Static Web Apps"`) instead of
inventing near-duplicate spellings. Only add a new tag when nothing existing fits.

A good tag set mixes:
- Core languages/frameworks (React, TypeScript, .NET, etc.)
- Cloud/infra pieces (Azure Cosmos DB, Azure Key Vault, Azure Static Web Apps, ...)
- The domain/idea (Fintech, Game Companion, AI/LLM, Travel & Utility, ...)

### 5. Add the entry

Open `src/data/projects.ts` and append a new object to the `projects` array matching the
`Project` shape:

```ts
{
  slug: "kebab-case-name",       // used in the /projects/:slug URL
  name: "Display Name",
  tagline: "One short sentence shown on the card",
  description: "One paragraph for the detail page — what it does and why it exists.",
  tags: [...],                    // for filtering; reuse existing tags where possible
  techStack: [...],               // longer, more specific list shown on the detail page
  links: {
    repo: "https://github.com/RyanGano/...",   // omit if private
    live: "https://...",                        // omit if none
  },
},
```

### 6. Verify

Run these from `home-page`:

```
npx tsc -b
npm run build
```

Both must pass cleanly — the `Project` type will catch shape mistakes at compile time.
Optionally run `npm run dev` and check `/` (card + tags appear, filter works) and
`/projects/<slug>` (detail page renders, links work) in a browser.

### 7. Report back

Summarize what was added: name, tags used (calling out any new tags introduced), and
which links were included or omitted (and why, e.g. "repo omitted — GitHub repo is
private").
