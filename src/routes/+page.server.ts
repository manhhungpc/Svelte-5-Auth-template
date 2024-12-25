import { redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = ({ locals }) => {
	return {
		user: locals.user
	};
};

export const actions: Actions = {
	login: async ({ cookies }) => {
		cookies.set('auth', 'regularusertoken', {
			path: '/',
			httpOnly: true,
			sameSite: 'strict',
			secure: false,
			maxAge: 60 * 60 * 24 * 7 // 1 week
		});

		throw redirect(302, '/');
	}
};
