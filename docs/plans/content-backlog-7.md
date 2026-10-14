# Plan de contenido 7: huecos del temario y más variedad

Continúa el [sexto plan](content-backlog-6.md). Revisión del repositorio a 14 de octubre de 2026: **461 artículos**, de los que 286 son conceptos, 67 definiciones, 69 comparaciones y 39 curiosidades. El objetivo es cubrir los saltos que quedan entre los temas existentes y seguir ampliando los tres formatos que ayudan a aclarar términos, elegir entre alternativas y recordar lo aprendido.

La revisión se basa en los artículos, sus apartados, los seis planes anteriores y las rutas actuales. Un tema mencionado no está necesariamente explicado a fondo, pero tampoco necesita siempre otra página: cada propuesta indica de qué artículo parte o qué límite debe respetar.

El plan reúne **99 tareas**: 32 conceptos, 29 definiciones, 22 comparaciones y 16 curiosidades. Algunas podrán resolverse ampliando artículos existentes.

## Estado de ejecución

La primera implementación se integró en `main` mediante `78f706a`: 72 artículos nuevos y cobertura de las 99 propuestas, incluidas ampliaciones y comparaciones dentro de artículos existentes. El sitio pasó de 461 a 533 artículos. Las casillas registran esa cobertura temática; no constituyen una evaluación de profundidad didáctica.

Se ampliaron las rutas existentes y se añadió «Modelos de IA en producción» porque cubre un recorrido propio de evaluación, despliegue y seguimiento, distinto de la introducción a los modelos. Verificación: `pnpm check`, 558 tests, auditoría de prerrequisitos y enlaces entrantes y 35 ejemplos ejecutados (34 bloques JavaScript/SQL y uno de Python con SQLite).

Pendiente de revisión manual: apariencia y comportamiento en navegador, incluidos los cuatro diagramas Mermaid nuevos. No hay un navegador conectado en esta sesión; se hizo una comprobación HTTP puntual con Astro y se verificó la construcción estática completa. La comprobación adicional del parser de Mermaid en Node no pudo ejecutarse por la dependencia de DOMPurify de un DOM de navegador.

### Segunda pasada editorial

Revisión del 14 de octubre de 2026, preparada en `docs/plan-7-depth-review`. La primera versión presentaba demasiados mecanismos sin desarrollarlos y varias curiosidades apenas contaban la historia. Esta pasada revisa los 72 artículos nuevos y las ampliaciones del plan, sin añadir artículos para aumentar la cobertura.

- Los 31 conceptos nuevos desarrollan un caso adicional: construcción de estados y gramáticas, costes amortizados, ejecución de consultas, anomalías transaccionales, coordinación de recursos, señales, arquitectura y aprendizaje de modelos. Los ejemplos muestran estados intermedios, cálculos o decisiones que antes solo se nombraban.
- Las dos comparaciones nuevas y los apartados comparativos existentes siguen el mismo problema con ambas opciones. Se explican consecuencias observables: cuándo una réplica conserva un borrado, qué antigüedad tiene un resultado materializado o qué ejecución evalúa realmente un conjunto de prueba.
- Las 16 curiosidades amplían el mecanismo o la historia documentada. Los accidentes reconstruyen la cadena de fallos; ELIZA recorre una regla de DOCTOR; SQL incorpora el testimonio de Chamberlin sobre el cambio de nombre; Simpson, cumpleaños y Amdahl desarrollan los cálculos y sus supuestos.
- Se amplían 16 definiciones con ejemplos y distinciones concretas. Se conservan las siete definiciones breves cuyo ejemplo y alcance ya eran suficientes: ámbito, endianness, NULL, generador, iterador, aserción y clave candidata. También se revisan las definiciones integradas en artículos anteriores.
- Se corrigen afirmaciones absolutas sobre aprendizaje en una época, tasa de aprendizaje, reproducibilidad mediante semillas, conservación de originales en ELT, activación de banderas y ejecución de promesas.

La revisión modifica 84 artículos: 65 de los nuevos y 19 existentes. El criterio editorial es que cada ampliación enseñe un mecanismo o permita resolver un caso; la extensión por sí sola no acredita calidad. La guía incorpora expresamente que cantidad y calidad de contenido prevalecen sobre completar tareas.

Verificación de los ejemplos: 39 bloques JavaScript/SQL ejecutados, más el ejemplo Python de aislamiento con SQLite; comprobación independiente de los cálculos numéricos desarrollados y auditoría de prerrequisitos, ciclos y enlaces entrantes de los 72 artículos. La revisión visual continúa pendiente: la herramienta de navegador no ofrece ninguna sesión disponible. Esta pasada no modifica componentes, estilos ni los cuatro diagramas Mermaid.

### Corrección de estructura y recursos didácticos

Revisión del 15 de octubre de 2026 en `docs/plan-7-article-structure`. La segunda pasada amplió las explicaciones, pero no organizó suficientemente los párrafos ni reutilizó todos los recursos habituales del sitio. Se toman como referencia artículos anteriores al plan 7: `condicionales`, `memoria-cache-del-procesador`, `pruebas-unitarias-de-integracion-y-de-extremo-a-extremo` y `por-que-se-llama-bug-a-un-error`.

Los conceptos conservan definición y motivación, agrupan detalles bajo secciones y subsecciones, muestran los recorridos ordenados y reúnen errores concretos con su causa. Las preguntas que estaban respondidas dentro de un párrafo se convierten en componentes `Quiz` con `client:visible`, situados después de la explicación que evalúan. Se emplean tablas para seguir permisos, plazos y valores intermedios, en lugar de esconderlos en frases largas.

Las comparaciones separan elección y confusiones; las curiosidades organizan los hechos y terminan con «Lo esencial». Las definiciones mantienen su alcance breve y distinguen los ejemplos añadidos de la explicación general. Se reutilizan los estilos y componentes existentes, sin añadir niveles de encabezado ajenos al patrón del sitio. La longitud deja de ser el criterio de aceptación: la revisión debe comprobar también la organización y la progresión de cada explicación.

## Huecos detectados

| Área | Cobertura actual | Siguiente hueco |
| --- | --- | --- |
| Teoría y lenguajes | Máquina de Turing, complejidad, expresiones regulares y compiladores | Autómatas, gramáticas, decidibilidad y clases de complejidad |
| Ingeniería del software | Requisitos, arquitectura, pruebas y CI/CD | Pruebas por propiedades, contratos entre servicios, evolución de API y migraciones |
| Datos | SQL, índices, ACID, WAL y MVCC | Planes de consulta, anomalías de aislamiento, evolución de esquemas y captura de cambios |
| Sistemas y operación | Hilos, bloqueos, colas, consenso y observabilidad | Coordinación con semáforos, sobrecarga, reintentos y objetivos de fiabilidad |
| Telecomunicaciones | Muestreo, modulación, medios físicos y protocolos | Análisis de frecuencias, aliasing, filtrado y control de congestión |
| Hardware | Segmentación, caché, multinúcleo y buses | Coherencia entre cachés, ejecución fuera de orden y transferencias por DMA |
| IA y análisis | Entrenamiento, evaluación, RAG y modelos de lenguaje | Modelos clásicos de regresión, ensembles, deriva y operación de modelos |

## Reglas de ejecución

- Seguir la [guía de contenido](../content-guide.md): fuentes primarias abiertas y comprobadas, ejemplos ejecutados y un solo concepto por artículo.
- Antes de escribir, revisar los artículos indicados y buscar el término en el contenido. Si ya está suficientemente explicado, ampliar o enlazar el artículo existente y marcar la tarea con una nota; no crear otro para aumentar la cuenta.
- Las definiciones aclaran un término en 200–400 palabras. Las comparaciones enlazan los conceptos de ambos lados; si falta uno, escribirlo antes o ampliar el artículo de partida.
- Las curiosidades requieren investigación antes de redactarse: contrastar la fuente original y descartar una propuesta si no se puede respaldar. Las fuentes comprobadas constan en cada artículo implementado.
- En cada tanda, enlazar los artículos nuevos desde los existentes que los mencionan y ampliar las rutas que encajen. Marcar cada casilla al publicar, anotando si se ha resuelto mediante una ampliación.

## Conceptos para completar el temario

### Teoría de la computación y lenguajes

- [x] ¿Qué es un autómata finito? (máquina de Turing y expresiones regulares; ejemplo de un reconocedor de cadenas)
- [x] ¿Qué es una gramática formal? (compilador por dentro; distinguir reglas sintácticas de significado)
- [x] ¿Qué es el problema de la parada? (ampliar la introducción de máquina de Turing con el argumento y sus límites)
- [x] ¿Qué son P, NP y los problemas NP-completos? (complejidad algorítmica; verificar frente a resolver, sin identificar NP con «no polinómico»)
- [x] ¿Qué es el análisis amortizado? (arrays y tablas hash; diferenciarlo del caso medio)

### Ingeniería del software y aplicaciones

- [x] ¿Qué son las pruebas basadas en propiedades? (pruebas de software; propiedades, generación y reducción de casos)
- [x] ¿Qué son las pruebas de contrato? (API y microservicios; compatibilidad entre consumidor y proveedor)
- [x] ¿Cómo evoluciona una API sin romper a sus clientes? (REST y requisitos; compatibilidad, retirada y versionado)
- [x] ¿Qué es una migración de base de datos? (SQL y CI/CD; cambios compatibles mediante expandir, migrar y contraer)
- [x] ¿Cómo dibuja una página el navegador? (DOM, CSS y rendimiento web; estilo, layout, pintura y composición)

### Datos y bases de datos

- [x] ¿Cómo se lee un plan de ejecución SQL? (índices y PostgreSQL; usar SQLite para los ejemplos ejecutables)
- [x] ¿Qué son los niveles de aislamiento de una transacción? (ACID y MVCC; reproducir anomalías, distinguiendo lo que permite cada motor)
- [x] ¿Qué es la captura de cambios de datos, CDC? (ETL y WAL; límites frente a consultas periódicas y event sourcing)
- [x] ¿Qué es la regresión lineal? (estadística y aprendizaje automático; ajuste, residuos y límites de interpretación)
- [x] ¿Qué es la regresión logística? (clasificación y evaluación de modelos; probabilidades, umbral y límites)

### Sistemas, concurrencia y fiabilidad

- [x] ¿Qué es un semáforo en programación concurrente? (hilos y bloqueos; contador de permisos y ejemplo productor-consumidor)
- [x] ¿Qué es la contrapresión o backpressure? (colas de mensajes; qué sucede cuando el consumidor no da abasto)
- [x] ¿Cómo se diseñan los reintentos de una petición? (idempotencia y limitación de peticiones; timeout, espera exponencial y jitter)
- [x] ¿Qué es un disyuntor o circuit breaker? (microservicios y reintentos; estados y recuperación)
- [x] ¿Qué son los presupuestos de error? (observabilidad; partir de indicadores y objetivos de servicio)

### Redes y telecomunicaciones

- [x] ¿Qué es el aliasing y cómo se evita? (muestreo de señales y sonido; desarrollar lo ya introducido, con ejemplos de frecuencias)
- [x] ¿Para qué sirve la transformada de Fourier al procesar señales? (señales y modulación; aplicación a audio, sin convertirlo en una lección de matemática pura)
- [x] ¿Qué es un filtro digital? (Fourier y muestreo; ejemplo de media móvil y límites)
- [x] ¿Cómo funciona el control de congestión de TCP? (TCP y UDP; distinguirlo del control de flujo)

### Hardware y arquitectura

- [x] ¿Qué es la coherencia de caché? (caché del procesador y multinúcleo; distinguir coherencia de consistencia de memoria)
- [x] ¿Qué es la ejecución fuera de orden? (segmentación del procesador; dependencias, especulación y retiro)
- [x] ¿Qué es el acceso directo a memoria, DMA? (interrupciones y E/S; transferencia sin copiar cada dato desde la CPU)

### Inteligencia artificial en producción

- [x] ¿Qué son los bosques aleatorios? (árboles de decisión; muestreo, combinación y evaluación)
- [x] ¿Qué es el gradient boosting? (árboles de decisión y función de pérdida; modelos que corrigen errores sucesivos)
- [x] ¿Qué es la deriva de datos y de concepto? (calidad de datos y evaluación; detectar cambios y decidir cuándo reentrenar)
- [x] ¿Qué es MLOps? (CI/CD, conjuntos de datos y evaluación; versiones, despliegue y seguimiento de modelos)
- [x] ¿Qué es la cuantización de un modelo de IA? (parámetros e inferencia; distinguirla de la cuantización de señales y vectores)

## Definiciones

### Programación y herramientas

- [x] ¿Qué es el ámbito de una variable? (variables y clausuras)
- [x] ¿Qué es una función pura? (programación funcional e inmutabilidad) Cubierta y ampliada en `programacion-funcional`.
- [x] ¿Qué es un efecto secundario? (funciones y manejo de estado) Cubierto y ampliado en `programacion-funcional`.
- [x] ¿Qué es una aserción? (pruebas de software; distinguirla de validar entradas)
- [x] ¿Qué es un iterador? (bucles y estructuras de datos)
- [x] ¿Qué es un generador? (iteradores; definir después del anterior)
- [x] ¿Qué es una ABI? (binarios y arranque de programas; diferenciarla de una API)

### Aplicaciones e ingeniería

- [x] ¿Qué es un origen web? (CORS y almacenamiento en el navegador; esquema, host y puerto)
- [x] ¿Qué es la hidratación de una página? (SPA, MPA y renderizado en servidor)
- [x] ¿Qué es una bandera de funcionalidad? (estrategias de despliegue)
- [x] ¿Qué es una condición de aceptación? (requisitos y pruebas)
- [x] ¿Qué es una prueba flaky o intermitente? (pruebas de software y CI/CD)

### Datos y estadística

- [x] ¿Qué es NULL en SQL? (SQL; valor desconocido y lógica de tres valores)
- [x] ¿Qué es la cardinalidad en una consulta? (planes de ejecución; no confundirla con cardinalidad de relaciones)
- [x] ¿Qué es una clave candidata? (modelo entidad-relación y clave primaria)
- [x] ¿Qué es un valor atípico? (preparación de datos y estadística descriptiva)
- [x] ¿Qué es una semilla aleatoria? (números pseudoaleatorios y reproducibilidad) Ampliada la cobertura de reproducibilidad en `numeros-aleatorios-y-pseudoaleatorios`.

### Sistemas y redes

- [x] ¿Qué es un descriptor de archivo? (archivos y llamadas al sistema)
- [x] ¿Qué es un inodo? (sistema de archivos; extraer solo si aporta claridad respecto al apartado existente) Ampliado `sistema-de-archivos`, incluido su ciclo de vida y ámbito de identificación.
- [x] ¿Qué es un cambio de contexto? (planificador de procesos)
- [x] ¿Qué es una MTU? (IP y recorrido de un paquete)
- [x] ¿Qué es el jitter de una red? (latencia y telecomunicaciones; distinguirlo del jitter de los reintentos)
- [x] ¿Qué es el TTL en IP? (traceroute; diferenciarlo del TTL de una caché DNS)

### Hardware e IA

- [x] ¿Qué es el endianness? (bytes y representación de enteros)
- [x] ¿Qué es un fallo de caché? (jerarquía de memoria)
- [x] ¿Qué es un lote o batch de entrenamiento? (épocas e hiperparámetros) Ampliado `que-es-una-epoca-de-entrenamiento` con tamaño, último lote y acumulación.
- [x] ¿Qué es la tasa de aprendizaje? (descenso del gradiente) Ampliado `descenso-del-gradiente` con escala y programación de la tasa.
- [x] ¿Qué es un checkpoint de un modelo? (entrenamiento y MLOps)
- [x] ¿Qué es un tensor en aprendizaje automático? (redes neuronales; formas y dimensiones con un ejemplo)

## Comparaciones

### Programación y pruebas

- [x] Diferencias entre concurrencia y paralelismo (ampliar la distinción de hilos y concurrencia con el mismo trabajo ejecutado de ambas formas) Ampliado `hilos-y-concurrencia` con el mismo trabajo y una tabla.
- [x] Diferencias entre código síncrono y asíncrono (promesas y bucle de eventos; no confundir asincronía con paralelismo) Ampliada en `promesas-y-async-await`.
- [x] Diferencias entre un mutex y un semáforo (bloqueos y nuevo artículo de semáforos) Incluida con tabla y caso compartido en `semaforos-en-concurrencia`.
- [x] Diferencias entre igualdad e identidad (objetos, referencias y paso de argumentos; declarar el lenguaje de los ejemplos)
- [x] Diferencias entre mock, stub y fake (ampliar los dobles de prueba introducidos en pruebas de software) Ampliada en `pruebas-de-software`.
- [x] Diferencias entre pruebas de carga y de estrés (pruebas de software y observabilidad)

### Aplicaciones y datos

- [x] Diferencias entre desplegar y lanzar una funcionalidad (CI/CD, estrategias de despliegue y banderas de funcionalidad) Ampliado `estrategias-de-despliegue` con tabla y límites de reversión.
- [x] Diferencias entre ETL y ELT (procesos ETL y almacenes de datos) Ampliado y corregido `procesos-etl`.
- [x] Diferencias entre procesamiento por lotes y en streaming (MapReduce, Spark y Kafka) Ampliada en `mapreduce-y-spark`.
- [x] Diferencias entre bloqueo optimista y pesimista (aislamiento y MVCC; resolver la misma actualización concurrente) Incluida en `niveles-de-aislamiento`, con comprobación de versión ejecutada en SQLite.
- [x] Diferencias entre una vista normal y una vista materializada (vistas y procedimientos almacenados; no repetir vista frente a tabla) Ampliada y matizada en `vistas-y-procedimientos-almacenados`.
- [x] Diferencias entre copia de seguridad, réplica y snapshot (copias de seguridad y replicación; qué fallo permite recuperar cada una) Ampliada en `copias-de-seguridad`.

### Redes, sistemas y hardware

- [x] Diferencias entre control de flujo y control de congestión (TCP; receptor frente a red) Incluida con tabla en `control-de-congestion-tcp`.
- [x] Diferencias entre ancho de banda en hercios y tasa de bits (modulación; aclarar las unidades sin repetir latencia y rendimiento) Ampliada en `modulacion`.
- [x] Diferencias entre enlaces duros y simbólicos (sistema de archivos; ampliar el apartado actual con borrado y cambio de destino) Ampliado `sistema-de-archivos` con renombrado, cambio de destino y tabla.
- [x] Diferencias entre interrupciones y sondeo de dispositivos (interrupciones y E/S; no confundir con polling HTTP) Ampliada en `interrupciones-y-entrada-salida`.
- [x] Diferencias entre disponibilidad y durabilidad (almacenamiento de objetos, réplicas y copias de seguridad) Incluida en `almacenamiento-de-objetos`.
- [x] Diferencias entre SLI, SLO y SLA (observabilidad y presupuestos de error) Incluida en `observabilidad`, conectada con presupuestos de error.

### IA y análisis de datos

- [x] Diferencias entre validación y prueba de un modelo (validación cruzada; uso de cada conjunto y fuga de datos) Ampliado `validacion-cruzada` con ejemplo de selección y tabla.
- [x] Diferencias entre bagging y boosting (bosques aleatorios y gradient boosting; escribir después de ambos conceptos) Incluida con tabla en `bosques-aleatorios` y enlazada a `gradient-boosting`.
- [x] Diferencias entre entrenar desde cero, ajustar y destilar un modelo (ajuste fino y transferencia; explicar destilación antes de comparar) Ampliada en `ajuste-fino`.
- [x] Diferencias entre inferencia por lotes y en tiempo real (inferencia y MLOps; latencia, coste y actualización) Incluida con tabla y criterios operativos en `mlops`.

## Curiosidades

Cada curiosidad conecta la historia con un concepto. Las pistas documentales de esta lista fueron puntos de partida; los documentos comprobados se citan en los artículos correspondientes.

- [x] El error de división del Pentium: ¿cómo puede equivocarse un procesador? (coma flotante y validación de hardware; buscar documentación técnica de Intel)
- [x] El fallo del Ariane 5: cuando reutilizar software cambia las suposiciones (conversiones numéricas y requisitos; investigar el informe de la comisión de investigación de la ESA)
- [x] Therac-25: qué puede pasar cuando el software controla una máquina (concurrencia y seguridad; contrastar los estudios originales de los incidentes)
- [x] La misión Mars Climate Orbiter y las unidades de medida (contratos de interfaz y pruebas; investigar el informe de la NASA)
- [x] ¿Qué ocurrió con los paquetes de ARPANET el 1 de enero de 1983? (TCP/IP e historia de internet; buscar documentación de la transición desde NCP)
- [x] ¿Por qué Ethernet se llama Ethernet? (capa de enlace; investigar el memorando y los trabajos originales de sus creadores)
- [x] ¿Cómo se eligió la longitud de una dirección IPv4? (IPv4 e IPv6; distinguir decisiones documentadas de explicaciones retrospectivas)
- [x] ¿De dónde viene el nombre «SQL»? (SQL e historia de las bases de datos; investigar SEQUEL y System R)
- [x] El artículo que propuso las bases de datos relacionales (modelo relacional y normalización; investigar el trabajo de Codd y su contexto)
- [x] ¿Por qué existe el valor NULL? (NULL y lógica de tres valores; investigar su diseño, sin reducirlo a «un dato vacío»)
- [x] ¿Qué es la paradoja de Simpson? (correlación, causalidad y agregación; ejemplo numérico reproducible y fuente académica)
- [x] La paradoja del cumpleaños y las colisiones de hash (probabilidad y tablas hash; calcular el caso y distinguir colisión de ataque)
- [x] ¿De dónde vienen big-endian y little-endian? (endianness; investigar el texto original de Danny Cohen)
- [x] ¿Qué fue ELIZA y por qué parecía entender? (modelos de lenguaje y test de Turing; investigar el artículo original de Weizenbaum)
- [x] ¿Qué aprendió realmente el perceptrón? (redes neuronales e inviernos de la IA; investigar trabajos originales, sin atribuir el invierno a una sola causa)
- [x] La ley de Amdahl: por qué duplicar los núcleos no duplica la velocidad (multinúcleo y paralelismo; investigar el trabajo original y reproducir un cálculo)

## Orden de trabajo y rutas

1. **Cerrar las bases**: teoría de la computación, definiciones de programación, NULL y planes de consulta. Ampliar «Teoría de la computación», «Fundamentos de programación» y «SQL en la práctica».
2. **Coordinar y recuperar**: aislamiento, semáforos, contrapresión, reintentos y fiabilidad. Ampliar «Concurrencia», «Sistemas distribuidos» y «La nube por dentro».
3. **Entregar y mantener**: contratos, pruebas por propiedades, migraciones y evolución de API. Ampliar «Ingeniería del software», «Desarrollo back-end» y «Cómo se entrega el software».
4. **Bajar a señales y hardware**: aliasing, Fourier, filtros, congestión, DMA y cachés. Ampliar «Telecomunicaciones», «Redes por dentro» y «Arquitectura de computadores».
5. **Completar el ciclo de los modelos**: regresiones, ensembles, deriva, MLOps y cuantización. Ampliar «Análisis de datos» e «Introducción a la inteligencia artificial»; valorar una ruta de modelos en producción solo si forma un recorrido propio.

Intercalar definiciones y curiosidades con cada tanda. Escribir las comparaciones cuando sus conceptos de partida estén disponibles. No añadir todos los artículos a una ruta por compartir área: conservar recorridos progresivos y manejables.
