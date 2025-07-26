<script lang="ts">
	import type { PageData } from './$types';
	import Home from '$lib/components/root/Home.svelte';
	import About from '$lib/components/root/About.svelte';
	import Selling from '$lib/components/root/Selling.svelte';
	import Footer from '$lib/components/root/Footer.svelte';
	let { data }: { data: PageData } = $props();
</script>

<Home />
<About {data} />
<Selling {data} />
<Footer />
