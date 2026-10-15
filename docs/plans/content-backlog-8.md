# Plan de contenido 8: profundidad y continuidad de las rutas

Continúa el [plan 7](content-backlog-7.md). Punto de partida a 15 de octubre de 2026: 533 artículos y 47 rutas. El objetivo es que el lector pueda recorrer una ruta, entender sus mecanismos y resolver casos sencillos sin saltos de conocimientos. La cantidad y la calidad del contenido tienen prioridad sobre cerrar tareas; no hay una cuota de artículos nuevos ni de artículos modificados.

**Estado: en ejecución.** La primera tanda revisa Fundamentos de programación. Las casillas siguientes representan recorridos por revisar, no defectos confirmados ni una obligación de reescribir lo que ya funciona. Ninguna ruta se considera cerrada todavía.

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

### Comprobación expresa del plan 7

Petición del 15 de octubre de 2026: volver a comprobar el cumplimiento íntegro de la guía en los 72 artículos nuevos del plan 7 y en sus ampliaciones de artículos anteriores. Las pasadas anteriores no se aceptan como prueba de conformidad. Esta comprobación se integra en las rutas y en el inventario del catálogo; no se limita a contar títulos o quizzes.

- [ ] Inventariar los artículos nuevos y ampliados del plan 7 y registrar su revisión individual, también cuando se conserven sin cambios.
- [ ] Contrastar estructura según el tipo, profundidad, ejemplos, errores con causas, preguntas, fuentes y conexiones; corregir los incumplimientos concretos.
- [ ] Releer cada artículo corregido y comprobar sus recursos en navegador antes de cerrar la revisión.

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

### Tanda 1 · Fundamentos, JavaScript y comprobación del plan 7 (en curso)

Lectura completa de los 72 artículos nuevos del plan 7 y primera revisión de Fundamentos de programación y JavaScript a fondo. Esta lectura no equivale al cierre editorial: faltan fuentes por contrastar, ampliaciones de artículos anteriores, relecturas de rutas completas y revisión visual.

**Correcciones realizadas:**

| Artículos | Problema y cambio |
| --- | --- |
| `que-es-una-variable`, `tipos-de-datos`, `arrays`, `funciones`, `logica-booleana`, `bucles` | Precisar reasignación e inmutabilidad, unidades UTF-16, huecos de arrays, funciones sin nombre y cortocircuito. Añadir estados intermedios del acumulador y corregir ejemplos y prerrequisitos. |
| `que-es-un-objeto`, `que-es-una-clase`, `programacion-orientada-a-objetos`, `que-es-un-enum` | Separar objetos de clases, explicar límites de los ejemplos y distinguir congelación, validación y comprobación exhaustiva. Colocar objetos antes de enum en la ruta. |
| `promesas-y-async-await`, `el-bucle-de-eventos` | Corregir quién inicia las operaciones, bloqueo del hilo, microtareas y rechazos. Sustituir ejemplos dependientes de tiempos aproximados por trazas reproducibles. |
| `inmutabilidad`, `que-es-typescript`, `expresiones-regulares`, `manejo-de-errores-y-excepciones`, `funciones-de-orden-superior-y-clausuras`, `programacion-funcional` | Precisar límites de clonación, tipos, expresiones regulares, excepciones y funciones puras; explicar sintaxis asumida y ajustar resúmenes. |
| `motores-de-javascript-y-jit` | Definir motor y JIT, contextualizar los niveles documentados de V8, distinguir la simulación de una medición real y añadir recorrido, pregunta y errores con causas. |
| `acceso-directo-a-memoria-dma`, `automatas-finitos`, `gramaticas-formales`, `analisis-amortizado` | Dividir mecanismos en subsecciones y desarrollar tablas de propiedad del búfer, transiciones, precedencia y créditos amortizados. |
| `circuit-breaker`, `presupuestos-de-error`, `control-de-congestion-tcp` | Preguntar por el motivo de la recuperación controlada, acotar el denominador del presupuesto y calcular el margen de datos en vuelo. |
| `regresion-lineal`, `tensores-en-aprendizaje-automatico`, `transformada-de-fourier`, `filtros-digitales` | Mostrar residuos y transformaciones de forma en tablas, definir amplitud y fase y corregir un encabezado que prometía un ejemplo distinto. |
| `que-es-un-origen-web`, `cardinalidad-de-una-consulta` | Acotar la definición del origen a HTTP/HTTPS y resolver el orden entre cardinalidad y planes de ejecución en la ruta SQL. |
| `codd-y-el-modelo-relacional`, `de-sequel-a-sql`, `por-que-ethernet-se-llama-asi` | Integrar explicaciones repetidas conservando mecanismos, casos y enlaces útiles. |

Se conservan provisionalmente los demás artículos nuevos del plan 7: su lectura no justifica una reescritura uniforme por longitud o número de encabezados. Falta registrar el contraste individual completo antes de marcar su revisión como terminada.

**Verificación:** 105 bloques JavaScript de fundamentos, JavaScript y ejemplos relacionados ejecutados, con 190 comprobaciones de resultados en comentarios y revisión de las salidas restantes. Además, ejecutados los 39 ejemplos JavaScript/SQL del inventario nuevo del plan 7 y el caso Python/SQLite de aislamiento (salidas `1`, `1`, `2`). Son conjuntos parcialmente solapados; no deben sumarse como ejemplos únicos. Fuentes primarias abiertas para las correcciones: MDN, TypeScript, V8, documentación del kernel, materiales universitarios, SRE, RFC y publicaciones originales. El enlace de Therac-25 necesita resolver su disponibilidad y contrastar una copia accesible.

`pnpm check` ha pasado tras las correcciones de esta tanda: 558 tests, sin errores de Astro y 593 páginas generadas. También se ejecutó la simulación de JIT y se comprobó su salida. Persisten los avisos de build sobre el lenguaje `svg` en Shiki y el tamaño de un fragmento JavaScript. La revisión visual sigue pendiente: la sesión de control de navegador no ofrece superficies disponibles. No se considera sustituida por el build.

**Integración y alcance pendiente:** cambios en la rama `docs/content-plan-8`, todavía sin integrar en `main`. Ninguna ruta cerrada. Continúan pendientes las ampliaciones anteriores del plan 7, el resto de rutas y el cruce final con todo el catálogo. La guía sigue siendo el contrato vigente; no se modifica para acomodar los artículos. El backlog inicial conserva su estado histórico; este registro documenta la revisión actual de DMA y los demás artículos.

Hito guardado en `12b6fd5` (`docs: improve foundations and review plan 7 content`).

### Continuación del 15 de octubre · inventario y validación

Se retoma la rama publicada `docs/content-plan-8` desde `2e22b8e`. Antes de editar se confirman dos problemas en la lectura de referencia: `pruebas-de-software` atribuye a TDD una garantía de cobertura que no ofrece y separa innecesariamente aserciones y dobles; `pruebas-unitarias-de-integracion-y-de-extremo-a-extremo` presenta costes y fiabilidad como propiedades universales y no compara un mismo caso. En `memoria-cache-del-procesador`, el ejemplo accede a igual número de direcciones, pero no a la misma extensión de memoria; el almacenamiento por filas tampoco es universal. Se comprobarán estas afirmaciones con sus fuentes antes de corregirlas.

La revisión continúa por rutas y por el catálogo fuera de ellas. Las casillas permanecen pendientes hasta disponer de la lectura, contraste de fuentes, ejecución y revisión visual exigidas.

**Hallazgos de programación previos a la corrección:** los resúmenes de `arrays` y `funciones` contradicen los matices ya explicados sobre huecos y funciones anónimas. `igualdad-e-identidad` exige punteros sin usarlos: las referencias se introducen en su prerrequisito de inmutabilidad. `complejidad-algoritmica` confunde una cota superior con un crecimiento ajustado y su pregunta predice tiempos sin acotar el modelo. `recursividad` atribuye memoria constante a cualquier versión iterativa y no delimita las entradas de los ejemplos numéricos. `quicksort` cuenta una comparación por elemento aunque ejecuta dos filtros, atribuye memoria logarítmica al peor caso de su implementación y promete que aleatorizar evita cualquier entrada adversa; con todos los valores iguales su partición sigue degenerando. Son problemas de mecanismo, no de extensión.

**Hallazgos de estructuras:** `listas-enlazadas` prometía borrar el último nodo en O(1) con solo guardar la cola, aunque en una lista simple falta localizar su predecesor. `pilas-y-colas` omitía el coste amortizado del array dinámico. `tablas-hash` atribuía a `Map` una implementación que ECMAScript no exige. `grafos` anuncia coste lineal para ejemplos que copian caminos, desplazan arrays y buscan visitados linealmente. Los árboles binarios, montículos y árboles B usaban dibujos de texto donde la guía exige Mermaid; al árbol binario le faltaba desarrollar el borrado. Se conservan los casos correctos y se corrigen esas causas concretas.

En la última parte de estructuras, `tries` atribuye orden alfabético a un recorrido en orden de inserción y omite la longitud de las claves al comparar con hash; `filtros-de-bloom` confunde un array de números con un vector compacto de bits y aplica la tasa de falsos positivos a todas las consultas; `conjuntos-disjuntos-union-find` describe dos optimizaciones pero implementa solo una. Se revisan código, costes y límites de estos tres ejemplos.

**Técnicas y grafos:** las podas de `vuelta-atras` y el cambio de monedas de `algoritmos-voraces` necesitan entradas positivas y denominaciones disponibles; `programacion-dinamica` debe distinguir valor monetario y tamaño de su representación. `algoritmo-de-dijkstra` devuelve un camino aparente para un destino inalcanzable; `algoritmo-a-estrella` omite la consistencia o reapertura necesaria con listas cerradas. `arbol-de-expansion-minima` debe delimitar conectividad, empates y la propiedad del corte; `ordenacion-topologica` no comprueba dependencias desconocidas ni distingue disponibilidad y ejecución paralela segura.

**Lenguajes y teoría:** `compilador-e-interprete` contradice su propia sección de JIT al definir compilación como traducción obligatoria de todo el programa antes de ejecutarlo; presenta velocidad, portabilidad y detección de errores como garantías. El compilador de juguete acepta un prefijo válido y descarta tokens sobrantes, y sus bloques dependen de los anteriores sin avisarlo. `programacion-logica` afirma que hacen falta cuatro funciones imperativas para cuatro consultas y omite el control que el autor ejerce mediante el orden de reglas. `tipado-estatico-y-dinamico` exagera la detección y seguridad de refactorizaciones; `maquina-de-turing` debe hacer explícita la memoria no acotada del modelo. `p-np-y-np-completos` y `analisis-amortizado` se conservan: distinguen certificado, decisión y optimización, y justifican los costes con un modelo y cálculos reproducibles.

**SQL, lectura previa a la corrección:** `que-es-una-clave-primaria` utiliza `SERIAL` sin indicar PostgreSQL y confunde NULL con texto vacío; varios artículos dan consultas sin crear las tablas necesarias. `indices-de-bases-de-datos` convierte los costes en tiempos garantizados, trata todos los índices como árboles B y omite selectividad, tamaño del resultado y recorridos alternativos. `que-es-un-indice-compuesto` niega usos por columnas posteriores, aunque su fuente documenta skip scan. `tipos-de-join` convierte la ubicación de condiciones en una regla absoluta. `transacciones-y-acid` permite confirmar una transferencia hacia una cuenta inexistente, presenta serialización como cualquier aislamiento y confunde el fallo de una sentencia con el aborto de la transacción. `una-base-de-datos-por-dentro` promete restauración con solo WAL, ausencia universal de bloqueos y una instantánea por transacción sin delimitar el nivel. `funciones-de-ventana-en-sql` llama tres meses a tres filas sin explicar huecos, empates ni el marco predeterminado. Se conservan las explicaciones de `null-en-sql`, `cardinalidad-de-una-consulta`, `planes-de-ejecucion-sql` y `niveles-de-aislamiento`, con ejemplos y límites bien delimitados.

**Definiciones conectadas a programación:** `que-es-un-operador` contradice el cortocircuito explicado en fundamentos al prometer booleanos para `&&` y `||`; `que-es-un-literal` y `que-es-la-sintaxis` tienen variables sin declarar. Esta última niega la comprobación semántica estática y presenta flechas como sustitutos de funciones normales. `que-es-un-lenguaje-de-programacion` mezcla lenguaje e implementación, y la definición de máquina virtual promete portabilidad sin condiciones y termina negando su soporte de varios lenguajes. `que-es-un-puntero` promete seguridad para toda referencia y una terminación definida al desreferenciar NULL en C. `que-es-una-clase` y `que-es-una-interfaz` conservan ejemplos útiles, pero la sustitución de implementaciones requiere además un contrato de comportamiento.

**Comparaciones conectadas:** se propagan los límites de memoria y coste a `array-y-lista-enlazada`, `tabla-hash-y-arbol-de-busqueda`, `busqueda-en-anchura-y-en-profundidad` y `recursion-e-iteracion`. La primera situaba el quinto elemento en el desplazamiento cinco; la tercera usaba un dibujo de texto y prometía menos memoria para cualquier DFS. `paso-por-valor-y-por-referencia` confundía copia de valor con copia profunda y coste acotado con coste nulo. `compilar-y-transpilar` proponía sustituir `?.` por `&&`, lo que cambia el resultado con valores falsy. La lectura de `javascript-y-typescript` detecta promesas de compatibilidad y detección universales; la de `clase-abstracta-e-interfaz`, una comparación sin acotar lenguaje ni completar ambas variantes del mismo ejemplo.

**Integración solicitada durante la revisión:** la PR #1, con los cinco commits previos hasta `2e22b8e`, se integra en `main` como `5f436f3`. Sus comprobaciones de CI y Cloudflare estaban correctas. La continuación local pasa a `docs/content-plan-8-review`; los hallazgos y correcciones de esta continuación no estaban incluidos en aquella PR. `main` queda protegida con PR, CI y conversaciones resueltas, sin requerir un segundo revisor en este proyecto individual.

### Tanda 2 · Ampliaciones anteriores del plan 7 (en curso)

**Prerrequisitos de datos:** la lectura de `embeddings` detecta equivalencias indebidas entre proximidad numérica y significado, umbrales universales e índices necesariamente aproximados; `que-es-el-aprendizaje-automatico` presenta millones de parámetros y ajuste iterativo como requisitos de cualquier modelo. `escalado-vertical-y-horizontal` promete crecimiento y tolerancia a fallos sin condiciones y convierte stateless en requisito universal. Sus antecedentes `cliente-servidor`, `stateful-y-stateless` y `que-es-http` necesitan distinguir instancia, sesión y protocolo: externalizar sesiones no elimina el estado de la aplicación, y una petición independiente no implica una respuesta determinista ni una recuperación invisible. Se corrigen estos puentes antes de cerrar la ruta de datos.

**Datos, hallazgos de esta continuación:** `que-es-una-base-de-datos` promete que cualquier columna numérica rechaza texto, aunque SQLite admite tipado flexible, y describe todos los índices como ordenados. `modelo-entidad-relacion` presupone normalización antes de introducir el modelo, omite la tabla de productos y dibuja una relación de un producto por pedido pese a explicar muchos a muchos. `que-es-una-clave-foranea` restringe indebidamente la referencia a una columna de otra tabla y omite nulabilidad y activación en SQLite. `delete-truncate-y-drop` compara tablas distintas y no prepara datos ejecutables. `calidad-de-datos` cuenta NULL como correo único, equipara una regla de edad con exactitud y no distingue persona duplicada de correo repetido. `copias-de-seguridad` convierte periodicidad, 3-2-1 e inmutabilidad en garantías absolutas. Se conservan sus casos útiles, acotando lo que demuestran.

- `hilos-y-concurrencia`: leído completo y contrastado con OSTEP y MDN. Corregida la tabla de procesos e hilos: pila por hilo, espacio de direcciones compartido y posibilidad de memoria compartida entre procesos. Matizadas las variables locales, la sincronización y el hilo principal del navegador. Añadidos errores comunes con causas. Se conserva el caso numérico de uno y dos núcleos y su comparación, que ya permiten seguir la diferencia entre concurrencia y paralelismo.
- `estrategias-de-despliegue`: leído completo y abiertas sus cuatro fuentes. Corregidas las garantías excesivas sobre reversión inmediata, ausencia de cortes y reversibilidad después de eliminar columnas. Acotado el reparto por identificadores y añadidas confusiones frecuentes, una comparación del mismo carrito con las tres estrategias y una pregunta sobre los efectos que no deshace retirar tráfico. El usuario autorizó expresamente continuar después del bloqueo del hook; corrección aplicada mediante un parche revisable.
- `pruebas-de-software`: leído completo. Pendiente corregir la afirmación de que TDD garantiza que nada queda sin probar, contextualizar la pirámide y su pregunta, y reunir las explicaciones de dobles de prueba y aserciones para evitar secciones desconectadas y repetidas. La comparación del mismo inventario con stub, fake y mock aporta un caso útil que debe conservarse.

Verificados el ejemplo asíncrono de `hilos-y-concurrencia` y los dos ejemplos de `estrategias-de-despliegue` (cinco salidas esperadas). Tras la corrección autorizada, `pnpm check` vuelve a pasar con 558 tests y sin errores de Astro. Pendientes la revisión visual, las correcciones señaladas y el resto de ampliaciones. Ninguna casilla de ruta cambia de estado.

### Hito de continuación · programación, SQL y bases de datos

Esta continuación lee íntegramente 119 artículos, incluidos todos los pasos de las ocho rutas de programación y de las dos rutas de SQL y bases de datos, sus comparaciones y definiciones relacionadas, y los prerrequisitos de embeddings y escalado. La lectura no equivale al cierre de esas rutas: falta completar la inspección visual y la relectura final del conjunto, además de integrar los cambios. Fundamentos de programación y JavaScript a fondo sí se han releído completos en su orden final; en la segunda relectura se corrigen las promesas excesivas de TypeScript sobre valores ausentes y refactorizaciones.

**Correcciones aplicadas a los hallazgos anteriores:**

- Programación: límites y costes de estructuras y algoritmos, precondiciones de los ejemplos, destinos inalcanzables en Dijkstra, condiciones de A*, rechazo de tokens sobrantes en el compilador didáctico y diferencias entre lenguaje e implementación. Los dibujos de árboles y grafos pasan a Mermaid. Las comparaciones usan los mismos datos y distinguen propiedades del modelo y de la implementación.
- SQL: conjuntos de datos completos y ejecutables en SQLite; claves candidatas, NULL, índices compuestos, cardinalidad y selección de planes; transferencia que comprueba ambas cuentas antes de confirmar; aislamiento, WAL y recuperación sin garantías universales. Se acotan empates, huecos y marcos de las funciones de ventana.
- Modelado y motores: se completa la relación pedido–línea–producto y sus restricciones; se distingue la clave primaria de otras claves candidatas al normalizar. Las vistas normales y las instantáneas materializadas se comparan mediante resultados distintos después de una inserción. Las capacidades específicas de PostgreSQL se explican como tales; no se presentan como SQL ejecutable en SQLite.
- Alternativas y distribución: ejemplos completos de MongoDB, Redis y Neo4j; validación, transacciones, persistencia y memoria según cada motor. Se corrigen la linealizabilidad de CAP, las condiciones de los acuses síncronos y el coste y la aproximación de las búsquedas vectoriales. Copias de seguridad, calidad, formatos y caché distinguen mecanismo y garantía. El artículo de copias no necesita conocer por dentro un HDD o SSD, por lo que se elimina ese prerrequisito.
- Puentes de entrada: embeddings distingue geometría y pertinencia; aprendizaje automático desarrolla el cálculo del peso sin convertir modelos grandes en requisito universal. Escalado compara el mismo servicio y explica sus límites; cliente-servidor, HTTP y stateful/stateless separan el protocolo, las instancias y las sesiones de la aplicación.
- Referencias de oficio: se resuelven los pendientes de `pruebas-de-software` y su comparación; TDD no garantiza cobertura completa y los costes de cada nivel de prueba dependen del caso. `memoria-cache-del-procesador` delimita las direcciones y la extensión de memoria que recorre su ejemplo.

**Conservación razonada:** se mantienen las trazas de variables, tipos, condiciones, lógica, bucles, ámbito, objetos y enum; permiten seguir valores y distinguir sus límites. Los ejemplos de funciones de orden superior, clausuras, iteradores, generadores, inmutabilidad, errores, promesas y bucle de eventos ya muestran el mecanismo y sus resultados. Expresiones regulares y JIT explicitan los límites de sus ejemplos. Búsqueda binaria y ordenaciones delimitan el recorrido; autómatas, gramáticas, P/NP y análisis amortizado separan los modelos y justifican transiciones y costes. NULL, clave candidata, cardinalidad, planes e aislamiento conservan sus casos y matices. La clase, KISS y la historia del bug se mantienen por su alcance modular y sus ejemplos o hechos documentados. Esta decisión se refiere a los textos leídos, no a una conformidad automática de los artículos relacionados.

**Verificación ejecutada:**

- Ejemplos JavaScript ejecutados con Node.js, incluidos los límites de entrada y el rechazo de programas incompletos del compilador didáctico. Los ejemplos que usan `node:sqlite` se ejecutan con su entorno, y los de MongoDB se comprueban en su motor. Los cálculos añadidos de embeddings, ajuste lineal y contador con estado producen las salidas indicadas.
- Los 40 bloques SQL de los artículos leídos se ejecutan en SQLite, en orden por artículo y en bases de datos nuevas. Los 14 bloques TypeScript se comprueban con modo estricto: los diagnósticos de los ejemplos deliberadamente incorrectos coinciden con lo explicado; el JavaScript emitido se ejecuta sin errores inesperados.
- Los comandos se prueban en Redis 8, MongoDB 8 y Neo4j 5.26.32 en entornos temporales aislados. El agregado de MongoDB devuelve el total 70 de Ana; Neo4j devuelve Pablo y Sara a dos saltos y Luis, Marta, Pablo y Sara entre uno y cuatro. Los contenedores de prueba se retiran al terminar.
- Se abren las fuentes primarias pertinentes de MDN, TypeScript, SQLite, PostgreSQL, MongoDB, Redis, Neo4j, RFC, materiales universitarios y publicaciones originales. La exploración de disponibilidad del catálogo encuentra 1033 respuestas correctas y 22 incidencias entre 1055 URLs; esto no sustituye el contraste editorial. Se reemplaza la fuente inaccesible de copias de seguridad y se abre el trabajo de Codd por una vía accesible. Las incidencias restantes siguen pendientes de sus respectivas tandas.
- La automatización en Chromium comprueba 119 artículos a 1280 y 390 píxeles: 238 combinaciones de artículo y anchura correctas, sin desbordamiento horizontal de la página, con Mermaid renderizado y respuestas correctas e incorrectas de los quizzes verificadas. La pasada final incorpora los seis prerrequisitos y repite TypeScript y copias después de sus últimos ajustes. Las capturas permiten revisar tablas y bloques desplazables. La inspección visual realizada incluye arrays y el modelo entidad-relación; **la inspección visual de todo el conjunto sigue pendiente**.
- `pnpm check` pasa sobre el contenido final del hito con 558 tests, sin errores de Astro, 593 páginas y 533 artículos indexados. Se conservan los avisos conocidos de Shiki para `svg` y tamaño de un fragmento JavaScript. Se corrige además la resolución de `cookie` durante el prerender de Astro con pnpm, documentando el motivo en arquitectura.

**Alcance pendiente:** las demás rutas y el catálogo fuera de ellas, el registro íntegro de los 72 artículos nuevos y 79 ampliados del plan 7, los ejemplos de otros lenguajes aún no ejecutados, las relecturas y la inspección visual pendientes. Ninguna casilla se marca por haber superado solo la compilación o las pruebas automáticas. La rama de trabajo es `docs/content-plan-8-review`.

**Configuración solicitada de GitHub:** verificado el borrado automático de la rama remota al fusionar su PR. `main` exige previamente el CI `check`; el borrado no espera al despliegue posterior. La rama de la PR #1 ya fusionada se elimina después de comprobar que sus commits están integrados. README recoge la protección y este comportamiento.

#### Inventario de lectura de esta continuación

Cada identificador siguiente corresponde a una lectura íntegra en esta continuación. Las decisiones de corrección y conservación están descritas arriba; no representan rutas cerradas. Los artículos compartidos aparecen una sola vez.

- **Fundamentos de programación:** `que-es-una-variable`, `tipos-de-datos`, `condicionales`, `logica-booleana`, `bucles`, `funciones`, `ambito-de-una-variable`, `arrays`, `que-es-un-objeto`, `que-es-un-enum`, `programacion-orientada-a-objetos`.

- **JavaScript a fondo:** `programacion-funcional`, `funciones-de-orden-superior-y-clausuras`, `que-es-un-iterador`, `que-es-un-generador`, `inmutabilidad`, `igualdad-e-identidad`, `manejo-de-errores-y-excepciones`, `promesas-y-async-await`, `el-bucle-de-eventos`, `motores-de-javascript-y-jit`, `expresiones-regulares`, `que-es-typescript`.

- **Introducción a los algoritmos:** `complejidad-algoritmica`, `busqueda-binaria`, `recursividad`, `algoritmos-de-ordenacion`, `quicksort`.

- **Estructuras de datos:** `pilas-y-colas`, `listas-enlazadas`, `tablas-hash`, `arboles-binarios-de-busqueda`, `monticulos-y-colas-de-prioridad`, `grafos`, `arboles-equilibrados`, `arboles-b`, `tries`, `filtros-de-bloom`, `conjuntos-disjuntos-union-find`.

- **Técnicas de diseño de algoritmos:** `algoritmos-voraces`, `programacion-dinamica`, `vuelta-atras`.

- **Algoritmos sobre grafos:** `algoritmo-de-dijkstra`, `algoritmo-a-estrella`, `ordenacion-topologica`, `arbol-de-expansion-minima`.

- **Paradigmas y lenguajes:** `programacion-logica`, `tipado-estatico-y-dinamico`, `compilador-e-interprete`, `como-funciona-un-compilador-por-dentro`, `automatas-finitos`, `gramaticas-formales`, `recoleccion-de-basura`.

- **Teoría de la computación:** `maquina-de-turing`, `p-np-y-np-completos`, `analisis-amortizado`.

- **SQL en la práctica:** `que-es-una-base-de-datos`, `que-es-sql`, `null-en-sql`, `que-es-una-clave-primaria`, `que-es-una-clave-candidata`, `tipos-de-join`, `indices-de-bases-de-datos`, `que-es-un-indice-compuesto`, `cardinalidad-de-una-consulta`, `planes-de-ejecucion-sql`, `transacciones-y-acid`, `que-es-postgresql`, `una-base-de-datos-por-dentro`, `niveles-de-aislamiento`, `funciones-de-ventana-en-sql`.

- **Bases de datos:** `modelo-entidad-relacion`, `que-es-una-clave-foranea`, `normalizacion-de-bases-de-datos`, `delete-truncate-y-drop`, `vistas-y-procedimientos-almacenados`, `bases-de-datos-nosql`, `sql-frente-a-nosql`, `formatos-de-datos-json-csv-xml`, `que-es-mongodb`, `que-es-una-cache`, `que-es-redis`, `bases-de-datos-de-grafos`, `bases-de-datos-vectoriales`, `teorema-cap`, `replicacion-y-particionado`, `copias-de-seguridad`, `calidad-de-datos`.

- **Definiciones, comparaciones, referencias y prerrequisitos:** `memoria-cache-del-procesador`, `pruebas-de-software`, `pruebas-unitarias-de-integracion-y-de-extremo-a-extremo`, `principio-kiss`, `por-que-se-llama-bug-a-un-error`, `que-es-un-lenguaje-de-programacion`, `que-es-un-algoritmo`, `que-es-un-literal`, `que-es-un-operador`, `que-es-la-sintaxis`, `que-es-una-clase`, `que-es-una-interfaz`, `que-es-un-puntero`, `que-es-un-callback`, `que-es-una-maquina-virtual-de-un-lenguaje`, `array-y-lista-enlazada`, `tabla-hash-y-arbol-de-busqueda`, `busqueda-en-anchura-y-en-profundidad`, `paso-por-valor-y-por-referencia`, `recursion-e-iteracion`, `compilar-y-transpilar`, `clase-abstracta-e-interfaz`, `herencia-y-composicion`, `javascript-y-typescript`, `programacion-imperativa-y-declarativa`, `embeddings`, `escalado-vertical-y-horizontal`, `que-es-el-aprendizaje-automatico`, `cliente-servidor`, `stateful-y-stateless`, `que-es-http`.

En este inventario hay 13 artículos nuevos y 20 ampliados del plan 7. Los demás siguen pendientes de contraste individual en esta continuación; la lectura histórica de la primera tanda no sustituye ese contraste.

### Tanda 3 · Estadística y simulación (en curso)

Leídos los once pasos de la ruta en orden, con las referencias de concepto y comparación ya revisadas. Antes de editar se detectan estos problemas: `probabilidad-basica` omite independencia y equiprobabilidad en varios ejemplos, y atribuye el funcionamiento de las tablas hash a colisiones improbables; `teorema-de-bayes` reutiliza la probabilidad posterior al repetir una prueba sin exigir independencia condicional. `media-mediana-y-desviacion` confunde desviación típica con distancia media y no delimita la corrección de la varianza muestral. `distribucion-normal` omite las condiciones del límite central y presenta la campana observada como garantía de normalidad. `intervalos-de-confianza` contradice su interpretación frecuentista en la introducción y no explica los supuestos de Student. `contraste-de-hipotesis-y-valor-p` promete reducir ambos errores al aumentar la muestra y garantizar falsos positivos al hacer muchas pruebas. `correlacion-y-causalidad` y `pruebas-a-b` prometen grupos iguales y ausencia de confusión por el mero reparto al azar. `numeros-aleatorios-y-pseudoaleatorios` confunde falta de API de semilla con imposibilidad de reproducir un generador criptográfico. `metodo-de-monte-carlo` muestra resultados aleatorios como salidas garantizadas y no distingue error típico de error observado. `simulacion-de-eventos-discretos` omite desempates, coste del array de eventos y estados intermedios; además, Bayes, contraste, intervalos, A/B y eventos discretos carecen de pregunta de comprensión pese a ser conceptos. Se conservan los casos numéricos útiles y se corregirán estos límites antes de la verificación.

El hito anterior está publicado hasta `d883958` en `docs/content-plan-8-review`, con la PR #2 en borrador. CI y vista previa de Cloudflare pasan. No está fusionado y el backlog sigue abierto.

**Correcciones y contraste de estadística:** los once artículos explicitan ahora los supuestos de sus cálculos: equiprobabilidad e independencia, independencia condicional al repetir una prueba, población y muestra, condiciones del límite central y cobertura frecuentista. Se distinguen pruebas fijas y secuenciales, unidades independientes en A/B, correlación y causalidad, semilla y seguridad criptográfica. Monte Carlo usa ejemplos reproducibles y separa error típico de error observado. La simulación discreta fija el orden de los empates y muestra los diez estados de su cola. Se añaden las preguntas de comprensión ausentes y se sitúan los números pseudoaleatorios antes de los intervalos, que los usan.

Se abren fuentes primarias de NIST, OpenStax, ASA, Microsoft Research, SimPy, MDN, RFC 4086, NumPy y el trabajo original de Monte Carlo en LANL; este último pasa a un enlace permanente accesible. La relectura completa de los once artículos sigue el orden final de la ruta. Se conservan sus casos numéricos y se comprueban los resultados de los 23 bloques JavaScript con Node.js. Chromium comprueba las 22 combinaciones de artículo y anchura (1280 y 390 píxeles), incluidos quizzes, sin errores ni desbordamiento de página. Se inspecciona visualmente la simulación discreta en móvil; las demás capturas siguen pendientes de inspección. `pnpm check` pasa con 558 tests, 593 páginas y 533 artículos indexados; después se aclara una frase sobre los generadores criptográficos, sin cambiar el código del ejemplo. Ninguna ruta se considera cerrada solo con estos resultados.

La comprobación completa se repite tras esa última aclaración y vuelve a pasar. El registro de esta tanda sigue sin dar por terminada la inspección visual del conjunto.

### Tanda 4 · Análisis de datos (en curso)

La lectura inicial detecta un error en la mediana de un número par de valores y falta de separación entre ajustar y aplicar las transformaciones en `preparacion-de-datos`. `clasificacion-y-regresion` y `como-se-evalua-un-modelo-de-clasificacion` atribuyen probabilidades a todos los clasificadores y una mejora garantizada de precisión al subir el umbral; el segundo presenta como realizable precisión 1 con exhaustividad 0 y sobreinterpreta AUC. `almacen-de-datos-y-lago-de-datos` convierte arquitectura en garantía de calidad, coste y conservación de todos los datos; el esquema en estrella contiene SQL sin preparar tablas. `series-temporales` exige dependencia de cualquier serie y no desarrolla un pronóstico verificable. Se conservan la definición de valores atípicos, los cálculos y límites de regresión lineal y logística y la explicación de CDC, sujetos al contraste de fuentes y ejecución correspondientes.

**Artículos leídos en esta tanda:** `visualizacion-de-datos`, `series-temporales`, `preparacion-de-datos`, `valores-atipicos`, `normalizar-y-estandarizar`, `clasificacion-y-regresion`, `regresion-lineal`, `como-se-evalua-un-modelo-de-clasificacion`, `regresion-logistica`, `almacen-de-datos-y-lago-de-datos`, `oltp-y-olap`, `que-es-un-esquema-en-estrella`, `procesos-etl`, `captura-de-cambios-cdc`, `mapreduce-y-spark` y la comparación relacionada `precision-y-exactitud-de-un-modelo`. Se reutilizan las revisiones de los tres pasos estadísticos, el funcionamiento interno de bases de datos y los prerrequisitos ya contrastados. La ruta declara su entrada, adelanta el escalado junto a la preparación, sitúa almacén, OLTP/OLAP y estrella antes de ETL y mantiene CDC después de los mecanismos que utiliza.

**Correcciones:** imputación con mediana par y ausencia total, ajuste y transformación separados, rango de datos nuevos y sensibilidad de ambos escalados a extremos. Las métricas distinguen recuentos de proporciones, denominadores cero, calibración y ordenación; un contraejemplo demuestra que subir el umbral no garantiza mayor precisión, también en la comparación relacionada. Visualización elimina una cifra de prevalencia sin apoyo y acota barras, sectores y dobles ejes. Series temporales recorre una media móvil y una evaluación de pronósticos de un día sin usar datos futuros. Almacén y lago comparan el mismo informe y separan capacidades de calidad y coste; OLTP/OLAP y estrella preparan datos ejecutables en SQLite, con unidades, grano y resultados. ETL delimita su CSV didáctico, la moneda y los reintentos. MapReduce muestra agrupación por clave, sustituye copias repetidas de arrays y explica memoria, disco, reparto y costes de Spark sin prometer aceleración universal.

**Conservación razonada:** `valores-atipicos` distingue señal, error y objetivo del análisis con una media 109 y mediana 12 correctas; no necesita una reescritura. `regresion-lineal` desarrolla pendiente, intercepto, residuos, MSE y referencia, y explicita degeneración y límites causales. `regresion-logistica` muestra probabilidades y una actualización verificable, separando parámetros, umbral y calibración. `captura-de-cambios-cdc` ya distingue instantánea, flujo, duplicación, desorden y borrado; se añade la documentación específica de PostgreSQL como respaldo de recuperación e instantáneas. Los restantes cambios se releen completos tras editarlos, sin considerar esa relectura por artículos un cierre de la ruta entera.

**Verificación:** 17 bloques JavaScript ejecutados con salidas contrastadas y tres bloques SQL ejecutados en bases SQLite nuevas. Abiertas fuentes primarias de scikit-learn, Google, W3C WAI, Financial Times, NIST, Microsoft, AWS, Kimball, Debezium, Apache Spark y el libro de Hyndman y Athanasopoulos. `pnpm check` pasa sobre el contenido final: 558 tests, cero errores de Astro, 593 páginas y 533 artículos indexados. Chromium comprueba 32 combinaciones de los 16 artículos y anchuras 1280/390, con quizzes y diagramas correctos y sin desbordamiento de la página. Se inspeccionan visualmente estrella en escritorio y escalado en móvil; queda la inspección visual completa y la relectura del recorrido final. El inventario de esta continuación alcanza 146 lecturas íntegras, incluidas 17 de artículos nuevos y 29 de ampliaciones del plan 7. No equivale a 146 cierres editoriales.

Estadística está publicada en la rama de revisión como `d40b417`, con CI y vista previa correctos. La PR #2 continúa en borrador y ninguna de estas tandas está fusionada en `main`.
