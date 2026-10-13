/** Lowercases and strips accents so "Qué" and "que" match in text filters. */
export function normalizeForSearch(text: string): string {
	return text
		.normalize("NFD")
		.replace(/\p{Diacritic}/gu, "")
		.toLowerCase();
}
