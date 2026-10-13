import { describe, expect, it } from "vitest";
import { compareByLevel, describeLevelRange, type Level } from "./levels";

describe("compareByLevel", () => {
	it("orders levels from basic to advanced", () => {
		const levels: Level[] = ["avanzado", "basico", "intermedio"];

		expect(levels.sort(compareByLevel)).toEqual([
			"basico",
			"intermedio",
			"avanzado",
		]);
	});
});

describe("describeLevelRange", () => {
	it("names a single level", () => {
		expect(describeLevelRange(["basico", "basico"])).toBe("Nivel básico");
	});

	it("names the lowest and highest level regardless of order", () => {
		expect(describeLevelRange(["avanzado", "basico", "intermedio"])).toBe(
			"De básico a avanzado",
		);
	});

	it("returns an empty string for no levels", () => {
		expect(describeLevelRange([])).toBe("");
	});
});
