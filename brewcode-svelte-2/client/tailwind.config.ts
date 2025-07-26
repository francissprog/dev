import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				background: '#eeeff1',
				foreground: '#28282b',
				obsidian: '#1b1b1d',
				slateGray: '#646464',
				softMist: '#EEEFF1',
				softGray: '#f3f4f5'
			}
		}
	},

	plugins: []
} satisfies Config;
