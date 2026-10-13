# Project instructions

devly is a static site that explains computing, development and technology in Spanish, from the basics to advanced topics. Content is MDX in the repository; everything merged to `main` is published.

## Commands

Package manager: pnpm. All commands verified locally on 2026-10-13.

| Command | Purpose |
| --- | --- |
| `pnpm dev` | Dev server |
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
- Articles follow the [content guide](<docs/content-guide.md>). Every article cites at least one source in `sources`; open each URL before citing it.

## Setup choices

Accepted on 2026-10-13:

- Stack: Astro, MDX content collections, React islands, Pagefind, plain CSS.
- Content workflow: files in the repository. The draft flag and review gate were removed on 2026-10-13 at the user's request; required `sources` replaced them.
- Spanish only for now, with locale-ready content paths.
- `README.md`, `.editorconfig`, `.gitignore`, `docs/content-guide.md`, `.github/workflows/ci.yml`.
- tack sets active in this project: `design`, `react`, `typescript`, `devops`, `cloudflare`, `impeccable`, `motion`, `accessibility`.
- Collaboration: solo.
- Hosting: Cloudflare Workers static assets, built from the public GitHub repository `nbfrodri/devly`; configured in `wrangler.jsonc`.

Deferred until needed:

- PR template, Dependabot and release automation.
- Accounts, progress tracking, comments and an admin panel.

Not applicable: Docker (static site with no services), `.env.example` (no configuration variables).

## Project capabilities

Reuse existing local skills and agent definitions. Add and index project-local capabilities when authorized work demonstrates a reusable need; follow the lessons skill's project-capabilities policy. Do not create empty catalogs.
