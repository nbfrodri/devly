# devly

Sitio educativo que explica lo que se aprende en una ingeniería informática, de telecomunicación o del software, en ciencias de la computación, análisis de datos e inteligencia artificial, de lo más básico a lo más complejo. El contenido se organiza en siete **capas** (del hardware a la inteligencia artificial), **artículos** con nivel y **rutas** que ordenan artículos paso a paso.

## Requisitos

- Node.js 22.12 o superior
- pnpm 11

## Uso

```bash
pnpm install
pnpm dev        # servidor de desarrollo
pnpm check      # lint, tipos, tests y build: lo mismo que ejecuta el CI
pnpm build      # genera dist/ y el índice de búsqueda
pnpm preview    # sirve dist/ en local
```

La búsqueda (Pagefind) solo funciona sobre el sitio construido: usa `pnpm build` y `pnpm preview` para probarla.

## Añadir contenido

1. Crea `src/content/es/articles/<slug>.mdx` siguiendo la [guía de contenido](docs/content-guide.md), con al menos una fuente en `sources`.
2. Míralo con `pnpm dev` y, si procede, añádelo a una ruta en `src/content/es/paths/`.
3. Ejecuta `pnpm check` antes de hacer commit. Lo que llega a `main` se publica.

## Despliegue

Cloudflare construye y publica cada push a `main` con `pnpm build` y `npx wrangler deploy`. `wrangler.jsonc` indica que solo se sirven los archivos estáticos de `dist/`.

## Documentación

- [Arquitectura](docs/architecture.md)
- [Guía de contenido](docs/content-guide.md)
