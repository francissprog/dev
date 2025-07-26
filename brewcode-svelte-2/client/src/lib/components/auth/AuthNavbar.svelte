<script lang="ts">
	import { CodeXml, ListTree, X, CircleX } from 'lucide-svelte';
	let openNavLinks: boolean = false;
	const createAccount: string = 'Create an Account';
	const signIn: string = 'Sign In';
	import { page } from '$app/state';
</script>

<nav class="flex flex-row items-center justify-between px-20 py-10 max-md:px-10">
	<a href="/"><CodeXml /></a>

	<!-- Desktop Navigation -->
	<section class="flex flex-row items-center space-x-10 max-md:hidden">
		<a href="/auth" class="hover:underline">{signIn}</a>
		<a
			href="/auth/register"
			class={`border-1 border border-obsidian p-2 text-obsidian transition-all hover:bg-obsidian hover:text-white ${page.url.pathname === '/auth/register' ? 'bg-obsidian text-white' : ''}`}
			>{createAccount}</a
		>
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
					<CircleX />
				{:else}
					<ListTree />
				{/if}
			</button>
			<section class="mt-5 flex flex-col space-y-5 max-md:flex">
				<a href="/auth" class="hover:underline">{signIn}</a>
				<a href="/auth/register" class="hover:underline">{createAccount}</a>
			</section>
		</div>
	{/if}
</nav>
