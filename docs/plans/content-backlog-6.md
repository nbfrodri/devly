# Plan de contenido 6: en profundidad

Complementa al [quinto plan](content-backlog-5.md), que quedó completo el 14 de octubre de 2026. El sitio ya cubre casi todas las asignaturas con artículos de concepto. Este plan, pedido por el usuario el mismo día, busca **profundidad**: artículos avanzados que explican cómo funcionan las cosas por dentro, y una revisión de los artículos existentes.

Mismas reglas que siempre: [guía de contenido](../content-guide.md), fuentes abiertas y comprobadas, ejemplos ejecutados, diagramas con Mermaid, enlaces desde los artículos relacionados y, cuando encaje, ampliar una ruta existente.

## Por dentro

### Lenguajes y ejecución

- [x] Cómo funciona un compilador por dentro: análisis léxico, sintáctico y árbol (compilador e intérprete)
- [x] Recolección de basura: cómo se libera la memoria sola (pila y montículo)
- [x] El bucle de eventos de JavaScript (promesas y async/await)
- [x] Motores de JavaScript: intérprete y compilación JIT (máquina virtual de un lenguaje)
- [x] Del ejecutable al proceso: cómo arranca un programa (qué es un binario)

### Herramientas

- [x] Git por dentro: objetos, árboles y confirmaciones (control de versiones con Git)
- [x] El DOM virtual y la reconciliación (React)
- [x] Cómo funciona la caché HTTP: Cache-Control y ETag (caché)

### Datos y sistemas

- [x] Una base de datos por dentro: páginas, registro de escritura y MVCC (transacciones y ACID)
- [x] Registros distribuidos: cómo funciona Kafka (colas de mensajes)
- [x] El saludo TLS paso a paso (HTTPS y TLS)

### Inteligencia artificial

- [x] La atención de los transformers paso a paso (transformer)
- [x] Sistemas de recomendación (embeddings)

## Revisión de los artículos existentes

- [x] Revisar los artículos con una sola fuente y añadir otra cuando aporte. Hecho en conceptos y comparaciones; las definiciones y curiosidades con una fuente primaria se mantienen.
- [x] Revisar que cada artículo de concepto enlaza a sus prerrequisitos y a los artículos que lo amplían. Resuelto de forma automática: cada artículo muestra sus prerrequisitos y, en «Para seguir», los artículos que lo tienen como prerrequisito.
- [x] Convertir a Mermaid los diagramas que queden en texto
- [x] Actualizar la fecha `updated` de cada artículo que se revise
