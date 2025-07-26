<script lang="ts">
	import VerticalNavbar from '$lib/components/dashboard/VerticalNavbar.svelte';
	import HorizontalNavbar from '$lib/components/dashboard/HorizontalNavbar.svelte';
	let { children } = $props();
</script>

<main class="flex h-screen">
	<!-- Vertical Navbar -->
	<VerticalNavbar />

	<!-- Content Wrapper -->
	<div class={`ml-[130px] flex flex-1 flex-col px-10 `}>
		<!-- Horizontal Navbar -->
		<HorizontalNavbar />

		<!-- Main Content Area -->
		<div class="flex flex-1 ">
			{@render children()}
		</div>
	</div>
</main>
