import { goto } from '$app/navigation';
import Swal from 'sweetalert2';

export const errorMessage = (
	message: string,
	icon: 'success' | 'warning' | 'error' | 'info' | 'question'
) => {
	Swal.fire({
		title: message,
		icon,
		timer: 1200,
		allowOutsideClick: false,
		showConfirmButton: false
	});
};

export const successMessage = (
	message: string,
	icon: 'success' | 'warning' | 'error' | 'info' | 'question'
): Promise<void> => {
	return new Promise((resolve) => {
		const alert = Swal.fire({
			title: message,
			icon,
			timer: 1200,
			allowOutsideClick: false,
			showConfirmButton: false,
			willClose: () => resolve() // Resolve the promise when the alert closes
		});
	});
};
