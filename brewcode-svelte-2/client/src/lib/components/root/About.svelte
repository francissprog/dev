<script lang="ts">
	import type { PageData } from '../../../routes/$types';
	let { data }: { data: PageData } = $props();
</script>

<main class="h-[80vh] bg-softGray py-10" id="about">
	<!-- Header division -->
	<div class="flex flex-col gap-5 text-center max-md:gap-3 max-sm:gap-1">
		<span class="text-5xl font-extrabold max-lg:text-3xl max-md:text-xl max-sm:text-lg">
			Explore our Brewcode
		</span>
		<p class="text-md text-slateGray max-lg:text-sm max-md:text-xs max-sm:px-1">
			Discover Brewcode – creating simple, effective solutions to make your <br />
			life easier and more efficient.
		</p>
	</div>

	<!-- Cards Section -->
	<section
		class="flex h-[60vh] flex-row items-center justify-between gap-20 px-20 py-10 max-xl:gap-6 max-lg:flex-col"
	>
		{#each data.aboutContent as { title, description, iconName: Icon, hrefContent }}
			<div
				class="flex h-[300px] w-[500px] flex-col items-center justify-between rounded-3xl bg-white p-4 max-lg:p-3 max-md:h-[200px] max-md:w-[400px] max-md:p-2 max-sm:h-[150px] max-sm:w-auto"
			>
				<!-- Title and description -->
				<div class="flex w-full flex-col items-start justify-start gap-2">
					<span class="max-md:text-md text-xl font-bold max-lg:text-lg max-sm:text-sm">
						{title}
					</span>
					<p class="text-sm text-slateGray max-lg:text-sm max-sm:text-xs">
						{description}
					</p>
				</div>

				<!-- Icon -->
				<Icon
					class="flex h-[90px] w-[90px] items-center justify-center text-slateGray max-lg:h-[60px] max-lg:w-[60px] max-md:h-[40px] max-md:w-[40px] max-sm:hidden"
				/>

				<!-- Button Link -->
				<a
					href={'/auth'}
					class="w-fit rounded-2xl bg-obsidian px-7 py-2 font-bold text-softMist max-lg:hidden"
				>
					{hrefContent}
				</a>
			</div>
		{/each}
	</section>
</main>
