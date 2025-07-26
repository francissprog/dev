<script lang="ts">
	import { MessageSquareLock, AlignRight, X } from '@lucide/svelte';
	let openNavLinks: boolean = false;
	import { dynamicIconSize, preferedDarkUser } from '$lib';

	$: toggler = $preferedDarkUser;
	const closeAfterClicked = () => (openNavLinks = false);
</script>

{#if openNavLinks}
	<div
		class="fixed inset-0 z-10 flex flex-col items-center justify-center bg-black/40 text-2xl text-white backdrop-blur-md max-sm:text-lg"
	>
		<!-- Close Button -->
		<button
			class="absolute top-10 right-16 cursor-pointer"
			on:click={() => (openNavLinks = !openNavLinks)}
		>
			{#if openNavLinks}
				<X size={$dynamicIconSize} />
			{/if}
		</button>

		<!-- Nav Links -->
		<div
			class="mt-5 flex flex-col items-start space-y-5 text-center max-md:space-y-4 max-sm:space-y-3"
		>
			<a href="/" class="hover:underline" on:click={closeAfterClicked}>Home</a>
			<a href="/auth" class="hover:underline" on:click={closeAfterClicked}>Login</a>
			<a href="/auth/register" class="hover:underline" on:click={closeAfterClicked}>Register</a>
			<a href="/collab" class="hover:underline" on:click={closeAfterClicked}>Collab Here</a>
			<span class="max-sm:text-base">
				Change to
				<button
					class="cursor-pointer underline"
					on:click={() => preferedDarkUser.set(!$preferedDarkUser)}
				>
					{toggler ? 'Light ' : 'Dark '}Mode
				</button>
			</span>
		</div>
	</div>
{/if}

<nav class="flex w-full items-center justify-between">
	<a href="/">
		<MessageSquareLock size={$dynamicIconSize} />
	</a>
	<button class="cursor-pointer" on:click={() => (openNavLinks = !openNavLinks)}
		><AlignRight size={$dynamicIconSize} /></button
	>
</nav>
