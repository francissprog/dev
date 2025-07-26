import { connectDB } from '$lib/utils/db/connectDB';
import User from '$lib/utils/db/userSchema';
import { json, type RequestHandler } from '@sveltejs/kit';
import { hash, genSalt } from 'bcrypt-ts';
import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '$env/static/private';
export const POST: RequestHandler = async ({ request, cookies }) => {
	const { username, email, password } = await request.json();
	// connect to database
	await connectDB();

	// form validation
	if (!username || !email || !password) {
		return json({ message: "userCreds didn't recieve" }, { status: 400 });
	}
	try {
		// find the user in database
		const findUser = (await User.findOne({ email })) || (await User.findOne({ username }));

		if (findUser) {
			return json({ message: 'User already Existed...' }, { status: 403 });
		}
		// set a salt
		const salt = await genSalt(10);
		// hash the password first
		const hashedPassword = await hash(password, salt);
		// create a new User
		const newUser = new User({
			username,
			email,
			password: hashedPassword
		});

		// save the user
		await newUser.save();

		// create a jwt
		const token = jwt.sign(newUser?.username, JWT_SECRET);

		// set the cookies
		cookies.set('jwtCookie', token, {
			path: '/',
			expires: new Date(Date.now() + 86400 * 1000),
			httpOnly: true,
			maxAge: 3600,
			secure: false // chage in prod
		});
	} catch (error) {
		return json({ message: 'An error occurred' }, { status: 500 });
	}
	// create a cookies and redirect the user to brewcode
	return json({ message: `Welcome to Brewcode ${username}` }, { status: 200 });
};
