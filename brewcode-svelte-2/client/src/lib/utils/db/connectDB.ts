import mongoose from 'mongoose';
import { MONGODB_URL } from '$env/static/private';
export const connectDB = async () => {	
	if (mongoose.connections[0].readyState) {
		console.log('Already connected to database');
		return;
	}
	try {
		await mongoose.connect(MONGODB_URL);
	} catch (error) {
		console.error(error);
	}
};
