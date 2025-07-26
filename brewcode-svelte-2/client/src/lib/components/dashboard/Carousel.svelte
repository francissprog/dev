<script lang="ts">
	import type { PageData } from '../../../routes/brewcode/$types';
	import { Star, StarHalf, StarOff } from 'lucide-svelte';
	let { data }: { data: PageData } = $props();
	import { renderStars } from '$lib/utils/helpers/renderStars';
	import { onMount } from 'svelte';
	let cards = data.cards;
	// Automatically change slides every 4 seconds
	const slideInterval = 2000;

	let currentIndex = $state(0);
	// Automatically update currentIndex
	onMount(() => {
		const interval = setInterval(() => {
			currentIndex = (currentIndex + 1) % cards.length;
		}, slideInterval);

		// Clear interval on unmount
		return () => clearInterval(interval);
	});
</script>

<div class="relative mx-auto w-full max-w-4xl flex flex-col justify-center items-center ">
	<!-- Carousel -->
	<div class="relative overflow-hidden rounded-lg ">
		<div
			class="flex transition-transform duration-700"
			style="transform: translateX(-{currentIndex * 100}%)"
		>
			{#each cards as { image, title, rating, price, description }}
				<div class="w-full flex-shrink-0 p-4 ">
					<div class="rounded-lg bg-white p-4 shadow-md">
						<img src={image} alt={title} class="h-48 w-fit rounded-t-lg" />
						<div class="p-4">
							<h2 class="text-lg font-semibold">{title}</h2>
							<p class="text-sm text-gray-600">{description}</p>
							<div class="mt-3 flex items-center justify-between">
								<!-- Ratings with Lucide Icons -->
								<div class="flex items-center gap-5">
									{#each renderStars(rating) as star}
										{#if star === 'full'}
											<Star class="h-4 w-4 text-yellow-500 " />
										{:else if star === 'half'}
											<StarHalf class="h-4 w-4 text-yellow-500" />
										{:else}
											<StarOff class="h-4 w-4 text-gray-300" />
										{/if}
									{/each}
								</div>
								<span class="font-bold ">${price}</span>
							</div>
						</div>
						<div class="flex items-center gap-5 p-4">
							<a
								href="/brewcode/coffee"
								class="rounded-3xl bg-obsidian p-2 px-4 text-softGray max-md:px-2 max-md:py-2 max-sm:text-xs"
								>Buy Now</a
							>
							<a href="/brewcode/cart" class="underline">Add to Cart</a>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
	<!-- Dots Indicator -->
	<div class="mt-4 flex justify-center space-x-2">
		{#each cards as _, index}
			<div
				class="h-3 w-3 rounded-full bg-gray-500"
				class:opacity-50={index !== currentIndex}
				class:opacity-100={index === currentIndex}
			></div>
		{/each}
	</div>
</div>
