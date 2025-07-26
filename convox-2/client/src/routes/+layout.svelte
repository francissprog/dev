<script lang="ts">
	import '../app.css';
	let { children } = $props();
	import { Navbar, DashboardNavbar, preferedDarkUser, dynamicIconSize } from '$lib';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	onMount(() => {
		if (innerWidth <= 768) {
			dynamicIconSize.set(25);
		}
		if (innerWidth <= 640) {
			dynamicIconSize.set(20);
		}

		if (typeof window !== 'undefined') {
			const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
			preferedDarkUser.set(mediaQuery.matches); // set initial

			// Listen to changes in system preference
			mediaQuery.addEventListener('change', (e) => {
				preferedDarkUser.set(e.matches);
			});
		}
	});
</script>

<main
	class={`font-michroma min-h-screen  px-20 py-10  max-md:px-16 max-sm:px-12  ${$preferedDarkUser ? 'bg-black text-white' : 'bg-white text-black'}`}
>
	{#if $page.url.pathname === '/dashboard'}
		<DashboardNavbar />
	{:else}
		<Navbar />
	{/if}
	{@render children()}
</main>
