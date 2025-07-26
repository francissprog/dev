<script lang="ts">
	import { page } from '$app/stores';
	import { routeContentMap } from '$lib/stores/content/path';
	import { CircleUser, Search } from 'lucide-svelte';
	let currentRoute: string;
	let dynamicContent: string;
	$: currentRoute = $page.url.pathname;
	$: dynamicContent = routeContentMap[currentRoute] ?? 'Welcome to Brewcode';
	$: userImage = $page.data.session?.user?.image;
</script>

<!-- Horizontal Navbar -->
<nav class={`flex w-[90wh] items-center justify-between py-7 `}>
	<section class=" w-52">
		<span class="text-4xl tracking-wide">
			{dynamicContent}
		</span>
	</section>
	<!-- search -->
	<div class="relative h-fit">
		<input
			type="text"
			placeholder={`Search for Coffee`}
			class="border-1 w-fit rounded-3xl border border-black px-8 py-2 outline-none focus:border-2"
		/>
		<button class="absolute right-4 top-2 text-slateGray"><Search /></button>
	</div>
	<div>
		{#if userImage}<a href="/brewcode/settings"
				><img src={userImage} alt="userImage" class="h-12" /></a
			>
		{:else}<a href="/brewcode/settings"><CircleUser /></a>
		{/if}
	</div>
</nav>
