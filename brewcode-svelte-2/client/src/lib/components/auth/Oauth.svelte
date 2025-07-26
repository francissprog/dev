<script lang="ts">
	import { page } from '$app/stores';
	import { signIn } from '@auth/sveltekit/client';
	import { Github } from 'lucide-svelte';
</script>

<button
	type="button"
	class="flex w-full items-center gap-4 bg-gray-700 px-10 py-3 text-center text-white"
	on:click={() => signIn('github')}
	>{#if $page.url.pathname === '/auth'}
		Login
	{:else}
		Register
	{/if} with Github <Github /></button
>
