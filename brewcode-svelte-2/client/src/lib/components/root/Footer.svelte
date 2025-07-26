<script>
	import { Instagram, Facebook, Mail, Github } from 'lucide-svelte';
	import { scrollToSection } from '$lib/utils/ui/scroll';
</script>

<footer class="bg-obsidian px-20 py-10 text-white max-md:px-10 max-md:py-2" id="footer">
	<div class="container mx-auto grid gap-6 px-6 py-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
		<!-- Navigation Links -->
		<nav aria-labelledby="footer-navigation">
			<h2 id="footer-navigation" class="text-lg font-semibold max-md:text-base max-sm:text-sm">
				Quick Links
			</h2>
			<div class="mt-4 flex flex-col items-start space-y-2">
				<button
					on:click={() => scrollToSection('home')}
					class="text-base hover:underline max-md:text-sm max-sm:text-xs"
				>
					Home
				</button>
				<button
					on:click={() => scrollToSection('about')}
					class="text-base hover:underline max-md:text-sm max-sm:text-xs"
				>
					About
				</button>
				<button
					on:click={() => scrollToSection('selling')}
					class="text-base hover:underline max-md:text-sm max-sm:text-xs"
				>
					Selling
				</button>
			</div>
		</nav>

		<!-- Social Media -->
		<section aria-labelledby="footer-social">
			<h2 id="footer-social" class="text-lg font-semibold max-md:text-base max-sm:text-sm">
				Follow Us
			</h2>
			<div class="mt-4 flex space-x-4">
				<a
					href="https://www.facebook.com/francis.gil.2024"
					class="text-gray-400 hover:text-white"
					aria-label="Facebook"
				>
					<Facebook />
				</a>
				<a
					href="https://www.instagram.com/francis_prog/"
					class="text-gray-400 hover:text-white"
					aria-label="Instagram"
				>
					<Instagram />
				</a>
				<a
					href="https://github.com/Franciss-prog/Franciss-prog"
					class="text-gray-400 hover:text-white"
					aria-label="Github"
				>
					<Github />
				</a>
			</div>
		</section>

		<!-- Contact Information -->
		<address aria-labelledby="footer-contact" class="not-italic">
			<h2 id="footer-contact" class="text-lg font-semibold max-md:text-base max-sm:text-sm">
				Contact Us
			</h2>
			<ul class="mt-4 space-y-2 text-gray-400">
				<li class="flex items-center gap-2 text-base max-md:text-sm max-sm:text-xs">
					<Mail />
					<a
						href="https://mail.google.com/mail/u/0/#sent?compose=GTvVlcRzDCwfDlbBzkJMnbbpFVKcZPrknsTdbmsbKjfMGxQbbbsnfRHPhGXDQHmswSxdCdJXpCPlX"
						class="hover:text-white"
						target="_blank"
					>
						francisgil.prog
					</a>
				</li>
			</ul>
		</address>
	</div>

	<!-- Footer Bottom -->
	<div class="mt-8 border-t border-gray-700 pt-6 text-center text-sm text-white max-md:text-xs">
		&copy; 2025 Brewcode. All rights reserved.
	</div>
</footer>
