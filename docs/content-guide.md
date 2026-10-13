# Guía de contenido

Contrato para escribir artículos. Vale igual para una persona que para un modelo: quien genere un artículo debe recibir esta guía como contexto.

## Flujo

1. Escribe el artículo en `src/content/es/articles/<slug>.mdx`.
2. Míralo con `pnpm dev` y repasa la lista de comprobación de abajo.
3. Ejecuta `pnpm check` y haz commit. Todo lo que llega a `main` se publica.

## Frontmatter

El esquema está en `src/content.config.ts`; si no se cumple, el build falla.

| Campo | Obligatorio | Valores |
| --- | --- | --- |
| `title` | sí | Título tal como lo buscaría un lector. Las preguntas funcionan bien. |
| `description` | sí | Una frase que resume la idea. Se muestra bajo el título y en buscadores. |
| `level` | sí | `basico`, `intermedio` o `avanzado` |
| `layer` | sí | `ia`, `aplicaciones`, `datos`, `redes`, `programacion`, `sistemas` o `hardware` |
| `prerequisites` | no | Lista de slugs de artículos que conviene leer antes |
| `updated` | sí | Fecha de la última revisión, `AAAA-MM-DD` |
| `sources` | sí | Lista de fuentes, cada una con `title` y `url`. Al menos una |

El nombre del archivo es el slug de la URL: minúsculas, sin tildes, palabras separadas por guiones.

## Capas y niveles

La **capa** dice de qué parte de la informática trata el artículo; el **nivel**, cuánto hay que saber para leerlo. Son independientes: hay artículos básicos sobre hardware y avanzados sobre programación.

- `basico`: no asume conocimientos previos. Cada término técnico se explica la primera vez que aparece.
- `intermedio`: asume los básicos de su capa. Declara en `prerequisites` lo que dé por sabido.
- `avanzado`: asume soltura. Puede entrar en detalles de implementación y casos límite.

## Alcance

devly cubre lo que se estudia en ingeniería informática, ingeniería de telecomunicación, ingeniería del software, ciencias de la computación, análisis de datos e inteligencia artificial: lo que debería entender quien desarrolla software de extremo a extremo. Cada artículo pertenece a una capa:

| Capa | Qué entra |
| --- | --- |
| `ia` | Aprendizaje automático, redes neuronales, modelos de lenguaje |
| `aplicaciones` | Desarrollo web y móvil, API, arquitectura, pruebas, control de versiones, metodologías |
| `datos` | Bases de datos relacionales y NoSQL, SQL, modelado, análisis y visualización, estadística aplicada |
| `redes` | Protocolos, internet, seguridad, señales y transmisión |
| `programacion` | Lenguajes, estructuras de datos, algoritmos, complejidad, paradigmas, teoría de la computación |
| `sistemas` | Sistemas operativos, concurrencia, terminal, virtualización y contenedores |
| `hardware` | Representación de datos, electrónica digital, arquitectura de computadores |

Si un tema toca dos capas, va en la que explica su funcionamiento y se enlaza desde la otra.

## Profundidad y modularidad

devly es un sitio educativo. Un artículo debe dejar al lector entendiendo el concepto, no solo conociendo su definición.

**Modular**: cada artículo trata un solo concepto y se puede leer por separado.

**Enlazado en los dos sentidos**: los enlaces entre artículos se escriben a mano. Al publicar un artículo nuevo, busca en los ya existentes dónde se menciona ese concepto y enlaza la primera mención. Un test comprueba que todo enlace interno apunta a un artículo que existe. Lo que pertenece a otro concepto se enlaza (`/articulos/<slug>/`) en lugar de volver a explicarlo, y lo imprescindible para seguir el texto se declara en `prerequisites`.

**A fondo**: dentro de ese concepto no se deja nada importante sin explicar. Como referencia, un artículo básico ronda entre 600 y 900 palabras.

Estructura habitual, que se adapta al tema:

1. **Definición** en una o dos frases, antes de cualquier encabezado.
2. **Qué problema resuelve** o por qué existe. Sin esto el concepto parece arbitrario.
3. **Cómo funciona**, por partes, cada una con su ejemplo. Los ejemplos van de lo más simple a lo más completo.
4. **Recorrido paso a paso** cuando el orden de ejecución importa (bucles, condicionales).
5. **Errores comunes**: los que comete de verdad quien está aprendiendo, con su causa.
6. **Lo esencial**: tres o cuatro puntos para repasar.

Intercala una o dos preguntas de comprobación justo después de la idea que evalúan, no todas al final.

## Escritura

- Español neutro, tuteando al lector. Frases cortas.
- Explica el porqué además del qué: una regla sin motivo se olvida.
- Cada término técnico se define la primera vez que aparece y se marca en negrita.
- Los términos en inglés de uso habitual se conservan (`array`, `commit`) junto a su traducción la primera vez.
- El código de ejemplo debe poder ejecutarse tal cual. En JavaScript, el resultado se indica en un comentario al final de la línea; en SQL, se describe en el texto que sigue al bloque.
- Los ejemplos de SQL deben funcionar en SQLite, ejecutados en el orden en que aparecen en el artículo.
- Las analogías ayudan si son breves y se abandonan en cuanto dejan de encajar.
- Sin relleno: nada de introducciones sobre la importancia del tema ni frases que no enseñan nada.

## Fuentes

Todo artículo cita al menos una fuente en `sources`; sin ella el build falla. Se muestran al final, en "Fuentes y más información", y sirven para contrastar lo que dice el texto y para seguir leyendo.

- Cita fuentes primarias y estables: especificaciones (RFC, W3C, ECMAScript), documentación oficial (MDN, la del propio lenguaje, sistema o herramienta), organismos de normalización (NIST) y libros de texto o artículos originales de acceso libre.
- No cites Wikipedia ni otras enciclopedias de edición abierta: resumen otras fuentes y su contenido cambia. Si un artículo de Wikipedia te resulta útil, cita las fuentes en las que se apoya.
- Si un sitio no deja comprobar el enlace, no lo cites.
- En español cuando exista una versión fiable; si no, en inglés, indicándolo en el título.
- Abre cada enlace antes de citarlo. No cites de memoria una URL.
- El título dice qué es y de dónde viene: `"MDN: Funciones"`, `"RFC 791: Internet Protocol"`.

```yaml
sources:
  - title: "MDN: Funciones"
    url: https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Functions
```

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

Las rutas se crean a mano: un artículo no entra en ninguna hasta que se añade a `steps`. Una ruta puede cruzar capas y un artículo puede estar en varias rutas.

## Lista de comprobación de la revisión

- [ ] Los hechos son correctos y coinciden con las fuentes citadas.
- [ ] Cada enlace de `sources` abre y trata de lo que dice su título.
- [ ] El código se ha ejecutado y produce lo que el texto dice.
- [ ] El artículo explica por qué existe el concepto, no solo qué es.
- [ ] Trata un solo concepto y enlaza los demás.
- [ ] El nivel declarado coincide con lo que el texto exige saber.
- [ ] No hay términos sin explicar para ese nivel.
- [ ] Los `prerequisites` existen.
- [ ] La respuesta de cada quiz es la correcta.
- [ ] `pnpm check` pasa.
