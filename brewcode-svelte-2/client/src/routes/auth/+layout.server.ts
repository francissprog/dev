import type { LayoutServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';
export const load: LayoutServerLoad = async ({ locals, cookies }) => {
	const session = (await locals.auth()) ?? null;
	const auth = (cookies.get('jwtCookie') as string) || session;

	if (auth) {
		throw redirect(303, '/brewcode');
	}

	return {
		session
	};
};
