<script lang="ts">
	import { preferedDarkUser, dynamicIconSize } from '$lib';
	import { Sun, Moon, MailSearch } from '@lucide/svelte';
</script>

<footer class="flex h-20 w-full items-center justify-between text-2xl">
	<a href="/mail" class="underline max-md:hidden">Collab Here</a>
	<a href="/mail" class="hidden underline max-md:block max-md:no-underline"
		><MailSearch size={$dynamicIconSize} /></a
	>
	<button
		class="cursor-pointer"
		on:click={() => {
			preferedDarkUser.set(!$preferedDarkUser);
		}}
	>
		{#if $preferedDarkUser}
			<Moon size={$dynamicIconSize}/>
		{:else}
			<Sun size={$dynamicIconSize}  />
		{/if}
	</button>
</footer>
