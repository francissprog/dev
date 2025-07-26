import type { PageLoad } from '../../$types';
import expresso from '$lib/assets/espresso.png';
import macchiato from '$lib/assets/caramel-macchiato.png';
import americano from '$lib/assets/americano.png';
import latte from '$lib/assets/latte.png';
import cappuccino from '$lib/assets/cappuccino.png';
import mocha from '$lib/assets/mocha.png';
import flatWhite from '$lib/assets/flatWhite.png';
import redeye from '$lib/assets/redEye.png';
import ristretto from '$lib/assets/ristretto.png';
export const load: PageLoad = async ({ parent }) => {
	// validate the session
	await parent();

	const coffees = [
		{
			id: 1,
			name: 'Espresso',
			description: 'Strong coffee made by forcing hot water through ground beans.',
			price: 3.5,
			image: expresso
		},
		{
			id: 2,
			name: 'Americano',
			description: 'Espresso mixed with hot water for a smoother taste.',
			price: 4,
			image: americano
		},
		{
			id: 3,
			name: 'Latte',
			description: 'Espresso with steamed milk and a little foam.',
			price: 4.5,
			image: latte
		},
		{
			id: 4,
			name: 'Cappuccino',
			description: 'Espresso with steamed milk and foam, topped with cocoa.',
			price: 4.5,
			image: cappuccino
		},
		{
			id: 5,
			name: 'Mocha',
			description: 'Chocolate-flavored coffee with espresso and milk.',
			price: 5,
			image: mocha
		},
		{
			id: 6,
			name: 'Macchiato',
			description: 'Espresso with a small amount of milk or foam.',
			price: 3.5,
			image: macchiato
		},
		{
			id: 7,
			name: 'Flat White',
			description: 'Espresso with velvety micro-foamed milk.',
			price: 4.5,
			image: flatWhite
		},
		{
			id: 8,
			name: 'Redeye',
			description: 'Drip coffee mixed with a shot of espresso.',
			price: 4.0,
			image: redeye
		},
		{
			id: 9,
			name: 'Ristretto',
			description: 'A sweeter, more concentrated shot of espresso.',
			price: 3.75,
			image: ristretto
		}
	];
	

	// load the list of coffees
	return { coffees };
};
