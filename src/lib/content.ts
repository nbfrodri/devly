import { type CollectionEntry, getCollection } from "astro:content";
import { compareByLevel } from "./levels";

export type Article = CollectionEntry<"articles">;

export async function getArticles(): Promise<Article[]> {
	const articles = await getCollection("articles");

	return articles.sort(
		(a, b) =>
			compareByLevel(a.data.level, b.data.level) ||
			a.data.title.localeCompare(b.data.title, "es"),
	);
}

export function countByLayer(
	articles: Article[],
): Partial<Record<Article["data"]["layer"], number>> {
	const counts: Partial<Record<Article["data"]["layer"], number>> = {};

	for (const article of articles) {
		counts[article.data.layer] = (counts[article.data.layer] ?? 0) + 1;
	}

	return counts;
}

/** Article ids per layer, for the reading progress of each layer. */
export function idsByLayer(
	articles: Article[],
): Partial<Record<Article["data"]["layer"], string[]>> {
	const ids: Partial<Record<Article["data"]["layer"], string[]>> = {};

	for (const article of articles) {
		ids[article.data.layer] = [...(ids[article.data.layer] ?? []), article.id];
	}

	return ids;
}
