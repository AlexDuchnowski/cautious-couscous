import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { stages } from '$lib/levels/stages';

export const load: PageLoad = ({ params }) => {
	const stageIndex = Number(params.stage);
	const levelIndex = Number(params.level);

	if (Number.isInteger(stageIndex) && stageIndex >= 0 && stageIndex < stages.length) {
		const levels = stages[stageIndex];

		if (
			Number.isInteger(levelIndex) &&
			(levelIndex === -1 || (levelIndex >= 0 && levelIndex < levels.length))
		) {
			return {
				stageIndex,
				levelIndex
			};
		}
	}

	throw error(404, 'Not found');
};
