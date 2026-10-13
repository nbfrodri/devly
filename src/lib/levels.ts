export const LEVELS = ["basico", "intermedio", "avanzado"] as const;

export type Level = (typeof LEVELS)[number];

export const LEVEL_LABELS: Record<Level, string> = {
	basico: "Básico",
	intermedio: "Intermedio",
	avanzado: "Avanzado",
};

export function compareByLevel(a: Level, b: Level): number {
	return LEVELS.indexOf(a) - LEVELS.indexOf(b);
}

/** Describes the span of levels in a set, e.g. "Nivel básico" or "De básico a avanzado". */
export function describeLevelRange(levels: readonly Level[]): string {
	const sorted = [...new Set(levels)].sort(compareByLevel);
	const lowest = sorted.at(0);
	const highest = sorted.at(-1);

	if (lowest === undefined || highest === undefined) {
		return "";
	}

	if (lowest === highest) {
		return `Nivel ${LEVEL_LABELS[lowest].toLowerCase()}`;
	}

	return `De ${LEVEL_LABELS[lowest].toLowerCase()} a ${LEVEL_LABELS[highest].toLowerCase()}`;
}
