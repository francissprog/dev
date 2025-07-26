import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';
export const load: LayoutServerLoad = async ({ locals, cookies }) => {
	const session = (await locals.auth()) ?? null;
	const jwtCookies = cookies.get('jwtCookie') as string;

	const auth = session || jwtCookies;
	if (!auth) {
		throw redirect(307, '/auth');
	}

	return {
		session,
		jwt: jwtCookies
	};
};
