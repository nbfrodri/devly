# Plan 9: aprender desde cero, encontrar y guardar contenido

Estado: en ejecución. Solicitud del 15 de octubre de 2026.

Este plan incorpora las mejoras de navegación, búsqueda y contenido solicitadas durante la revisión del [backlog 8](content-backlog-8.md). No sustituye aquella revisión ni da por terminadas sus rutas. Las casillas se cierran con comprobaciones realizadas, no por haber escrito una propuesta.

## Punto de partida comprobado

- Hay 533 artículos y 47 rutas. `que-es-un-bit` ya enlaza a `que-es-un-byte` en la rama de revisión; falta auditar las menciones en el resto del catálogo.
- Pagefind se genera con el build. `src/components/search.astro` monta dos buscadores: cabecera en escritorio y portada en móvil. El salto de scroll comunicado todavía necesita reproducción y diagnóstico.
- El progreso ya distingue artículos leídos, guardados como pendientes y sin marcar. Se conserva en `localStorage` bajo `progreso`; las rutas completas se calculan con sus artículos. Se reutilizará este modelo sin migrar ni borrar datos.
- Las tarjetas muestran el progreso pero no permiten guardar. Los resultados de Pagefind todavía no muestran esas marcas.
- Un artículo puede pertenecer a varias rutas. La barra lateral las muestra todas, pero el pie solo usa la primera: desde la ruta de representación, el pie de «bit» lleva a «transistor» en lugar de permitir continuar con «byte».
- Existen `cliente-servidor`, `que-es-dns`, `que-es-http`, `que-es-un-cubit` y artículos sobre incidentes como Ariane 5 y Therac-25. Antes de crear contenido se revisarán sus explicaciones y las de los conceptos vecinos para evitar duplicaciones.

## Criterios comunes

Trabajar en la rama de revisión y conservar cambios ajenos. Mantener HTML estático para la navegación, los tokens de diseño y los controles de teclado. No añadir cuentas, servidor ni otra biblioteca de búsqueda.

Antes de escribir artículos, leer íntegra `docs/content-guide.md`. Explicar los términos antes de usarlos, desarrollar un concepto por artículo y abrir cada fuente primaria citada. Cada tanda debe incluir enlaces entrantes desde artículos relacionados, integración en una ruta existente cuando encaje, ejecución de los ejemplos y lectura final. Crear una ruta solo para un recorrido distinto que no cubran las actuales.

«Pendiente» en el buscador significa guardado expresamente para después. Un artículo sin marcar no debe aparecer como guardado. Mantener esta distinción también en filtros y tarjetas.

## 1. Continuidad de las rutas

- [x] Reproducir la pérdida de ruta en el pie de un artículo compartido.
- [x] En `src/pages/articulos/[...id].astro`, mostrar la navegación de cada ruta con su título visible, anterior, siguiente y regreso al terminar. Ajustar `src/styles/global.css` y documentar el comportamiento en `docs/architecture.md`.
- [x] Recorrer «Cómo se representa la información» desde su tarjeta hasta el final, en escritorio y móvil, con JavaScript desactivado. Comprobar también una ruta alternativa y un artículo sin ruta.

Aceptación: desde «bit» se puede escoger «byte» dentro de representación y «transistor» dentro de la ruta del ordenador, sin cambiar de itinerario de manera implícita.

## 2. Corregir el salto del buscador

- [x] Reproducir en `pnpm preview`, con el índice real: búsqueda fría y ya cargada, página desplazada, cabecera y portada móvil, escritura, borrado y cambio de consulta. Registrar posición y foco para localizar la causa.
- [x] Corregir únicamente el mecanismo responsable en `src/components/search.astro`, sus estilos o el script afectado. Evitar restauraciones periódicas del scroll que impidan desplazarse al usuario.
- [x] Comprobar la regresión con pulsaciones reales, teclado, Escape, cierre al pulsar fuera, resultados vacíos y carga diferida.

Aceptación: escribir o actualizar resultados no cambia la posición de la página; abrir un resultado sí navega normalmente. El foco sigue en el campo y el contenido continúa siendo accesible.

Comprobación: con pulsaciones reales, cada letra movía el scroll de escritorio 59 píxeles hacia arriba. Se sustituye el `scroll-padding-top` global por `scroll-margin-top` en `:target`. La portada y un artículo mantienen ahora 1200 píxeles de desplazamiento durante la escritura; la portada móvil mantiene 250. También pasan cambio a una consulta sin resultados, borrado, carga fría, cierre y enlaces a fragmentos. Al retrasar deliberadamente la carga de Pagefind se detectó una pérdida de foco si el usuario pulsaba el campo durante una carga iniciada en reposo; el montaje conserva ahora el foco actual sin desplazar la página. Las transiciones entre documentos se limitan a la preferencia de movimiento normal: la animación predeterminada seguía activa con movimiento reducido y bloqueaba la prueba de navegación sin JavaScript.

## 3. Progreso visible en la búsqueda

- [x] Añadir a cada resultado de artículo las marcas «Leído» con tick verde y «Pendiente» con marcador, reutilizando los iconos y colores semánticos existentes.
- [x] Integrar los resultados dinámicos de Pagefind con `src/scripts/progress.ts` y su evento `devly:progress-refresh`, acotado al buscador para no reconstruir las listas guardadas. Evitar almacenar copias divergentes del progreso.
- [x] Comprobar estados iniciales, cambio de consulta, más resultados y cambios desde otra pestaña. Mantener título y enlaces de subsecciones, sin introducir el estado local en el índice público.

Archivos: `src/components/search.astro`, `src/scripts/progress.ts`, `src/styles/global.css` y, solo si se necesita lógica pura nueva, un módulo con su prueba en `src/lib/`.

Aceptación: un artículo marcado leído aparece con icono verde y texto; uno guardado aparece pendiente; uno sin marcar no muestra ninguna de esas marcas. Funciona en ambos buscadores y temas, sin depender solo del color.

## 4. Guardar desde las tarjetas

- [x] Añadir «Guardar para después» a `src/components/article-card.astro` y `src/components/path-card.astro`, reutilizando los controles de `src/components/progress-buttons.astro` y el modelo existente mediante el nuevo componente `src/components/save-button.astro`.
- [x] Mantener el botón separado del enlace: guardar no abre el artículo ni la ruta. Identificar el contenido al usar teclado o lector de pantalla y reflejar el estado con `aria-pressed`.
- [x] Actualizar también las tarjetas que `/progreso/` construye dinámicamente en `src/pages/progreso/index.astro`; comprobar los consumidores de las tarjetas, incluidos portada, capas, listados y pasos de rutas.
- [x] Verificar guardar, desguardar, recargar y sincronizar entre pestañas, además de filtros, ordenación y rutas completadas. Preservar la semántica actual de leído frente a pendiente y los datos anteriores.

Aceptación: se puede guardar y retirar un artículo o ruta desde su tarjeta sin navegar. El cambio aparece inmediatamente en las marcas y en `/progreso/`, y persiste al recargar.

Verificación de interfaz: `pnpm check` pasa (558 tests, cero errores y avisos de Astro, 593 páginas y 533 artículos indexados). Pruebas de Chromium a 1280 y 390 píxeles, temas claro y oscuro: guardar y retirar desde tarjetas, persistencia, actualización entre pestañas, los tres estados en búsqueda, paginación, filtrado y ordenación, conservación de una ruta completada y controles ocultos sin almacenamiento. Se comprueba que una búsqueda en `/progreso/` conserva los nodos de las tarjetas y que retirar la última tarjeta mantiene el foco en su sección. Inspección visual de las tarjetas y resultados en ambos tamaños y temas. Estas comprobaciones cierran la parte funcional; los apartados editoriales siguen pendientes.

## 5. Auditoría de enlaces entre artículos

- [ ] Generar candidatos a partir de títulos, alias habituales y menciones en el cuerpo de los artículos, excluyendo código, fuentes y enlaces ya presentes. La detección es una ayuda editorial, no una sustitución automática de palabras.
- [ ] Revisar por rutas y enlazar la primera mención explicativa útil de conceptos existentes. Priorizar fundamentos y términos necesarios para entender el párrafo; evitar autoenlaces y repetir el mismo enlace en cada aparición.
- [ ] Contrastar los prerrequisitos y enlaces «Para seguir» con el orden de lectura. Registrar los grupos revisados en el backlog 8 para no duplicar su revisión.
- [ ] Ejecutar `src/lib/internal-links.test.ts` y visitar una muestra de enlaces entre rutas. La prueba de destinos válidos no demuestra por sí sola que todas las menciones necesarias estén enlazadas.

Aceptación: «bit» enlaza «byte» y se revisan sistemáticamente las menciones del catálogo, con una lista explícita de grupos pendientes hasta cerrar la auditoría.

Avance: revisadas las primeras menciones y los enlaces necesarios en las tandas de internet, redes, telecomunicaciones e IoT con sus prerrequisitos, y en los dos grupos de hardware y almacenamiento registrados en el backlog 8: 64 artículos distintos, incluidos los cinco nuevos. La ruta de piezas del ordenador queda revisada en sus catorce pasos. La auditoría sistemática del resto del catálogo sigue pendiente; comprobar destinos válidos no permite cerrarla.

## 6. Fundamentos y redes para principiantes

Leer primero las rutas `como-funciona-internet.yaml`, `redes-por-dentro.yaml` y `telecomunicaciones.yaml`, junto con los artículos introductorios que usan. Identificar palabras que dan por supuestos conocimientos de informática. Reforzar las explicaciones existentes cuando el concepto ya tenga artículo; crear los siguientes solo para cubrir huecos concretos.

- [ ] Qué es un servidor: distinguir el programa que presta un servicio, la máquina que lo ejecuta y el papel de cliente mediante una petición cotidiana. Propuesta nueva: `src/content/es/articles/que-es-un-servidor.mdx`, si `cliente-servidor` no cubre la definición autónoma.
- [ ] Qué es un protocolo de red: reglas compartidas, mensajes, orden y significado, con un intercambio concreto. Propuesta nueva: `src/content/es/articles/que-es-un-protocolo-de-red.mdx`.
- [ ] Redes entre pares: qué aporta cada participante, descubrimiento y límites; comparar un mismo intercambio con cliente-servidor sin confundir descentralización con ausencia de coordinación. Propuesta nueva: `src/content/es/articles/redes-peer-to-peer.mdx`.
- [ ] BitTorrent: seguir una descarga por piezas y su verificación, explicar torrent, magnet, tracker y DHT cuando entren en el recorrido. Usar un ejemplo de distribución autorizada. Propuesta nueva: `src/content/es/articles/como-funciona-bittorrent.mdx`.
- [ ] Topologías de red: distinguir disposición física y lógica; estrella, malla, anillo y bus con diagramas y un fallo concreto que permita comparar sus consecuencias. Propuesta nueva: `src/content/es/articles/topologias-de-red.mdx`.
- [ ] Revisar los artículos introductorios y enlazar estas explicaciones desde sus primeras menciones. Ordenar los pasos básicos antes de enrutamiento y telecomunicaciones avanzadas.

Aceptación: una persona sin experiencia puede seguir el recorrido desde dispositivo y petición hasta servidor, protocolo y red; no necesita conocer antes siglas que el texto no explica.

Avance: los cinco artículos propuestos están redactados y comprobados, con fuentes abiertas, enlaces entrantes y pasos en las rutas existentes. Se han releído y revisado los 32 artículos de internet y redes, ejecutado sus ejemplos y comprobado los recorridos de 14 y 25 pasos en móvil y escritorio. Las casillas de publicación permanecen abiertas hasta integrar la rama. Telecomunicaciones también está revisada y comprobada: trece pasos, con diez artículos corregidos y cuatro conservados al incluir la curiosidad sobre el nombre Wi-Fi. Falta revisar el encaje de las nuevas definiciones en desarrollo web. La tanda registra 563 pruebas correctas, 598 páginas y 538 artículos indexados; el detalle editorial y visual está en el backlog 8.

## 7. Aplicaciones e incidentes cotidianos

Investigar fuentes oficiales antes de fijar el alcance. Separar mecanismos documentados de detalles internos no publicados y acotar las afirmaciones a la fecha de la fuente. No presentar diagramas didácticos como la arquitectura privada exacta de una empresa.

- [ ] Spotify: explicar cómo llega el audio y por qué puede empezar antes de descargar la canción completa; conectar representación del sonido, compresión, búfer y distribución. Propuesta nueva: `src/content/es/articles/como-funciona-spotify.mdx`.
- [ ] WhatsApp: seguir un mensaje entre dos personas, con cifrado de extremo a extremo, entrega y límites claramente separados. Propuesta nueva: `src/content/es/articles/como-funciona-whatsapp.mdx`.
- [ ] Cloudflare: seguir una petición y explicar el papel de DNS, proxy y caché mediante un caso concreto, sin intentar catalogar todos sus productos. Propuesta nueva: `src/content/es/articles/que-hace-cloudflare.mdx`.
- [ ] Elegir al menos un incidente con informe técnico primario y efectos cotidianos documentados. Explicar desencadenante, propagación, recuperación y lección, enlazando conceptos ya enseñados. Propuesta nueva: un artículo en `src/content/es/articles/` cuyo nombre se fijará al elegir y contrastar el caso.
- [ ] Integrar los casos en rutas existentes de internet, aplicaciones web o historia cuando encajen; añadir enlaces desde los conceptos que ilustran.

Aceptación: el lector puede relacionar una acción familiar con sus mecanismos y explicar por qué un fallo concreto afectó a un servicio. Las conclusiones se apoyan en fuentes abiertas y citadas.

## 8. Computación cuántica, según los huecos encontrados

- [ ] Leer `src/content/es/articles/que-es-un-cubit.mdx` y sus referencias desde otros artículos. Comprobar si diferencia estado, medición, probabilidad y bit clásico sin prometer leer todos los resultados simultáneamente.
- [ ] Añadir artículos separados sobre medición, entrelazamiento o puertas cuánticas solo cuando permitan explicar con claridad un mecanismo que el artículo introductorio no debe absorber. Registrar aquí los títulos y rutas definitivos antes de escribirlos.
- [ ] Enlazar los nuevos artículos desde el de cúbit y comprobar sus prerrequisitos matemáticos. Explicar también límites y errores comunes; no convertir ventajas de algoritmos concretos en una aceleración universal.

Aceptación: la ampliación responde a huecos identificados, con ejemplos comprensibles y fuentes primarias, no a una cuota de artículos.

## Hallazgos editoriales antes de la siguiente tanda

La lectura inicial de `cliente-servidor`, `tipos-de-redes`, `que-es-una-direccion-ip`, `modelos-osi-y-tcp-ip` y `que-es-un-cubit` confirma huecos concretos. La ruta de internet introduce subredes antes de explicar servidor y protocolo. «Tipos de redes» presupone OSI y switches pese a declararse básico; presenta la comunicación entre todos los equipos locales como universal. La definición de IP necesita distinguir dirección de interfaz e identidad del dispositivo, contemplar NAT del operador y evitar exigir IP estática a cualquier servidor. OSI presenta la entrega de TCP como garantía sin fallo y niega que un router pueda inspeccionar capas superiores. Cliente-servidor niega cualquier servidor central en P2P, aunque pueden existir servicios de descubrimiento.

El artículo de cúbit necesita delimitar medición en una base, usar el módulo al cuadrado para amplitudes complejas, acotar la correlación del entrelazamiento a un ejemplo concreto y distinguir un vector de estado general de simulaciones clásicas más compactas. Estos hallazgos justifican revisar la introducción y evaluar artículos separados sobre puertas e interferencia y sobre entrelazamiento. Todavía no se han corregido ni contrastado sus fuentes en esta tanda.

## Verificación y entrega

Para cambios de comportamiento, reproducir primero el fallo o la ausencia de la función y conservar la regresión cuando aporte cobertura útil. Ejecutar las pruebas afectadas durante el trabajo y `pnpm check` antes de cada commit. Las comprobaciones del buscador requieren el build y `pnpm preview`; `pnpm dev` no genera Pagefind.

Revisar visualmente escritorio y móvil, temas claro y oscuro, foco de teclado, ausencia de desbordamientos y funcionamiento sin almacenamiento. Para cada tanda editorial, ejecutar los ejemplos y comprobar quizzes, diagramas, fuentes, enlaces y continuidad de las rutas.

Actualizar `docs/architecture.md` cuando cambien flujos. Hacer commits coherentes con Conventional Commits, sin coautorías, revisar lo preparado y subir a la rama autorizada. Revisar CI y despliegue de la revisión actual antes del merge. La PR #2 sigue en borrador mientras el alcance declarado del backlog 8 permanezca incompleto; sus checks correctos no equivalen a revisión editorial terminada.
