<script lang="ts">
	import type { PageData } from '../../../routes/$types';

	let { data }: { data: PageData } = $props();
</script>

<main class="h-[80vh] bg-background py-10" id="selling">
	<!-- Header Division -->
	<div class="flex flex-col gap-5 text-center max-md:gap-3 max-sm:gap-2">
		<span class="text-5xl font-extrabold max-lg:text-3xl max-md:text-xl max-sm:text-lg">
			Best Selling Coffee
		</span>
	</div>

	<!-- Cards Section -->
	<section
		class="flex h-[60vh] flex-row items-center justify-between gap-20 px-20 py-10 max-xl:gap-10 max-lg:flex-col max-lg:gap-6 max-md:px-5 max-sm:flex-col max-sm:gap-3"
	>
		{#each data.sellingContent as { title, description, image, price }}
			<section
				class="flex h-[300px] w-[500px] flex-col items-center justify-between rounded-3xl bg-white p-4 max-lg:p-3 max-md:h-[200px] max-md:w-[400px] max-md:gap-3 max-md:p-3 max-sm:h-auto max-sm:w-full max-sm:px-2 max-sm:py-3"
			>
				<!-- Title and Description -->
				<div class="flex w-full flex-col items-start justify-start gap-3 max-sm:gap-2">
					<div class="flex items-center gap-3">
						<img
							src={image}
							alt="coffeeImage"
							class="h-[90px] w-[90px] rounded-lg object-cover max-lg:h-[60px] max-lg:w-[60px] max-md:h-[50px] max-md:w-[50px] max-sm:hidden"
						/>
						<span class="max-md:text-md text-xl font-bold max-lg:text-lg max-sm:text-base">
							{title}
						</span>
					</div>
					<p class="text-sm text-slateGray max-lg:text-sm max-sm:text-xs">
						{description}
					</p>
				</div>

				<div class="flex w-full flex-row items-center justify-between gap-3 px-2 max-md:px-0">
					<!-- Button Link -->
					<a
						href="/brewcode/coffee"
						class="w-fit rounded-2xl bg-obsidian px-7 py-2 font-bold text-softMist max-lg:px-4 max-lg:py-1 max-md:px-3 max-sm:px-2 max-sm:py-1 max-sm:text-xs"
					>
						Buy {title}
					</a>
					<!-- Price -->
					<span class="max-lg:text-md text-lg font-semibold text-gray-800 max-sm:text-sm">
						${price}
					</span>
				</div>
			</section>
		{/each}
	</section>
</main>
