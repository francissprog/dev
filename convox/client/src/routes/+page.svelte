<script lang="ts">
	import { Footer, Navbar } from '$lib';
</script>

<Navbar />
<section class="min-h-screen overflow-hidden px-20 max-md:px-16 max-md:py-7">
	<div
		class="flex h-[70vh] flex-col justify-center gap-3 text-2xl tracking-widest max-md:text-xl max-sm:text-lg"
	>
		<span class="font-stardock text-6xl font-bold max-lg:text-4xl max-md:text-3xl max-sm:text-xl"
			>WELCOME TO <br /> CONVOX!</span
		>
		<div class=" font-michroma flex flex-col gap-2 tracking-normal">
			<p>A simple Chat System Web Application</p>
			<span>Want to Chit Chat Now? <a href="/dashboard" class="underline">Click Here</a></span>
		</div>
	</div>
</section>
<Footer />
