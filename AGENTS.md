# Project instructions

devly is a static site that explains computing, development and technology in Spanish, from the basics to advanced topics. Content is MDX in the repository, generated with AI and published only after human review.

## Commands

Package manager: pnpm. All commands verified locally on 2026-10-13.

| Command | Purpose |
| --- | --- |
| `pnpm dev` | Dev server; drafts are visible |
| `pnpm check` | Full suite: lint, type-check, tests, build. Run before committing |
| `pnpm lint` / `pnpm format` | Biome check / check with fixes |
| `pnpm typecheck` | `astro check` |
| `pnpm test` | Vitest |
| `pnpm build` | Static build plus Pagefind index into `dist/` |
| `pnpm preview` | Serve `dist/`; needed to try search |

## Architecture

See [architecture](<docs/architecture.md>). Keep it current when components or flows change.

## Conventions

- Site copy, content and URLs are in Spanish. Code, identifiers, comments and architecture docs are in English.
- Indent with tabs (Biome default); YAML uses two spaces.
- Files are kebab-case with named exports. Import project files through the `@/` alias.
- Logic that can be tested without rendering goes in `src/lib/` with a Vitest test beside it.
- Styles live in `src/styles/global.css`. Use the existing tokens; follow the design-system rules in the architecture document.
- Articles follow the [content guide](<docs/content-guide.md>). New articles start as `draft: true`; only a human review sets `draft: false`.

## Setup choices

Accepted on 2026-10-13:

- Stack: Astro, MDX content collections, React islands, Pagefind, plain CSS.
- Content workflow: files in the repository, AI-generated drafts, human review before publishing.
- Spanish only for now, with locale-ready content paths.
- `README.md`, `.editorconfig`, `.gitignore`, `docs/content-guide.md`, `.github/workflows/ci.yml`.
- tack sets active in this project: `design`, `react`, `typescript`.
- Collaboration: solo.

Deferred until needed:

- Deployment to Cloudflare Pages (the intended host; nothing is configured).
- GitHub remote, PR template, Dependabot and release automation.
- Accounts, progress tracking, comments and an admin panel.

Not applicable: Docker (static site with no services), `.env.example` (no configuration variables).

## Project capabilities

Reuse existing local skills and agent definitions. Add and index project-local capabilities when authorized work demonstrates a reusable need; follow the lessons skill's project-capabilities policy. Do not create empty catalogs.
