import type { PageLoad } from '../$types';
import expresso from '$lib/assets/espresso.png';
import macchiato from '$lib/assets/caramel-macchiato.png';
import americano from '$lib/assets/americano.png';
export const load: PageLoad = async ({ parent }) => {
	await parent();	
	const cards = [
		{
			image: americano,
			title: 'Americano',
			description: 'Smooth and simple, a classic choice for any time of day.',
			rating: 4.5,
			price: 2.99
		},
		{
			image: expresso,
			title: 'Espresso',
			description: 'Bold and rich, a timeless favorite for coffee lovers.',
			rating: 5,
			price: 2.49
		},
		{
			image: macchiato,
			title: 'Macchiato',
			description: 'Sweet caramel with a creamy finish, perfect for a treat.',
			rating: 3.5,
			price: 3.99
		}
	];
	return { cards };
};
