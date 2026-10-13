import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";

const articlesDir = join(import.meta.dirname, "../content/es/articles");
const files = readdirSync(articlesDir).filter((file) => file.endsWith(".mdx"));
const slugs = new Set(files.map((file) => file.replace(/\.mdx$/, "")));

describe("internal article links", () => {
	it.each(files)("%s links only to existing articles", (file) => {
		const body = readFileSync(join(articlesDir, file), "utf8");
		const linked = [...body.matchAll(/\]\(\/articulos\/([^/)]+)\/\)/g)].map(
			(match) => match[1],
		);

		expect(linked.filter((slug) => !slugs.has(slug))).toEqual([]);
	});
});
