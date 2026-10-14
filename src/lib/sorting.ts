export type CountOrder = "asc" | "desc";

type Countable = { count: number; order: number };

/**
 * Orders items by how many articles they have. Ties keep their original order,
 * so the result is stable whatever the browser's sort does.
 */
export function sortByCount<T extends Countable>(
	items: readonly T[],
	order: CountOrder,
): T[] {
	const sign = order === "asc" ? 1 : -1;
	return [...items].sort(
		(a, b) => sign * (a.count - b.count) || a.order - b.order,
	);
}
