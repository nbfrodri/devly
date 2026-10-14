import { normalizeForSearch } from "@/lib/text";

/**
 * Drives a filter bar. Items carry `data-levels` and `data-text`, and sit in
 * sections with `data-layer`. A section with `data-limit` shows only that
 * many items until it is expanded or a filter is active.
 */
const form = document.querySelector<HTMLFormElement>("[data-filters]");
const list = document.querySelector<HTMLElement>("[data-filterable]");
const status = document.querySelector<HTMLElement>("[data-filter-status]");
const reset = document.querySelector<HTMLElement>("[data-filter-reset]");
const empty = document.querySelector<HTMLElement>("[data-filter-empty]");

/**
 * Reading status of an item, set by the progress script on the item or on the
 * path card inside it. A complete path counts as read.
 */
function progressOf(item: HTMLElement): string {
	const status =
		item.dataset.status ??
		item.querySelector<HTMLElement>("[data-progress-path]")?.dataset.status;
	if (status === "completa") return "leido";
	return status ?? "ninguno";
}

function applyFilters() {
	if (!form || !list) return;

	const data = new FormData(form);
	const level = String(data.get("level") ?? "");
	const layer = String(data.get("layer") ?? "");
	const kind = String(data.get("kind") ?? "");
	const progress = String(data.get("progress") ?? "");
	const text = normalizeForSearch(String(data.get("text") ?? "").trim());
	const filtering =
		level !== "" ||
		layer !== "" ||
		kind !== "" ||
		progress !== "" ||
		text !== "";
	const plural = form.dataset.plural ?? "";
	let total = 0;

	for (const section of list.querySelectorAll<HTMLElement>("[data-layer]")) {
		const layerMatches = layer === "" || section.dataset.layer === layer;
		const limit = Number(section.dataset.limit ?? Number.POSITIVE_INFINITY);
		const showAll = filtering || section.dataset.expanded === "true";
		let matches = 0;

		for (const item of section.querySelectorAll<HTMLElement>("[data-item]")) {
			const itemMatches =
				layerMatches &&
				(level === "" ||
					(item.dataset.levels ?? "").split(" ").includes(level)) &&
				(kind === "" || item.dataset.kind === kind) &&
				(progress === "" || progressOf(item) === progress) &&
				(text === "" || (item.dataset.text ?? "").includes(text));

			if (itemMatches) matches += 1;
			item.hidden = !itemMatches || (!showAll && matches > limit);
		}

		section.hidden = matches === 0;
		total += matches;

		const expand = section.querySelector<HTMLElement>("[data-expand]");
		if (expand) {
			expand.hidden = showAll || matches <= limit;
			expand.textContent = `Ver los ${matches} ${plural}`;
		}
	}

	if (status) {
		status.textContent = `${total} ${total === 1 ? (form.dataset.singular ?? "") : plural}`;
	}
	if (reset) reset.hidden = !filtering;
	if (empty) empty.hidden = total > 0;

	list.dispatchEvent(
		new CustomEvent("devly:content-change", { bubbles: true }),
	);
}

form?.addEventListener("change", applyFilters);
form?.addEventListener("input", applyFilters);
form?.addEventListener("submit", (event) => event.preventDefault());
// A reset restores the inputs after this event, so wait a tick to read them.
form?.addEventListener("reset", () => window.setTimeout(applyFilters));

list?.addEventListener("click", (event) => {
	const button =
		event.target instanceof Element
			? event.target.closest("[data-expand]")
			: null;
	const section = button?.closest<HTMLElement>("[data-layer]");

	if (section) {
		section.dataset.expanded = "true";
		applyFilters();
	}
});
