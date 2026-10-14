/**
 * Reading progress kept in the visitor's browser. Articles are marked read or
 * pending by hand, and the two are exclusive. A path can be marked pending by
 * hand, and counts as complete when every one of its articles is read.
 */

export type ArticleStatus = "leido" | "pendiente";
export type PathStatus = "completa" | "pendiente";

export type Progress = {
	articles: Record<string, ArticleStatus>;
	paths: Record<string, "pendiente">;
};

export const STORAGE_KEY = "progreso";

export function emptyProgress(): Progress {
	return { articles: {}, paths: {} };
}

const isRecord = (value: unknown): value is Record<string, unknown> =>
	typeof value === "object" && value !== null && !Array.isArray(value);

/** Reads stored progress, dropping anything malformed instead of failing. */
export function parseProgress(raw: string | null): Progress {
	const progress = emptyProgress();
	if (!raw) return progress;

	let data: unknown;
	try {
		data = JSON.parse(raw);
	} catch {
		return progress;
	}
	if (!isRecord(data)) return progress;

	if (isRecord(data.articles)) {
		for (const [id, status] of Object.entries(data.articles)) {
			if (status === "leido" || status === "pendiente") {
				progress.articles[id] = status;
			}
		}
	}
	if (isRecord(data.paths)) {
		for (const [id, status] of Object.entries(data.paths)) {
			if (status === "pendiente") progress.paths[id] = status;
		}
	}

	return progress;
}

/** Sets a status on an article, or clears it when it already has that status. */
export function toggleArticle(
	progress: Progress,
	id: string,
	status: ArticleStatus,
): Progress {
	const articles = { ...progress.articles };
	if (articles[id] === status) {
		delete articles[id];
	} else {
		articles[id] = status;
	}

	return { ...progress, articles };
}

/** Marks a path as pending, or clears the mark. */
export function togglePathPending(progress: Progress, id: string): Progress {
	const paths = { ...progress.paths };
	if (paths[id]) {
		delete paths[id];
	} else {
		paths[id] = "pendiente";
	}

	return { ...progress, paths };
}

export type PathProgress = {
	read: number;
	total: number;
	status: PathStatus | undefined;
};

/** Derives a path's state from its articles; completion wins over pending. */
export function getPathProgress(
	progress: Progress,
	id: string,
	steps: readonly string[],
): PathProgress {
	const read = steps.filter(
		(step) => progress.articles[step] === "leido",
	).length;
	const total = steps.length;
	const complete = total > 0 && read === total;

	return {
		read,
		total,
		status: complete ? "completa" : progress.paths[id],
	};
}
