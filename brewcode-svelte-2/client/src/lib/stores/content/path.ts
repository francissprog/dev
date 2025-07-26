import { Home, ShoppingBasket, Coffee, Settings } from 'lucide-svelte';
export const navItems = [
	{ id: 1, href: '/brewcode', label: Home },
	{ id: 2, href: '/brewcode/coffee', label: Coffee },
	{ id: 3, href: '/brewcode/cart', label: ShoppingBasket },
	{ id: 4, href: '/brewcode/settings', label: Settings }
];

export const routeContentMap: Record<string, string> = {
	'/brewcode': 'Top Rated',
	'/brewcode/coffee': 'Coffees',
	'/brewcode/cart': 'Cart',
	'/brewcode/settings': 'Settings'
};
