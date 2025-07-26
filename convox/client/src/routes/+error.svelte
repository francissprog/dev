<script lang="ts">
	import { page } from '$app/state';

	console.error(page.error?.message, page.status);
</script>

<section class="min-h-screen">
	<div class="flex h-[70vh] items-center justify-center gap-2">
		<span>{page.status}</span>
		<span>{page.error?.message}</span>
	</div>
</section>
