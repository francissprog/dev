import { json, type RequestHandler } from '@sveltejs/kit';

export const POST: RequestHandler = async ({ cookies }) => {
	const jwtSession = cookies.get('jwtCookie');
	if (!jwtSession && cookies.get('authjs.session-token')) {
		cookies.delete('authjs.session-token', {
			path: '/'
		});
		return json({ message: 'Successfully logout' }, { status: 200 });
	}
	cookies.delete('jwtCookie', {
		path: '/'
	});

	return json({ message: 'Successfully logout' }, { status: 200 });
};
