import { describe, expect, it } from "vitest";
import {
	emptyProgress,
	getPathProgress,
	parseProgress,
	toggleArticle,
	togglePathPending,
} from "./progress";

describe("parseProgress", () => {
	it("starts empty without stored data or with invalid JSON", () => {
		expect(parseProgress(null)).toEqual(emptyProgress());
		expect(parseProgress("{nope")).toEqual(emptyProgress());
		expect(parseProgress("[1,2]")).toEqual(emptyProgress());
	});

	it("keeps valid entries and drops unknown statuses", () => {
		const raw = JSON.stringify({
			articles: { dns: "leido", tcp: "pendiente", udp: "visto", ip: 3 },
			paths: { redes: "pendiente", datos: "completa" },
		});

		expect(parseProgress(raw)).toEqual({
			articles: { dns: "leido", tcp: "pendiente" },
			paths: { redes: "pendiente" },
		});
	});
});

describe("toggleArticle", () => {
	it("sets a status and clears it when toggled again", () => {
		const read = toggleArticle(emptyProgress(), "dns", "leido");
		expect(read.articles.dns).toBe("leido");
		expect(toggleArticle(read, "dns", "leido").articles.dns).toBeUndefined();
	});

	it("treats read and pending as exclusive", () => {
		const pending = toggleArticle(emptyProgress(), "dns", "pendiente");
		expect(toggleArticle(pending, "dns", "leido").articles.dns).toBe("leido");
	});

	it("does not modify the given progress", () => {
		const original = emptyProgress();
		toggleArticle(original, "dns", "leido");
		expect(original.articles).toEqual({});
	});
});

describe("togglePathPending", () => {
	it("marks and unmarks a path", () => {
		const marked = togglePathPending(emptyProgress(), "redes");
		expect(marked.paths.redes).toBe("pendiente");
		expect(togglePathPending(marked, "redes").paths.redes).toBeUndefined();
	});
});

describe("getPathProgress", () => {
	const steps = ["dns", "tcp", "http"];

	it("counts read articles only", () => {
		let progress = toggleArticle(emptyProgress(), "dns", "leido");
		progress = toggleArticle(progress, "tcp", "pendiente");

		expect(getPathProgress(progress, "redes", steps)).toEqual({
			read: 1,
			total: 3,
			status: undefined,
		});
	});

	it("is complete when every article is read, even if marked pending", () => {
		let progress = togglePathPending(emptyProgress(), "redes");
		for (const step of steps) progress = toggleArticle(progress, step, "leido");

		expect(getPathProgress(progress, "redes", steps).status).toBe("completa");
	});

	it("stops being complete when an article is unmarked or added", () => {
		let progress = emptyProgress();
		for (const step of steps) progress = toggleArticle(progress, step, "leido");
		const unmarked = toggleArticle(progress, "tcp", "leido");

		expect(getPathProgress(unmarked, "redes", steps).status).toBeUndefined();
		expect(
			getPathProgress(progress, "redes", [...steps, "tls"]).status,
		).toBeUndefined();
	});

	it("reports a manually pending path that is not complete", () => {
		const progress = togglePathPending(emptyProgress(), "redes");
		expect(getPathProgress(progress, "redes", steps).status).toBe("pendiente");
	});
});
