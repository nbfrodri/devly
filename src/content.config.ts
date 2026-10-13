import { defineCollection, reference } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { LAYER_IDS } from "./lib/layers";
import { LEVELS } from "./lib/levels";

const articles = defineCollection({
	loader: glob({ pattern: "**/*.mdx", base: "./src/content/es/articles" }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		level: z.enum(LEVELS),
		layer: z.enum(LAYER_IDS),
		prerequisites: z.array(reference("articles")).default([]),
		updated: z.coerce.date(),
		sources: z.array(z.object({ title: z.string(), url: z.url() })).min(1),
	}),
});

const paths = defineCollection({
	loader: glob({ pattern: "**/*.yaml", base: "./src/content/es/paths" }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		steps: z.array(reference("articles")).min(1),
	}),
});

export const collections = { articles, paths };
