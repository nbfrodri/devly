# devly

Sitio de explicaciones de informática, desarrollo y tecnología, de lo más básico a lo más complejo. El contenido se organiza en **capas** (del hardware a las aplicaciones), **artículos** con nivel y **rutas** que ordenan artículos paso a paso.

## Requisitos

- Node.js 22.12 o superior
- pnpm 11

## Uso

```bash
pnpm install
pnpm dev        # servidor de desarrollo (muestra también los borradores)
pnpm check      # lint, tipos, tests y build: lo mismo que ejecuta el CI
pnpm build      # genera dist/ y el índice de búsqueda
pnpm preview    # sirve dist/ en local
```

La búsqueda (Pagefind) solo funciona sobre el sitio construido: usa `pnpm build` y `pnpm preview` para probarla.

## Añadir contenido

1. Crea `src/content/es/articles/<slug>.mdx` siguiendo la [guía de contenido](docs/content-guide.md).
2. Revísalo con `pnpm dev`. Mientras tenga `draft: true` no se publica.
3. Cuando esté revisado, pon `draft: false` y, si procede, añádelo a una ruta en `src/content/es/paths/`.
4. Ejecuta `pnpm check` antes de hacer commit.

## Documentación

- [Arquitectura](docs/architecture.md)
- [Guía de contenido](docs/content-guide.md)
