import { describe, expect, it } from "vitest";
import { sortByCount } from "./sorting";

const items = [
	{ id: "redes", count: 7, order: 0 },
	{ id: "datos", count: 3, order: 1 },
	{ id: "ia", count: 7, order: 2 },
	{ id: "web", count: 12, order: 3 },
];

describe("sortByCount", () => {
	it("puts the shortest first in ascending order", () => {
		expect(sortByCount(items, "asc").map((item) => item.id)).toEqual([
			"datos",
			"redes",
			"ia",
			"web",
		]);
	});

	it("puts the longest first in descending order, keeping ties in place", () => {
		expect(sortByCount(items, "desc").map((item) => item.id)).toEqual([
			"web",
			"redes",
			"ia",
			"datos",
		]);
	});

	it("does not modify the given list", () => {
		sortByCount(items, "asc");
		expect(items[0].id).toBe("redes");
	});
});
