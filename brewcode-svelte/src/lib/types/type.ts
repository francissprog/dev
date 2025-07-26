import type { IconProps } from 'lucide-svelte';
import { SvelteComponent } from 'svelte';

// Define a type for the Lucide components
export type LucideIcon = (new (options: { props: IconProps }) => SvelteComponent<any>);
export interface BaseContentProps {
	id: number;
	title: string;
	description: string;
}
// About Content props
export interface AboutContentProps extends BaseContentProps {
	iconName: LucideIcon;
	buttonContent: string;
}
// Selling Content Props
export interface SellingContentProps extends BaseContentProps {
	image: string;
	price: number;
}
