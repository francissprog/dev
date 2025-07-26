import Swal from 'sweetalert2';
import { preferedDarkUser } from '$lib/stores/rootStores';

type SwalProps = {
	message: string;
	icon: 'success' | 'error' | 'warning';
	loading: boolean;
};
export const successMessage = async ({ message, icon = 'success', loading }: SwalProps) => {
	await Swal.fire({
		title: message,
		icon,
		showConfirmButton: false,
		showCancelButton: false,
		timer: 1200,
		customClass: {
			popup: preferedDarkUser ? 'swal2-dark' : 'swal2-light'
		}
	});
	setTimeout(() => {
		loading = false;
	}, 1200);
	return;
};
export const errorMessage = ({ message, icon = 'success' }: SwalProps) => {
	Swal.fire({
		title: message,
		icon,
		showConfirmButton: false,
		showCancelButton: false,
		timer: 1200,
		customClass: {
			popup: preferedDarkUser ? 'swal2-dark' : 'swal2-light'
		}
	});
};
