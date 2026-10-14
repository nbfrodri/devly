import {
	type ArticleStatus,
	getPathProgress,
	type Progress,
	parseProgress,
	STORAGE_KEY,
	toggleArticle,
	togglePathPending,
} from "@/lib/progress";

/**
 * Reflects reading progress in the page. Markup declares what to decorate:
 * - `data-progress-article="<id>"` gets `data-status` with the article status.
 * - `data-progress-path="<id>"` with `data-steps="<id> <id>"` gets `data-status`,
 *   and fills `[data-progress-count]` and `--progress` inside it.
 * - `button[data-progress-toggle]` toggles a status on `data-progress-id`.
 * - `[data-progress-list="<status>"]` with `data-source="<template id>"` is
 *   filled with the template's items that have that status.
 */

function load(): Progress {
	try {
		return parseProgress(localStorage.getItem(STORAGE_KEY));
	} catch {
		return parseProgress(null);
	}
}

let progress = load();

function save() {
	try {
		localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
	} catch {
		// Storage can be unavailable; the marks then last for this page only.
	}
}

function setStatus(element: HTMLElement, status: string | undefined) {
	if (status) {
		element.dataset.status = status;
	} else {
		delete element.dataset.status;
	}
}

/** Copies into each list the items from its template whose status matches. */
function fillLists() {
	for (const list of document.querySelectorAll<HTMLElement>(
		"[data-progress-list]",
	)) {
		const source = document.getElementById(list.dataset.source ?? "");
		if (!(source instanceof HTMLTemplateElement)) continue;

		const wanted = list.dataset.progressList;
		const items = [...source.content.children].filter((item) => {
			const element = item as HTMLElement;
			const path = element.querySelector<HTMLElement>("[data-progress-path]");
			if (path) {
				const steps = (path.dataset.steps ?? "").split(" ").filter(Boolean);
				const id = path.dataset.progressPath ?? "";
				return getPathProgress(progress, id, steps).status === wanted;
			}
			return (
				progress.articles[element.dataset.progressArticle ?? ""] === wanted
			);
		});
		list.replaceChildren(...items.map((item) => item.cloneNode(true)));

		const section = list.closest<HTMLElement>("[data-progress-section]");
		if (!section) continue;
		section.hidden = false;
		for (const count of section.querySelectorAll<HTMLElement>(
			"[data-progress-total]",
		)) {
			count.textContent = String(items.length);
		}
		for (const empty of section.querySelectorAll<HTMLElement>(
			"[data-progress-empty]",
		)) {
			empty.hidden = items.length > 0;
		}
	}
}

function render() {
	fillLists();

	for (const element of document.querySelectorAll<HTMLElement>(
		"[data-progress-article]",
	)) {
		setStatus(
			element,
			progress.articles[element.dataset.progressArticle ?? ""],
		);
	}

	for (const element of document.querySelectorAll<HTMLElement>(
		"[data-progress-path]",
	)) {
		const steps = (element.dataset.steps ?? "").split(" ").filter(Boolean);
		const state = getPathProgress(
			progress,
			element.dataset.progressPath ?? "",
			steps,
		);
		setStatus(element, state.status);
		// Untouched paths show no progress, so cards stay quiet until the visitor starts.
		element.toggleAttribute(
			"data-started",
			state.read > 0 || state.status !== undefined,
		);
		element.style.setProperty(
			"--progress",
			String(state.total === 0 ? 0 : state.read / state.total),
		);
		for (const count of element.querySelectorAll<HTMLElement>(
			"[data-progress-count]",
		)) {
			count.textContent = `${state.read} de ${state.total} leídos`;
		}
	}

	for (const button of document.querySelectorAll<HTMLButtonElement>(
		"[data-progress-toggle]",
	)) {
		const id = button.dataset.progressId ?? "";
		const pressed =
			button.dataset.progressScope === "path"
				? progress.paths[id] === "pendiente"
				: progress.articles[id] === button.dataset.progressToggle;
		button.setAttribute("aria-pressed", String(pressed));
		const label = pressed ? button.dataset.labelOn : button.dataset.labelOff;
		const text = button.querySelector("[data-label]");
		if (text && label) text.textContent = label;
	}
}

document.addEventListener("click", (event) => {
	const button = (event.target as Element | null)?.closest<HTMLButtonElement>(
		"button[data-progress-toggle]",
	);
	if (!button) return;

	const id = button.dataset.progressId ?? "";
	progress =
		button.dataset.progressScope === "path"
			? togglePathPending(progress, id)
			: toggleArticle(
					progress,
					id,
					button.dataset.progressToggle as ArticleStatus,
				);
	save();
	render();
});

// Keeps several open tabs in step.
window.addEventListener("storage", (event) => {
	if (event.key !== STORAGE_KEY) return;
	progress = load();
	render();
});

render();
