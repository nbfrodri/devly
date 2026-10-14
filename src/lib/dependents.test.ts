import { describe, expect, it } from "vitest";
import { findDependents } from "./dependents";

const items = [
	{ id: "tcp", prerequisites: ["ip"] },
	{ id: "http", prerequisites: ["tcp", "dns"] },
	{ id: "dns", prerequisites: ["ip"] },
	{ id: "tls", prerequisites: ["tcp"] },
];

describe("findDependents", () => {
	it("returns the articles that list the given one as a prerequisite, in order", () => {
		expect(findDependents(items, "tcp").map((item) => item.id)).toEqual([
			"http",
			"tls",
		]);
	});

	it("respects the limit", () => {
		expect(findDependents(items, "ip", 1).map((item) => item.id)).toEqual([
			"tcp",
		]);
	});

	it("returns nothing when no article builds on it", () => {
		expect(findDependents(items, "tls")).toEqual([]);
	});
});
