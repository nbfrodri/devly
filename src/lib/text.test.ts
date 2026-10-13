import { describe, expect, it } from "vitest";
import { normalizeForSearch } from "./text";

describe("normalizeForSearch", () => {
	it("lowercases and removes accents", () => {
		expect(normalizeForSearch("¿Qué es una Función?")).toBe(
			"¿que es una funcion?",
		);
	});

	it("keeps the letter ñ distinguishable only by its base letter", () => {
		expect(normalizeForSearch("Diseño")).toBe("diseno");
	});
});
