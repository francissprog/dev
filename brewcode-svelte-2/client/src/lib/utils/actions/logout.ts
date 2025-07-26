import Swal from 'sweetalert2';
import axios from 'axios';
import { goto } from '$app/navigation';

export const onLogout = async () => {
	const popup = Swal.fire({
		title: 'Are you sure you want to Logout? ',
		showConfirmButton: true,
		showCancelButton: true,
		customClass: {
			popup: 'bg-softMist',
			confirmButton: 'bg-obsidian text-white',
			cancelButton: 'bg-slateGray '
		}
	});

	if ((await popup).isConfirmed) {
		await axios.post('/api/logout');
		return goto('/auth');
	}
};
