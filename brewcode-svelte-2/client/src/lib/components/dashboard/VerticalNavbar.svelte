<script lang="ts">
	import { Coffee, LogOut } from 'lucide-svelte';
	import { page } from '$app/stores';
	import { onLogout } from '$lib/utils/actions/logout';
	import { navItems } from '$lib/stores/content/path';
	$: pathname = $page.url.pathname;
</script>

<!-- Sidebar -->
<nav
	class={`fixed left-0 top-0 flex h-full w-32 flex-col items-center justify-between bg-gray-200 py-10 text-foreground`}
>
	<!-- Sidebar Content -->
	<section class="flex w-full flex-col items-center gap-20">
		<!-- logo -->
		<a href="/brewcode"><Coffee /></a>
		<div
			class="flex w-full flex-col items-center gap-7 text-white
"
		>
			{#each navItems as { label: IconComponent, href }}
				<a
					{href}
					class="rounded-lg p-4 text-obsidian transition-all hover:bg-obsidian hover:text-white"
					class:text-white={pathname === href}
					class:bg-obsidian={pathname === href}
				>
					<IconComponent />
				</a>
			{/each}
		</div>
	</section>
	<button class="rounded-lg bg-obsidian p-4 text-softMist" on:click={() => onLogout()}
		><LogOut /></button
	>
</nav>
