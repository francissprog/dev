<script lang="ts">
	import Navbar from './Navbar.svelte';
	import { scrollToSection } from '$lib/utils/ui/scroll';
	import coffeeImage from '$lib/assets/coffee.png';
	import { ChevronUp } from 'lucide-svelte';
</script>

<main class="h-screen bg-background" id="home">
	<Navbar />
	<main class="flex h-[80vh] items-center justify-between px-20 py-10 max-md:px-10">
		<div class="flex flex-col gap-5">
			<!-- Title Section -->
			<div
				class="flex flex-col items-start text-[80px] font-bold leading-[70px] max-md:text-6xl max-md:leading-[50px] max-sm:text-4xl"
			>
				<span>Let</span>
				<span>&lt;Brewcode/&gt;</span>
				<span>Brew!</span>
			</div>

			<!-- Subheading Section -->
			<div class="flex flex-col text-xl text-slateGray max-md:text-lg max-sm:text-xs">
				<p>Great coffee. Creative vibes. Your next favorite spot awaits.</p>
			</div>

			<!-- Button Section -->
			<div
				class="flex flex-row items-center gap-10 text-lg font-normal max-md:text-sm max-sm:flex-col max-sm:items-start max-sm:gap-4 max-sm:text-xs"
			>
				<a
					href="/auth"
					class="rounded-3xl bg-obsidian p-2 px-4 text-softGray max-md:px-2 max-md:py-2 max-sm:text-xs"
				>
					<span>Get yours Now!</span>
				</a>
				<button class="underline" on:click={() => scrollToSection('footer')}>Let's Collab</button>
			</div>
		</div>
		<div class="max-md:hidden max-sm:hidden">
			<img src={coffeeImage} alt="coffee" class=" w-[600px] max-lg:w-[400px] max-sm:w-[200px]" />
		</div>
	</main>
</main>
