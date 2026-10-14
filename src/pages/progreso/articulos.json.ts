import type { APIRoute } from "astro";
import { getArticles } from "@/lib/content";
import { KIND_LABELS } from "@/lib/kinds";
import { LEVEL_LABELS } from "@/lib/levels";

/**
 * Card data for the progress page. Shipping it as JSON keeps that page small:
 * it only builds the cards the visitor has marked.
 */
export const GET: APIRoute = async () => {
	const articles = await getArticles();

	return Response.json(
		articles.map(({ id, data }) => ({
			id,
			title: data.title,
			description: data.description,
			level: data.level,
			levelLabel: LEVEL_LABELS[data.level],
			kind: data.kind,
			kindLabel: data.kind === "concepto" ? "" : KIND_LABELS[data.kind],
		})),
	);
};
