import { type CollectionEntry, getCollection } from "astro:content";
import { compareByLevel } from "./levels";

export type Article = CollectionEntry<"articles">;

/** Drafts are visible in dev so generated content can be reviewed before publishing. */
export async function getPublishedArticles(): Promise<Article[]> {
	const articles = await getCollection(
		"articles",
		({ data }) => import.meta.env.DEV || !data.draft,
	);

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
