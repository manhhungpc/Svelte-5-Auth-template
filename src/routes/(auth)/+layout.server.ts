import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ locals }) => {
	if (!locals.user) {
		console.log('Access Denied');
		throw redirect(302, '/');
	}

	return {
		user: locals.user
	};
};
