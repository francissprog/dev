<script lang="ts">
	import Carousel from '$lib/components/dashboard/Carousel.svelte';
	import type { PageData } from './$types';
	let { data }: { data: PageData } = $props();
</script>

<main class=" overflow-hidden px-20 py-10">
	<Carousel {data} />
</main>
