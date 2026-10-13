/** What an article is for; see "Tipos de artículo" in docs/content-guide.md. */
export const KINDS = [
	"concepto",
	"comparacion",
	"definicion",
	"curiosidad",
] as const;

export type Kind = (typeof KINDS)[number];

export const KIND_LABELS: Record<Kind, string> = {
	concepto: "Concepto",
	comparacion: "Comparación",
	definicion: "Definición",
	curiosidad: "Curiosidad",
};
