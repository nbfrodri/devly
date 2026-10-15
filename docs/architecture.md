# Architecture

devly is a static content site covering what a computing degree teaches (computer and software engineering, telecommunications, computer science, data analysis and AI), from the basics up. Content lives in the repository as files, is validated at build time, and is published as plain HTML to a static host.

## Stack

| Concern | Choice | Notes |
| --- | --- | --- |
| Framework | Astro 7 | Static output, no server runtime |
| Content | MDX and YAML content collections | Schemas in `src/content.config.ts` |
| Interactivity | React 19 islands | Hydrated per component with `client:*` |
| Search | Pagefind | Index built from `dist/` after `astro build`. `search.astro` has a top-bar variant (wide screens, results in a dropdown) and a home-hero variant (phones); the engine loads once per page. Result badges reflect local reading progress and stay out of the public index |
| Styling | One global stylesheet with CSS custom properties | Light and dark themes follow `prefers-color-scheme`; a header button overrides it through `data-theme` on the root element, stored in `localStorage` |
| Icons | Tabler Icons, inlined as SVG at build time | `src/components/icon.astro` lists the ones in use; icons repeated on every card are `<symbol>`s in `icon-sprite.astro`, drawn with `<use>` |
| Diagrams | Mermaid, rendered in the browser | `src/scripts/diagrams.ts` turns ```` ```mermaid ```` blocks into SVG with the theme tokens; loaded only on pages with a diagram |
| Fonts | Fontsource packages, self-hosted | Bricolage Grotesque, IBM Plex Sans, IBM Plex Mono |
| Tooling | pnpm, TypeScript strict, Biome, Vitest, `astro check` | `pnpm check` runs all of them plus the build |
| Hosting | Cloudflare Workers static assets | `wrangler.jsonc`; Cloudflare builds and deploys each push to `main`. Branch previews use `wrangler preview` and the empty `previews` block. Wrangler is pinned locally; no data bindings are configured. |

The Vite `prerender` environment bundles Astro's `cookie` dependency. With pnpm's isolated dependency layout, leaving that import external makes the generated entry resolve it from the project or an ancestor instead of Astro's dependency tree, potentially loading an incompatible version.

## Content model

- **Layer** (`src/lib/layers.ts`): seven fixed areas of computing, ordered from most abstract to closest to the machine. Layers are code, not content, because the home page and the visual system depend on their order and count.
- **Article** (`src/content/es/articles/*.mdx`): one concept. Declares a `layer`, a `level` (`basico`, `intermedio`, `avanzado`), a `kind` (concept, comparison, definition or curiosity; `src/lib/kinds.ts`), optional `prerequisites` and at least one entry in `sources`. Each article page lists its prerequisites and, under "Para seguir", up to six articles that declare it as a prerequisite (`src/lib/dependents.ts`), concepts first.
- **Path** (`src/content/es/paths/*.yaml`): an ordered list of article references. An article shows each of its paths in the sidebar and at the bottom, with a visible path title and its own previous/next links. Shared articles do not implicitly switch the reader to the first path. This navigation works without JavaScript and is excluded from the search index.

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
- Motion answers an entrance, an action or a navigation and never loops: the layer stack builds once, article rows and path cards rise in as they enter the viewport (GSAP with ScrollTrigger, `src/scripts/reveal.ts`), pages cross-fade, and controls respond to hover and press. Cards animate as a whole, including their save buttons, during entrance, hover, keyboard focus and press. All of it is skipped under `prefers-reduced-motion`, and content stays visible if the script does not load.
- Every colour is a token with a light and a dark value. Add tokens rather than literal colours. Dark values are declared twice in `global.css` (system preference and explicit choice); change both.

The design source is a Claude Design canvas kept outside the repository; `src/styles/global.css` is the source of truth for implemented values.

## Decisions

- **Files over a CMS**: one person maintains the content. Git gives history and rollback without a database, auth or an admin panel.
- **Sources are required**: the schema rejects an article without them, so the rule cannot be skipped by accident.
- **Astro over Next.js**: the site is read-only content. Astro ships no JavaScript except for interactive islands and needs no server.
- **Reading progress lives in the browser**: visitors mark articles as read or pending, and paths as pending, in `localStorage` (`progreso`). A path counts as complete when all its articles are read, recomputed on every render, so adding a step reopens it. Rules in `src/lib/progress.ts`; `src/scripts/progress.ts` decorates elements that carry `data-progress-*` attributes, and `/progreso/` fills its lists from `<template>` copies of the path cards and from article cards built out of `/progreso/articulos.json`, showing static skeletons until then. `save-button.astro` supplies the pending control both inside content pages and on cards; card buttons are separate from navigation links, have content-specific accessible names and expose their state with `aria-pressed`. Removing a saved card restores focus to a remaining control or its section heading. The home page's random picks skip read articles and complete paths. Layers show the same progress through `data-progress-group`, and the listing filters can select read, pending or untouched items. The paths page can also sort by number of articles (`src/lib/sorting.ts`): the cards move into one flat list, and back to their layer when the sort is cleared. No server, no cookies, no sync between devices; controls stay hidden when storage is unavailable.
- **Dynamic progress stays scoped**: Pagefind result insertion adds article identifiers and badge markup, then emits a bubbling `devly:progress-refresh` from the search box. The progress script decorates only that subtree, preserving the saved lists and their focus. A refresh dispatched on `document` still rebuilds all progress lists. User actions and cross-tab storage changes emit `devly:progress-change` after rendering so active progress filters update immediately. Read and pending remain exclusive article statuses; untouched results display neither badge.
- **Not done yet**: user accounts (and with them, progress synced across devices), comments, a second language. Each would be a new decision, not an extension of something already built.
