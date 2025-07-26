<script lang="ts">
	import { Footer, Navbar, preferedDarkUser } from '$lib';
	let { children } = $props();
</script>

<main
	class={`${$preferedDarkUser ? 'dark:bg-black  dark:text-white' : 'bg-white text-black'} font-michroma px-20 max-md:px-16 max-sm:px-12`}
>
	<Navbar />
	{@render children()}
	<Footer />
</main>
