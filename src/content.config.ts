import { defineCollection, reference } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { LEVELS } from "./lib/levels";

const articles = defineCollection({
	loader: glob({ pattern: "**/*.mdx", base: "./src/content/es/articles" }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		level: z.enum(LEVELS),
		topic: z.string(),
		prerequisites: z.array(reference("articles")).default([]),
		updated: z.coerce.date(),
		draft: z.boolean().default(true),
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
