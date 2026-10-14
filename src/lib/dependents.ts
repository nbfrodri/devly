type WithPrerequisites = { id: string; prerequisites: readonly string[] };

/**
 * Articles that list `id` as a prerequisite, in the order given, up to
 * `limit`. Used to show where a reader can go next from an article.
 */
export function findDependents<T extends WithPrerequisites>(
	items: readonly T[],
	id: string,
	limit = Number.POSITIVE_INFINITY,
): T[] {
	return items
		.filter((item) => item.prerequisites.includes(id))
		.slice(0, limit);
}
