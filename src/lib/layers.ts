/** Layers of computing, ordered from most abstract to closest to the machine. */
export const LAYERS = [
	{
		id: "aplicaciones",
		name: "Aplicaciones y datos",
		description: "Web, móvil, bases de datos, inteligencia artificial",
	},
	{
		id: "redes",
		name: "Redes e internet",
		description: "Protocolos, DNS, HTTP, seguridad",
	},
	{
		id: "programacion",
		name: "Lenguajes y programación",
		description: "Variables, funciones, algoritmos, paradigmas",
	},
	{
		id: "sistemas",
		name: "Sistemas operativos",
		description: "Procesos, memoria, archivos, terminal",
	},
	{
		id: "hardware",
		name: "Hardware y bits",
		description: "Binario, procesador, memoria, almacenamiento",
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
