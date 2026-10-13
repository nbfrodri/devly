/** Layers of computing, ordered from most abstract to closest to the machine. */
export const LAYERS = [
	{
		id: "ia",
		name: "Inteligencia artificial",
		description: "Aprendizaje automático, redes neuronales",
	},
	{
		id: "aplicaciones",
		name: "Aplicaciones e ingeniería del software",
		description: "Web, API, arquitectura, pruebas",
	},
	{
		id: "datos",
		name: "Datos y bases de datos",
		description: "SQL, modelado, análisis de datos",
	},
	{
		id: "redes",
		name: "Redes y telecomunicaciones",
		description: "Protocolos, internet, seguridad, señales",
	},
	{
		id: "programacion",
		name: "Programación y algoritmos",
		description: "Lenguajes, estructuras de datos, algoritmos",
	},
	{
		id: "sistemas",
		name: "Sistemas operativos",
		description: "Procesos, memoria, archivos, terminal",
	},
	{
		id: "hardware",
		name: "Hardware y bits",
		description: "Binario, electrónica digital, procesador",
	},
] as const;

export type Layer = (typeof LAYERS)[number];
export type LayerId = Layer["id"];

export const LAYER_IDS = LAYERS.map((layer) => layer.id) as [
	LayerId,
	...LayerId[],
];

export function getLayer(id: LayerId): Layer {
	const layer = LAYERS.find((candidate) => candidate.id === id);

	if (layer === undefined) {
		throw new Error(`Unknown layer "${id}".`);
	}

	return layer;
}
