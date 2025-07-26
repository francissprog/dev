<script lang="ts">
	import '../app.css';
	import { preferedDarkUser, dynamicIconSize } from '$lib';
	import { onMount } from 'svelte';
	let { children } = $props();
	$:prefersDark = $preferedDarkUser;

	// onMount function to check if the user uses darkmode
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

<svelte:window bind:innerWidth />
<main
	class={`${prefersDark ? 'dark:bg-black  dark:text-white' : 'bg-white text-black'} font-michroma  px-20`}
>
	{@render children()}
</main>
