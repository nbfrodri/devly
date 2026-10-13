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
