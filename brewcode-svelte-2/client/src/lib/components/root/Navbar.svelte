<script lang="ts">
	import { CodeXml, ListTree, X } from 'lucide-svelte';
	import { scrollToSection } from '$lib/utils/ui/scroll';
	let openNavLinks: boolean = false;

	const sections = ['home', 'about', 'selling'];
</script>

<nav class="flex flex-row items-center justify-between px-20 py-10 max-md:px-10">
	<a href="/"><CodeXml /></a>

	<!-- Desktop Navigation -->
	<section class="flex flex-row items-center space-x-10 max-md:hidden" id="nav-links">
		{#each sections as section}
			<button on:click={() => scrollToSection(section)} class="capitalize hover:underline">
				{section}
			</button>
		{/each}
	</section>

	<!-- Mobile Toggle -->
	<section class="hidden flex-row items-center space-x-10 max-md:flex">
		<button
			class="rounded-lg bg-obsidian p-1 text-softMist outline-none"
			on:click={() => (openNavLinks = !openNavLinks)}
			aria-expanded={openNavLinks}
			aria-label="Toggle Navigation"
		>
			<ListTree />
		</button>
	</section>

	<!-- Mobile Navigation -->
	{#if openNavLinks}
		<div
			class={`fixed inset-0 z-10 flex flex-col items-center justify-center bg-softGray bg-opacity-90 ${openNavLinks ? 'block' : 'hidden'}`}
		>
			<button class="absolute right-10 top-10" on:click={() => (openNavLinks = !openNavLinks)}>
				{#if openNavLinks}
					<X />
				{:else}
					<ListTree />
				{/if}
			</button>
			<section class="mt-5 flex flex-col space-y-5 max-md:flex">
				<a href="/">Home</a>
				<a href="/auth">Login</a>
				<a href="/auth/register">Register</a>
			</section>
		</div>
	{/if}
</nav>
