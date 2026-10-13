import { describe, expect, it } from "vitest";
import { compareByLevel, type Level } from "./levels";

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
