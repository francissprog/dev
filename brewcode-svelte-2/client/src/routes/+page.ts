import type { PageLoad } from './$types';
import { HandCoins, Coffee, WindArrowDown } from 'lucide-svelte';
import expresso from '$lib/assets/espresso.png';
import macchiato from '$lib/assets/caramel-macchiato.png';
import americano from '$lib/assets/americano.png';
export const load: PageLoad = () => {
	const aboutContent = [
		{
			id: 1,
			title: 'Affordable Prices',
			description: 'Enjoy premium coffee and snacks without breaking the bank.',
			iconName: HandCoins,
			hrefContent: 'See Coffee Pricing' // A button to view prices
		},
		{
			id: 2,
			title: 'Quality Coffee',
			description: 'Savor the rich taste of expertly brewed coffee made from the finest beans.',
			iconName: Coffee,
			hrefContent: 'Discover Our Beans'
		},
		{
			id: 3,
			title: 'Cozy Ambience',
			description: 'Relax in a warm and inviting atmosphere perfect for work or leisure.',
			iconName: WindArrowDown,
			hrefContent: 'Book Your Spot'
		}
	];
	const sellingContent = [
		{
			id: 1,
			title: 'Espresso',
			description: 'Bold and rich, a timeless favorite for coffee lovers.',
			image: expresso,
			price: 2.49
		},
		{
			id: 2,
			title: 'Macchiato',
			description: 'Sweet caramel with a creamy finish, perfect for a treat.',
			image: macchiato,
			price: 3.99
		},
		{
			id: 3,
			title: 'Americano',
			description: 'Smooth and simple, a classic choice for any time of day.',
			image: americano,
			price: 2.99
		}
	];
	return {
		aboutContent,
		sellingContent
	};
};
