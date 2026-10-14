# Plan de contenido 8: profundidad y continuidad de las rutas

Continúa el [plan 7](content-backlog-7.md). Punto de partida a 15 de octubre de 2026: 533 artículos y 47 rutas. El objetivo es que el lector pueda recorrer una ruta, entender sus mecanismos y resolver casos sencillos sin saltos de conocimientos. La cantidad y la calidad del contenido tienen prioridad sobre cerrar tareas; no hay una cuota de artículos nuevos ni de artículos modificados.

**Estado: plan preparado; revisión editorial pendiente.** Se han leído la guía y las definiciones de las rutas para organizar el trabajo. Esto no equivale a haber auditado todos sus artículos. Las casillas siguientes representan recorridos por revisar, no defectos confirmados ni una obligación de reescribir lo que ya funciona.

## Contrato de revisión

Leer íntegra la [guía de contenido](../content-guide.md) antes de redactar. Sus reglas de estructura, fuentes, ejemplos, preguntas y modularidad siguen siendo el contrato; este plan organiza su aplicación.

Antes de cada tanda, leer un artículo anterior al plan 7 del mismo tipo como referencia de oficio: `condicionales` para un concepto con recorrido, `memoria-cache-del-procesador` para un mecanismo, `pruebas-unitarias-de-integracion-y-de-extremo-a-extremo` para una comparación, `principio-kiss` para una definición y `por-que-se-llama-bug-a-un-error` para una curiosidad. Comprobar su tipo y adecuación al tema al elegirlo. Reutilizar la organización y los recursos que ayudan a explicar; no copiar una plantilla completa por sistema ni asumir que el artículo de referencia está exento de revisión.

Una ampliación debe enseñar algo concreto: una relación causal, un estado intermedio, un caso límite o una decisión razonada. Dividir un párrafo en varios encabezados, añadir un quiz obvio o alcanzar un número de palabras no basta.

## Cómo ejecutar cada tanda

1. **Leer la ruta entera en orden.** Anotar qué sabe el lector al entrar y qué debería poder explicar o hacer al salir. Revisar también los prerrequisitos enlazados necesarios para seguirla. Si presupone otra ruta, hacer explícito el punto de entrada y comprobarlo contra la guía.
2. **Registrar problemas concretos antes de editar.** Identificar artículo y sección, conocimiento que falta y consecuencia para el lector. Separar errores de contenido, saltos didácticos, ejemplos incompletos, repeticiones y problemas de presentación. No deducir calidad a partir de longitud o número de encabezados.
3. **Resolver primero lo que bloquea la comprensión.** Corregir hechos y ejemplos erróneos, después prerrequisitos y orden, después profundidad y estructura. Se puede trabajar en tandas pequeñas dentro de una ruta, pero no darla por terminada hasta releerla completa.
4. **Elegir la intervención mínima que enseñe bien.** Conservar con justificación, ampliar una sección, reorganizarla, enlazar un concepto existente o crear un artículo cuando exista un hueco independiente. Reutilizar una revisión válida cuando un artículo aparece en varias rutas; comprobar de nuevo su transición en cada recorrido.
5. **Verificar la explicación.** Abrir las fuentes que respaldan los hechos revisados, ejecutar los ejemplos y contrastar cálculos y respuestas. Las comparaciones usan, cuando sea posible, un mismo caso para ambas opciones. Los ejemplos compartidos entre artículos incluyen el contexto necesario para poder leerse por separado.
6. **Leer y probar el resultado en navegador.** Comprobar jerarquía, tablas, código, diagramas y quizzes en escritorio y móvil. Ejecutar `pnpm check`, revisar enlaces y pasos de las rutas. Registrar expresamente cualquier comprobación pendiente; una compilación correcta no sustituye la revisión visual ni editorial.
7. **Publicar y registrar el cierre.** Marcar la casilla solo tras integrar la tanda y cumplir los criterios de cierre. Anotar qué cambió, qué se conservó y por qué, las verificaciones realizadas y los límites pendientes. Si queda un bloqueo didáctico o una comprobación necesaria sin resolver, la ruta sigue pendiente.

## Orden de trabajo

Los nombres entre paréntesis son los archivos de `src/content/es/paths/` sin `.yaml`. Cada casilla incluye todos los pasos de esa ruta, aunque el foco destaque solo algunos. El orden prioriza los fundamentos reutilizados por los demás recorridos; puede cambiar si se encuentra una dependencia real que deba resolverse antes.

### 1. Programación y razonamiento

Resultado esperado: seguir el estado de un programa, explicar sus resultados y elegir una estructura o algoritmo por sus propiedades.

- [ ] Fundamentos de programación (`fundamentos-de-programacion`): valores, tipos, condiciones, iteraciones, funciones y alcance; seguir un ejemplo desde la entrada hasta el resultado y revisar el salto a objetos.
- [ ] JavaScript a fondo (`javascript-a-fondo`): referencias, clausuras, iteradores, errores y asincronía; trazar qué se ejecuta y cuándo, sin confundir concurrencia con paralelismo.
- [ ] Introducción a los algoritmos (`introduccion-a-los-algoritmos`): justificar complejidad con operaciones y tamaños concretos; comprobar precondiciones de búsqueda y ordenación.
- [ ] Estructuras de datos (`estructuras-de-datos`): representar inserción, búsqueda y borrado; explicar costes y límites con el mismo problema cuando se comparen estructuras.
- [ ] Técnicas de diseño de algoritmos (`tecnicas-de-diseno-de-algoritmos`): distinguir estrategia, implementación y condiciones de validez; desarrollar decisiones intermedias.
- [ ] Algoritmos sobre grafos (`algoritmos-sobre-grafos`): seguir estados, costes y restricciones de cada algoritmo con grafos pequeños verificables.
- [ ] Paradigmas y lenguajes (`paradigmas-y-lenguajes`): conectar tipos, organización, traducción y ejecución; revisar el orden entre compilación, autómatas y gramáticas.
- [ ] Teoría de la computación (`teoria-de-la-computacion`): distinguir reconocimiento, computabilidad y coste; comprobar los puentes hacia NP y análisis amortizado.

### 2. Datos y consultas

Resultado esperado: modelar datos, anticipar el resultado de una consulta y explicar qué ocurre con índices, transacciones y recuperación.

- [ ] SQL en la práctica (`sql-en-la-practica`): conjuntos pequeños ejecutables en SQLite, resultados explícitos y estados transaccionales; comprobar si cardinalidad debe explicarse antes de leer planes.
- [ ] Bases de datos (`bases-de-datos`): claves, relaciones, normalización, índices y alternativas; justificar decisiones y límites de consistencia, réplica y copia de seguridad.
- [ ] Estadística y simulación (`estadistica-y-simulacion`): cálculos reproducibles, supuestos y límites de interpretación; distinguir incertidumbre, asociación y causalidad.
- [ ] Análisis de datos (`analisis-de-datos`): seguir datos desde su preparación hasta su interpretación; comprobar prerrequisitos de regresión y evaluación y cuándo aparecen los conceptos estadísticos necesarios.

### 3. De la información al proceso

Resultado esperado: seguir cómo se representa un dato, lo procesa el hardware y lo administra el sistema operativo.

- [ ] Cómo se representa la información (`como-se-representa-la-informacion`): bits, bytes, signo, orden y precisión; revisar la progresión byte/hexadecimal/endianness y mostrar conversiones completas.
- [ ] Las piezas de un ordenador (`piezas-de-un-ordenador`): función, conexiones y límites de cada componente con operaciones concretas.
- [ ] Cómo funciona un ordenador (`como-funciona-un-ordenador`): conectar circuito, instrucciones, memoria, ejecutable y proceso sin exigir explicaciones que aparecen después.
- [ ] Arquitectura de computadores (`arquitectura-de-computadores`): seguir instrucciones y transferencias; distinguir coherencia, dependencias, interrupciones y DMA; comprobar diagramas y cálculos de Amdahl.
- [ ] Sistemas operativos a fondo (`sistemas-operativos-a-fondo`): trazar procesos, memoria, archivos y llamadas al sistema; revisar el lugar del recorrido del ejecutable al proceso.
- [ ] Linux para desarrolladores (`linux-para-desarrolladores`): comandos con contexto, resultados y consecuencias; evitar ejemplos que requieran alterar una máquina real para aprender.
- [ ] Binarios y emulación (`binarios-y-emulacion`): enlazar formato, ABI, carga y ejecución; aclarar qué reproduce cada mecanismo.
- [ ] Concurrencia (`concurrencia`): mostrar intercalados concretos, invariantes y fallos; distinguir exclusión mutua, permisos y ejecución simultánea.

### 4. Redes y señales

Resultado esperado: reconstruir un intercambio de datos y explicar dónde intervienen direccionamiento, transporte y medio físico.

- [ ] Cómo funciona internet (`como-funciona-internet`): seguir una petición con DNS, direcciones y transporte; explicar responsabilidades de las capas.
- [ ] Redes por dentro (`redes-por-dentro`): revisar IP y subredes antes de los pasos que los necesitan; trazar ARP, enrutamiento, TTL, MTU y congestión en un caso coherente.
- [ ] Telecomunicaciones (`telecomunicaciones`): conectar muestreo, aliasing, Fourier, filtrado y modulación con señales y unidades verificables, sin exigir matemática no explicada.
- [ ] Internet de las cosas (`internet-de-las-cosas`): seguir un dato del sensor al consumidor; explicar pérdidas, restricciones y papel de MQTT y las colas.

### 5. Aplicaciones y experiencia de uso

Resultado esperado: seguir una petición y una interacción de usuario, entender cada pieza y justificar las decisiones de interfaz y API.

- [ ] Fundamentos de desarrollo web (`fundamentos-de-desarrollo-web`): relación entre HTML, CSS, cliente, servidor y HTTP con un ejemplo pequeño completo.
- [ ] Cómo funciona una aplicación web (`como-funciona-una-aplicacion-web`): recorrer petición, datos, transacción y caché; evitar saltos entre protocolos y decisiones de estado.
- [ ] Desarrollo front-end (`desarrollo-front-end`): conectar DOM, renderizado, eventos, estado e hidratación; explicar causas observables de accesibilidad y rendimiento.
- [ ] Desarrollo back-end (`desarrollo-back-end`): comprobar conocimientos previos para contratos, evolución y migraciones; desarrollar petición, validación, persistencia y respuesta.
- [ ] Diseño de interfaces (`diseno-de-interfaces`): decisiones apoyadas en necesidades y ejemplos comparables; mostrar cómo se comprueba una mejora con usuarios.
- [ ] Principios de diseño de software (`principios-de-diseno-de-software`): ejemplos antes/después y costes de aplicar cada principio; evitar recetas sin contexto.
- [ ] Arquitectura de software (`arquitectura-de-software`): justificar límites, responsabilidades y comunicación con un problema concreto, incluidas las desventajas.

### 6. Entrega y operación

Resultado esperado: pasar de un requisito a un cambio comprobado y explicar cómo se opera y recupera el sistema cuando falla.

- [ ] Ingeniería del software (`ingenieria-del-software`): conectar requisito, condición de aceptación, diseño y prueba; revisar prerrequisitos de eventos y CQRS.
- [ ] Git en equipo (`git-en-equipo`): reconstruir estados e historia de cambios; explicar conflictos, revisión y consecuencias de merge y rebase.
- [ ] Cómo se entrega el software (`como-se-entrega-el-software`): distinguir pruebas, integración, despliegue y lanzamiento; revisar el orden de empaquetado, configuración y operación.
- [ ] La nube por dentro (`computacion-en-la-nube`): decisiones de capacidad y almacenamiento con límites explícitos; relacionar observabilidad y presupuestos de error.
- [ ] Sistemas distribuidos (`sistemas-distribuidos`): seguir fallos parciales, duplicados y sobrecarga; explicar límites de reintentos, contrapresión, consistencia y consenso.

### 7. Seguridad y responsabilidad

Resultado esperado: explicar qué amenaza o responsabilidad aborda cada medida, cómo actúa y qué no garantiza. Contrastar normativa y recomendaciones vigentes al ejecutar esta fase.

- [ ] Fundamentos de ciberseguridad (`fundamentos-de-ciberseguridad`): amenazas, hash, cifrado y protección de conexiones con fronteras claras entre mecanismos.
- [ ] Protege tus cuentas (`protege-tus-cuentas`): relacionar contraseñas, segundo factor e ingeniería social con situaciones concretas.
- [ ] Autenticación en la web (`autenticacion-en-la-web`): seguir sesiones, tokens y flujos de identidad; diferenciar autenticación y autorización.
- [ ] Seguridad en aplicaciones web (`seguridad-en-aplicaciones-web`): ejemplos didácticos acotados que expliquen causa, defensa y límites; comprobar prerrequisitos de origen, cookies y HTTP.
- [ ] Ética y derecho en la informática (`etica-y-derecho-en-la-informatica`): separar obligación legal, recomendación técnica y decisión ética; indicar jurisdicción y alcance cuando corresponda.
- [ ] Blockchain (`blockchain`): conectar firmas, consenso y registro; justificar garantías y costes sin atribuir propiedades universales a todas las implementaciones.

### 8. Aprendizaje y modelos

Resultado esperado: seguir datos, entrenamiento, evaluación e inferencia, y distinguir resultados observados de garantías.

- [ ] Introducción a la inteligencia artificial (`introduccion-a-la-inteligencia-artificial`): revisar pérdida, optimización, tensores y evaluación en orden comprensible; desarrollar modelos con datos pequeños y límites explícitos.
- [ ] Modelos de IA en producción (`modelos-de-ia-en-produccion`): seguir versiones de datos y modelo, despliegue, medición y deriva; comprobar qué presupone de pruebas y operación.
- [ ] Modelos de lenguaje en la práctica (`modelos-de-lenguaje-en-la-practica`): conectar tokens, atención, inferencia y evaluación; distinguir recuperación, ajuste y cuantización con ejemplos y costes. Verificar las afirmaciones dependientes de herramientas al revisar.

### 9. Historia y recorrido integrador

Resultado esperado: conectar hechos documentados con mecanismos ya aprendidos y completar una lectura de extremo a extremo.

- [ ] Historia de la informática (`historia-de-la-informatica`): contrastar atribuciones, fechas y cadenas causales; separar hechos de leyendas y enlazar el concepto que ayuda a recordar cada historia.
- [ ] De cero a desarrollador full stack (`de-cero-a-full-stack`): releer tras las rutas especializadas; comprobar que el recorrido completo no introduce dependencias ocultas ni repite explicaciones incompatibles.

## Contenido fuera de las rutas

Las rutas organizan la revisión, pero no contienen todo el catálogo. Las definiciones, comparaciones y curiosidades enlazadas también forman parte de la experiencia de aprendizaje.

- [ ] Al revisar cada bloque, inventariar los artículos relacionados que no son pasos de sus rutas. Revisar los necesarios para entender el recorrido y registrar los restantes sin insertarlos artificialmente en `steps`.
- [ ] Tras las nueve fases, cruzar el catálogo completo con el registro de artículos revisados. Asignar cada artículo pendiente al bloque temático adecuado y revisarlo con los mismos criterios según su tipo.
- [ ] Comprobar enlaces entrantes, duplicidades y contradicciones entre artículos, incluidos los conservados sin cambios. No declarar revisado todo el sitio por haber terminado las rutas.

## Cuándo añadir un artículo

Crear contenido nuevo solo cuando la lectura detecte un concepto independiente necesario y el catálogo no lo explique suficientemente. Antes, buscarlo por nombre y sinónimos y leer sus menciones, no solo sus títulos.

La propuesta debe indicar: ruta y transición que lo necesitan; conocimiento que falta; artículos existentes revisados; por qué una ampliación o enlace no bastan; tipo y alcance; lugar en la ruta si corresponde; artículos que lo enlazarán. Investigar y abrir fuentes primarias antes de redactar. Una comparación requiere conceptos de partida comprensibles; una curiosidad debe aportar comprensión o memoria, no rellenar una tanda.

No hay artículos nuevos comprometidos al preparar este plan. Registrar aquí los huecos confirmados durante la ejecución:

| Ruta y transición | Necesidad demostrada | Cobertura existente comprobada | Decisión y justificación | Estado |
| --- | --- | --- | --- | --- |

## Criterios de cierre de una ruta

- [ ] El punto de entrada es claro y cada paso se puede seguir con los conocimientos anteriores y los prerrequisitos explícitos; se han resuelto los saltos detectados.
- [ ] El lector puede explicar el mecanismo y seguir un caso concreto. Las explicaciones muestran estados o decisiones intermedias cuando importan.
- [ ] Cada artículo conserva un alcance modular y la estructura adecuada a su tipo: secciones útiles, comparaciones por criterios, errores con causas y recursos didácticos donde ayudan.
- [ ] Las preguntas de comprobación evalúan comprensión; sus respuestas, los ejemplos y los cálculos se han verificado.
- [ ] Los hechos revisados están respaldados por fuentes abiertas y pertinentes. Los enlaces, metadatos, fechas y pasos de las rutas corresponden al contenido final.
- [ ] Se ha releído la ruta completa después de editar; se han comprobado las otras rutas afectadas por cambios de artículos compartidos.
- [ ] La revisión visual y `pnpm check` han pasado y las modificaciones están integradas. No quedan problemas que impidan el aprendizaje previsto.

Estas casillas se aplican a cada ruta; no basta con completarlas una vez para todo el plan. El registro puede agrupar artículos que comparten una corrección, pero debe permitir saber qué se revisó y qué sigue pendiente.

## Registro de ejecución

Añadir una entrada por tanda con: ruta y artículos leídos; problemas concretos encontrados; cambios y decisiones de conservación; fuentes y ejemplos comprobados; revisión visual y resultado de `pnpm check`; integración y pendientes. Mantener aquí el seguimiento, sin crear un documento por artículo.

Todavía no hay tandas ejecutadas. La primera comienza por **Fundamentos de programación**, con lectura completa antes de decidir qué modificar.
