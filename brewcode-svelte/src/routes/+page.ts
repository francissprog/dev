import { Coffee } from 'lucide-svelte';
import type { PageLoad } from './$types';
export const load: PageLoad = async () => {
	const aboutContent = [
		{
			id: 1,
			title: 'About Us',
			description:
				"We are a team of passionate people whose goal is to improve everyone's life through disruptive products. We build great products to solve your business problems.",
			iconName: Coffee,
			buttonContent: 'Get Started'
		}
	];

	return {
		aboutContent
	};
};
