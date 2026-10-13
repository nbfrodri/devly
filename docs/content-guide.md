# Guía de contenido

Contrato para escribir y revisar artículos. Vale igual para una persona que para un modelo: quien genere un artículo debe recibir esta guía como contexto.

## Flujo

1. **Generar** el artículo como borrador (`draft: true`) en `src/content/es/articles/<slug>.mdx`.
2. **Revisar** a mano con `pnpm dev` y la lista de comprobación de abajo.
3. **Publicar** cambiando a `draft: false` en un commit propio, para que la revisión quede en el historial.

Un borrador nunca se construye en producción. Una ruta que apunte a un borrador hace fallar el build a propósito.

## Frontmatter

El esquema está en `src/content.config.ts`; si no se cumple, el build falla.

| Campo | Obligatorio | Valores |
| --- | --- | --- |
| `title` | sí | Título tal como lo buscaría un lector. Las preguntas funcionan bien. |
| `description` | sí | Una frase que resume la idea. Se muestra bajo el título y en buscadores. |
| `level` | sí | `basico`, `intermedio` o `avanzado` |
| `layer` | sí | `aplicaciones`, `redes`, `programacion`, `sistemas` o `hardware` |
| `prerequisites` | no | Lista de slugs de artículos que conviene leer antes |
| `updated` | sí | Fecha de la última revisión, `AAAA-MM-DD` |
| `draft` | no | `true` por defecto. Solo pasa a `false` tras la revisión humana |

El nombre del archivo es el slug de la URL: minúsculas, sin tildes, palabras separadas por guiones.

## Capas y niveles

La **capa** dice de qué parte de la informática trata el artículo; el **nivel**, cuánto hay que saber para leerlo. Son independientes: hay artículos básicos sobre hardware y avanzados sobre programación.

- `basico`: no asume conocimientos previos. Cada término técnico se explica la primera vez que aparece.
- `intermedio`: asume los básicos de su capa. Declara en `prerequisites` lo que dé por sabido.
- `avanzado`: asume soltura. Puede entrar en detalles de implementación y casos límite.

## Escritura

- Español neutro, tuteando al lector. Frases cortas.
- Una idea por artículo. Si aparecen dos, son dos artículos enlazados.
- Empieza por la definición en una o dos frases y sigue con un ejemplo concreto.
- Los términos en inglés de uso habitual se conservan (`array`, `commit`) y se explican la primera vez.
- El código de ejemplo debe poder ejecutarse tal cual y ser lo más corto posible.
- Sin relleno: nada de introducciones sobre la importancia del tema ni de conclusiones que repiten lo dicho.

## Componentes interactivos

Los artículos son MDX y pueden usar componentes de `src/components/`.

```mdx
import { Quiz } from "@/components/quiz";

<Quiz
	client:visible
	question="¿Cuánto vale edad?"
	options={["30", "31", "61"]}
	answer={1}
/>
```

`answer` es el índice (desde 0) de la opción correcta. Usa `client:visible` para que el JavaScript solo se cargue cuando el componente entra en pantalla.

## Rutas

Una ruta es un archivo YAML en `src/content/es/paths/` con `title`, `description` y `steps` (slugs en orden). Cada paso debe poder leerse sabiendo solo los anteriores.

## Lista de comprobación de la revisión

- [ ] Los hechos son correctos y están comprobados contra una fuente primaria, no contra otro texto generado.
- [ ] El código se ha ejecutado y produce lo que el texto dice.
- [ ] El nivel declarado coincide con lo que el texto exige saber.
- [ ] No hay términos sin explicar para ese nivel.
- [ ] Los `prerequisites` existen y están publicados.
- [ ] La respuesta de cada quiz es la correcta.
- [ ] `pnpm check` pasa.
