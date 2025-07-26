import { json, type RequestHandler } from '@sveltejs/kit';
import { emailRegex } from '$lib/utils/helpers/regex';
import { connectDB } from '$lib/utils/db/connectDB';
import User from '$lib/utils/db/userSchema';
import { compare } from 'bcrypt-ts';
import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '$env/static/private';

export const POST: RequestHandler = async ({ request, cookies }) => {
	// wait the data incoming
	const { emailOrUsername, password } = await request.json();
	// request validation
	if (!emailOrUsername || !password) {
		return json({ message: 'Email/Username and password are required' }, { status: 400 });
	}

	// connect to database
	await connectDB();

	// Determine if the user puts an email or username
	const isEmail = emailRegex.test(emailOrUsername);

	// find the user
	const findUser = isEmail
		? await User.findOne({ email: emailOrUsername })
		: await User.findOne({ username: emailOrUsername });

	// validate if the user exist
	if (!findUser) {
		return json({ message: 'Invalid Credentials' }, { status: 404 });
	}
	try {
		// compare the two passwords
		const authPass = await compare(password, findUser?.password);

		// validation for authentication
		if (!authPass) {
			return json({ message: 'Invalid password' }, { status: 401 });
		}

		const token = jwt.sign(findUser?.username, JWT_SECRET);

		// set the cookies
		cookies.set('jwtCookie', token, {
      path: '/brewcode',
      expires: new Date(Date.now() + 86400 * 1000),
      httpOnly: true,
      maxAge: 3600,
      secure: false // chage in prod
    });
  } catch (error) {
    return json({ message: 'An error occurred' }, { status: 500 });
  }

	return json(
		{
			message: `Welcome Back! ${findUser?.username}`
		},
		{ status: 200 }
	);
};
