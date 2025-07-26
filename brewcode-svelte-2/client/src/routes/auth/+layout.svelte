<script lang="ts">
	import AuthNavbar from '$lib/components/auth/AuthNavbar.svelte';
	let { children } = $props();
</script>

<main class="h-screen overflow-y-hidden">
	<AuthNavbar />
	{@render children()}
</main>
