# Guía de contenido

Contrato para escribir artículos. Vale igual para una persona que para un modelo: quien genere un artículo debe recibir esta guía como contexto.

## Flujo

El plan actual es el [plan de contenido 7](plans/content-backlog-7.md), que busca los huecos del temario y amplía las definiciones, comparaciones y curiosidades. Los planes anteriores se conservan en `docs/plans/content-backlog*.md`. Elige del plan actual, marca la casilla al publicar y apunta ahí las ideas nuevas.

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
| `kind` | no | `concepto` (por defecto), `comparacion`, `definicion` o `curiosidad`. Se muestra como etiqueta y permite filtrar |
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

devly cubre lo que se estudia en ingeniería informática, ingeniería de telecomunicación, ingeniería del software, ciencias de la computación, análisis de datos e inteligencia artificial: lo que debería entender quien desarrolla software de extremo a extremo. Quedan fuera las asignaturas de matemáticas y física puras: solo entra la matemática que se usa directamente al programar (lógica, estadística básica, complejidad). A cambio, se incluye lo que va más allá del plan de estudios: principios y patrones de programación, herramientas, frameworks y práctica profesional.

Cada artículo pertenece a una capa:

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

**A fondo**: dentro de ese concepto no se deja nada importante sin explicar. Como referencia, un artículo de concepto o de comparación ronda entre 600 y 900 palabras.

## Tipos de artículo

**Concepto**: explica una idea a fondo. Es el tipo habitual y sigue la estructura de abajo. Título en forma de pregunta: "¿Qué es un proceso?".

**Comparación**: enfrenta dos conceptos que se confunden o entre los que hay que elegir. Título: "Diferencias entre X e Y". Estructura:

1. La diferencia en una o dos frases.
2. Cada lado por separado, con un ejemplo. Si es posible, el mismo caso resuelto de las dos formas.
3. Una tabla que los compare criterio a criterio.
4. Cuándo conviene cada uno.
5. Confusiones frecuentes.
6. Lo esencial.

Una comparación no repite la explicación completa de cada lado: enlaza a los artículos de concepto y los declara en `prerequisites`.

**Definición**: aclara un término concreto que no da para un artículo largo. Puede quedarse en 200 a 400 palabras: qué significa, un ejemplo, con qué no confundirlo y enlaces a los conceptos mayores de los que forma parte.

**Curiosidad**: cuenta una historia o un dato llamativo que ayuda a entender o a recordar un concepto: de dónde viene la palabra "bug", por qué los índices empiezan en cero, qué fue el efecto 2000. Título libre, que despierte la pregunta. Las mismas reglas de fuentes se aplican con más motivo, porque las anécdotas de la informática circulan a menudo deformadas: si una historia no se puede respaldar con una fuente fiable, se cuenta como leyenda o no se cuenta. Enlaza siempre al artículo de concepto relacionado.

## Estructura de un artículo de concepto

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
- Los diagramas (flujos, árboles, estructuras, secuencias, clases, entidad-relación) se escriben en un bloque `mermaid`, que la web dibuja como SVG con los colores del tema. No se dibujan cajas con caracteres como `─ │ ┌ ▶`: la fuente de código no los tiene y se descuadran. El texto anotado que depende de columnas (una línea de cron, las partes de una URL, un árbol de archivos) se queda en un bloque de texto, solo con caracteres ASCII (`|`, `+--`, `->`).
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

Una ruta es un archivo YAML en `src/content/es/paths/` con `title`, `description`, `layer` (la capa bajo la que se agrupa en la página de rutas) y `steps` (slugs en orden). El nivel que muestra su tarjeta se calcula a partir de sus artículos. Cada paso debe poder leerse sabiendo solo los anteriores.

Las rutas se crean a mano: un artículo no entra en ninguna hasta que se añade a `steps`. Antes de crear una ruta, comprueba si el artículo encaja en una que ya existe; una ruta nueva se justifica cuando hay un recorrido distinto, no por cada tanda de artículos. Una ruta puede cruzar capas y un artículo puede estar en varias rutas.

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
