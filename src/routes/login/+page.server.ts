import { fail, redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import { z } from 'zod';

const loginSchema = z.object({
	email: z.string().trim().min(1),
	password: z.string().trim().min(6, { message: 'Must be 6 or more characters long' })
});

export const load: PageServerLoad = ({ locals }) => {
	return {
		user: locals.user
	};
};

export const actions: Actions = {
	login: async ({ cookies, request }) => {
		const formData = Object.fromEntries(await request.formData());
		const loginValidate = loginSchema.safeParse(formData);
		if (!loginValidate.success) {
			const errors = loginValidate.error.errors.map((error) => {
				return {
					field: error.path[0],
					message: error.message
				};
			});
			return fail(400, { errors });
		}
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
