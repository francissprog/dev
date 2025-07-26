<script lang="ts">
	import { scrollToSection } from '../root/scroll';
	import { CodeXml, ListTree } from 'lucide-svelte';

</script>

<nav class="flex flex-row items-center justify-between px-20 py-10 max-md:px-10">
	<a href="/"><CodeXml /></a>
	<section class="flex flex-row items-center space-x-10 max-md:hidden" id="nav-links">
		<button on:click={() => scrollToSection("home")} class="hover:underline">Home</button>
		<button on:click={() => scrollToSection("about")} class="hover:underline">About</button>
		<button on:click={() => scrollToSection("selling")} class="hover:underline">Selling</button>
	</section>
	<section class="hidden flex-row items-center space-x-10 max-md:flex">
		<button class="outline-none"><ListTree /></button>
	</section>
</nav>
