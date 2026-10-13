import { describe, expect, it } from "vitest";
import { getStepNeighbors } from "./paths";

describe("getStepNeighbors", () => {
	const steps = ["variables", "funciones", "bucles"];

	it("returns the steps around a middle article", () => {
		expect(getStepNeighbors(steps, "funciones")).toEqual({
			previous: "variables",
			next: "bucles",
		});
	});

	it("has no previous step at the start and no next step at the end", () => {
		expect(getStepNeighbors(steps, "variables").previous).toBeUndefined();
		expect(getStepNeighbors(steps, "bucles").next).toBeUndefined();
	});

	it("returns no neighbors for an article outside the path", () => {
		expect(getStepNeighbors(steps, "dns")).toEqual({
			previous: undefined,
			next: undefined,
		});
	});
});
