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
