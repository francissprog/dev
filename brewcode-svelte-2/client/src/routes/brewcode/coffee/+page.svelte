<script>
	import { page } from '$app/stores';
	import { Plus, Minus } from 'lucide-svelte';
	let index = 0;
</script>

<main class="flex h-[150vh] items-start justify-start">
	<section class="grid w-full grid-cols-3 items-start justify-center gap-10 text-justify">
		{#each $page.data.coffees as { name, description, price, image }}
			<!-- conatiner -->
			<div
				class=" broder-1 flex h-[300px] flex-col items-start justify-between rounded-xl border p-3 shadow-xl"
			>
				<img src={image} alt={name} class="h-24" />
				<span>{name}</span>
				<span class="text-sm">{description}</span>
				<span>${price}</span>
				<div class="flex items-center gap-2">
					<button>Buy Now</button>
					<div class="flex flex-row items-center gap-2">
						<!-- button for add -->
						<button><Plus /></button>
						<input type="text" readonly value={index} />
						<button><Minus /></button>
					</div>
				</div>
			</div>
		{/each}
	</section>
</main>
