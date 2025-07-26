<script lang="ts">
	import '../app.css';
	let { children } = $props();
	import Footer from '$lib/utils/components/Footer.svelte';
</script>

<main>
	{@render children()}
	<Footer />
</main>
