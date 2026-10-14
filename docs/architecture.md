# Architecture

devly is a static content site covering what a computing degree teaches (computer and software engineering, telecommunications, computer science, data analysis and AI), from the basics up. Content lives in the repository as files, is validated at build time, and is published as plain HTML to a static host.

## Stack

| Concern | Choice | Notes |
| --- | --- | --- |
| Framework | Astro 7 | Static output, no server runtime |
| Content | MDX and YAML content collections | Schemas in `src/content.config.ts` |
| Interactivity | React 19 islands | Hydrated per component with `client:*` |
| Search | Pagefind | Index built from `dist/` after `astro build` |
| Styling | One global stylesheet with CSS custom properties | Light and dark themes follow `prefers-color-scheme`; a header button overrides it through `data-theme` on the root element, stored in `localStorage` |
| Icons | Tabler Icons, inlined as SVG at build time | `src/components/icon.astro` lists the ones in use |
| Fonts | Fontsource packages, self-hosted | Bricolage Grotesque, IBM Plex Sans, IBM Plex Mono |
| Tooling | pnpm, TypeScript strict, Biome, Vitest, `astro check` | `pnpm check` runs all of them plus the build |
| Hosting | Cloudflare Workers static assets | `wrangler.jsonc`; Cloudflare builds and deploys each push to `main` |

## Content model

- **Layer** (`src/lib/layers.ts`): seven fixed areas of computing, ordered from most abstract to closest to the machine. Layers are code, not content, because the home page and the visual system depend on their order and count.
- **Article** (`src/content/es/articles/*.mdx`): one concept. Declares a `layer`, a `level` (`basico`, `intermedio`, `avanzado`), a `kind` (concept, comparison, definition or curiosity; `src/lib/kinds.ts`), optional `prerequisites` and at least one entry in `sources`.
- **Path** (`src/content/es/paths/*.yaml`): an ordered list of article references.

Layer and level are independent axes: the layer says what an article is about, the level says how much the reader must already know.

There is no draft state: every article in the repository is built. A path that references a missing article fails the build, and so does an article without sources.

## Routes

| URL | Source |
| --- | --- |
| `/` | `src/pages/index.astro` |
| `/capas/`, `/capas/<layer>/` | `src/pages/capas/` |
| `/rutas/`, `/rutas/<path>/` | `src/pages/rutas/` |
| `/articulos/`, `/articulos/<slug>/` | `src/pages/articulos/` |
| `/progreso/` | `src/pages/progreso/index.astro` |

URLs are Spanish and unprefixed. Content sits under `src/content/es/` and Astro i18n is configured with `es` as the only locale, so another language can be added later as a prefixed locale without moving existing URLs.

## Source layout

- `src/lib/`: pure logic (levels, layers, path navigation, content queries). Unit-tested with Vitest.
- `src/components/`: Astro components for static UI, `.tsx` for interactive islands.
- `src/layouts/base-layout.astro`: document shell, header, footer.
- `src/styles/global.css`: design tokens and all component styles.

## Design system

The visual direction is "layers of abstraction". Its rules:

- Layer colour encodes depth: `--layer-1` to `--layer-7` are one cobalt hue ordered by lightness. Do not reorder them or introduce other hues for layers.
- One accent (cobalt), one corner radius (`--radius`), no shadows.
- Motion answers an entrance, an action or a navigation and never loops: the layer stack builds once, article rows and path cards rise in as they enter the viewport (GSAP with ScrollTrigger, `src/scripts/reveal.ts`), pages cross-fade, and controls respond to hover and press. All of it is skipped under `prefers-reduced-motion`, and content stays visible if the script does not load.
- Every colour is a token with a light and a dark value. Add tokens rather than literal colours. Dark values are declared twice in `global.css` (system preference and explicit choice); change both.

The design source is a Claude Design canvas kept outside the repository; `src/styles/global.css` is the source of truth for implemented values.

## Decisions

- **Files over a CMS**: one person maintains the content. Git gives history and rollback without a database, auth or an admin panel.
- **Sources are required**: the schema rejects an article without them, so the rule cannot be skipped by accident.
- **Astro over Next.js**: the site is read-only content. Astro ships no JavaScript except for interactive islands and needs no server.
- **Reading progress lives in the browser**: visitors mark articles as read or pending, and paths as pending, in `localStorage` (`progreso`). A path counts as complete when all its articles are read, recomputed on every render, so adding a step reopens it. Rules in `src/lib/progress.ts`; `src/scripts/progress.ts` decorates elements that carry `data-progress-*` attributes, and `/progreso/` fills its lists from `<template>` copies of every card. No server, no cookies, no sync between devices; controls stay hidden when storage is unavailable.
- **Not done yet**: user accounts (and with them, progress synced across devices), comments, a second language. Each would be a new decision, not an extension of something already built.
