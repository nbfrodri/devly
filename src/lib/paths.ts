export type StepNeighbors = {
	previous: string | undefined;
	next: string | undefined;
};

/** Finds the steps around an article inside a learning path. */
export function getStepNeighbors(
	steps: readonly string[],
	currentId: string,
): StepNeighbors {
	const index = steps.indexOf(currentId);

	if (index === -1) {
		return { previous: undefined, next: undefined };
	}

	return { previous: steps[index - 1], next: steps[index + 1] };
}
