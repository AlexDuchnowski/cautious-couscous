import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { levels } from '$lib/levels';

export const load: PageLoad = ({ params }) => {
    const level = Number(params.slug);

	if (
        !isNaN(level)
        && 0 <= level
        && level < levels.length
    ) {
		return { levelIndex: level };
	};

	error(404, 'Not found');
};