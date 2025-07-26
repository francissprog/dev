import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
export default defineConfig({
	optimizeDeps: {
		exclude: ['@sveltejs/enhanced-img']
	},
	plugins: [sveltekit()]
});
