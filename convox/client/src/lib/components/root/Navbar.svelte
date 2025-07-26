<script lang="ts">
	import { MessageSquareLock, AlignRight, X } from '@lucide/svelte';
	import { dynamicIconSize } from '$lib/utils/rootUtils';
	let openNavLinks: boolean = false;
	console.log($dynamicIconSize);
	
</script>

{#if openNavLinks}
	<div
		class={`fixed inset-0 z-10 flex flex-col items-center justify-center bg-black/40   text-2xl  text-white backdrop-blur-md`}
	>
		<button
			class="absolute top-16 right-20 cursor-pointer"
			on:click={() => (openNavLinks = !openNavLinks)}
		>
			{#if openNavLinks}
				<X size={$dynamicIconSize} />
			{/if}
		</button>
		<section class="mt-5 flex flex-col space-y-5 max-md:flex">
			<a href="/" class="hover:underline">Home</a>
			<a href="/auth" class="hover:underline">Login</a>
			<a href="/auth/register" class="hover:underline">Register</a>
		</section>
	</div>
{/if}
<nav class=" flex items-center justify-between py-10">
	<a href="/"><MessageSquareLock size={$dynamicIconSize}/></a>
	<button
		class={`cursor-pointer ${openNavLinks ? 'hidden' : 'block'}`}
		on:click={() => (openNavLinks = !openNavLinks)}
	>
		{#if openNavLinks}
			<X size={$dynamicIconSize} />
		{:else}
			<AlignRight size={$dynamicIconSize} />
		{/if}
	</button>
</nav>
