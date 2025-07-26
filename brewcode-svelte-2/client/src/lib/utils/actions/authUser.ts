import axios, { isAxiosError } from 'axios';
import { errorMessage } from '../ui/alertUtils';
import { successMessage } from '../ui/alertUtils';
import { goto } from '$app/navigation';

type AuthParams = {
	username: string;
	password: string;
	email?: string;
};

// Define the auth function that accepts an object as 'data'
export const auth = async ({ username, password }: AuthParams) => {
	try {
		// post the data
		const response = await axios.post('/api/auth', {
			emailOrUsername: username,
			password
		});

		// validate the response
		if (response.status === 200) {
			const { message } = response?.data;
			await successMessage(message, 'success');
			goto('/brewcode');
		}
	} catch (error) {
		// Guard clause for Axios errors
		if (isAxiosError(error)) {
			errorMessage(error.response?.data.message, 'error');
			return; // Exit early after handling the Axios error
		}
		// unexpected error
		errorMessage('An unexpected error occurred', 'error');
	}
};

export const register = async ({ username, email, password }: AuthParams) => {
	try {
		const response = await axios.post('/api/auth/register', { username, email, password });

		if (response.status === 200) {
			const { message } = response?.data;
			await successMessage(message, 'success');
			goto('/brewcode');
		}
	} catch (error) {
		if (isAxiosError(error)) {
			errorMessage(error.response?.data.message, 'error');
			return;
		}

		errorMessage('An unexpected error occurred', 'error');
	}
};
