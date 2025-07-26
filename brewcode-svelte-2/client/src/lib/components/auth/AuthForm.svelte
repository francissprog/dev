<script lang="ts">
	import { page } from '$app/stores';
	import { Eye, EyeOff, Github } from 'lucide-svelte';
	import { formStyle } from '$lib/utils/ui/styleUtils';
	import { errorMessage } from '$lib/utils/ui/alertUtils';
	import { auth, register } from '$lib/utils/actions/authUser';
	import { loading } from '$lib/stores/loading';
	import Loading from '$lib/components/root/Loading.svelte';
	import { signIn } from '@auth/sveltekit/client';

	// Detect if the current page is login or register
	let isLoginPage: boolean = $page.url.pathname === '/auth';

	// Shared states
	let showPassword: boolean = false;
	let showConfirmPassword: boolean = false;
	let username: string = '';
	let email: string = '';
	let password: string = '';
	let confirmPassword: string = '';
	$: isLoading = $loading;

	// Handlers
	const handleSubmit = async (e: Event) => {
		e.preventDefault();
		loading.set(true);

		// Validate form inputs
		if (!username || !password || (!isLoginPage && !email)) {
			errorMessage('Please fill in all fields', 'warning');
			loading.set(false);
			return;
		}

		if (!isLoginPage && password !== confirmPassword) {
			errorMessage("Passwords don't match", 'warning');
			password = '';
			confirmPassword = '';
			loading.set(false);
			return;
		}

		// Execute the correct action (login or register)
		try {
			isLoginPage
				? await auth({ username, password })
				: await register({ username, email, password });
		} finally {
			loading.set(false);
		}
	};
</script>

<form
	class="flex w-full flex-col gap-8 px-[200px] max-lg:px-[50px] max-md:px-0"
	on:submit={handleSubmit}
>
	<span class="text-6xl font-bold tracking-widest text-obsidian max-md:text-4xl max-sm:text-2xl">
		{isLoginPage ? 'Login to Your Account' : 'Register an Account'}
	</span>

	<section class="flex flex-col gap-5">
		<!-- Username -->
		<input type="text" placeholder="Username" class={formStyle} bind:value={username} />

		<!-- Email (only for registration) -->
		{#if !isLoginPage}
			<input type="email" placeholder="Email" class={formStyle} bind:value={email} />
		{/if}

		<!-- Password -->
		<div class="relative flex flex-row items-center justify-between">
			<input
				type={showPassword ? 'text' : 'password'}
				placeholder="Password"
				class={formStyle}
				bind:value={password}
			/>
			<button
				class="absolute right-3"
				type="button"
				on:click={() => (showPassword = !showPassword)}
			>
				{#if showPassword}
					<Eye class="cursor-pointer" />
				{:else}
					<EyeOff class="cursor-pointer" />
				{/if}
			</button>
		</div>

		<!-- Confirm Password (only for registration) -->
		{#if !isLoginPage}
			<div class="relative flex w-full flex-row items-center justify-between">
				<input
					type={showConfirmPassword ? 'text' : 'password'}
					placeholder="Confirm Password"
					class={formStyle}
					bind:value={confirmPassword}
				/>
				<button
					class="absolute right-3"
					type="button"
					on:click={() => (showConfirmPassword = !showConfirmPassword)}
				>
					{#if showConfirmPassword}
						<Eye class="cursor-pointer" />
					{:else}
						<EyeOff class="cursor-pointer" />
					{/if}
				</button>
			</div>
		{/if}

		<!-- Submit Button -->
		<div class="flex flex-col gap-5">
			<button class=" rounded-xl bg-obsidian p-2 text-white max-md:w-full" disabled={isLoading}>
				{#if isLoading}
					<Loading />
				{:else}
					{isLoginPage ? 'Login' : 'Register'}
				{/if}
			</button>
			<section class="flex flex-col items-start gap-4">
				<span class="flex w-full items-center justify-center text-center">or</span>
				<button
					on:click={() => signIn('github')}
					type="button"
					class="flex w-full items-center justify-center gap-5 bg-slate-600 p-2 text-white"
					>{isLoginPage ? 'Login' : 'Register'} with Github <Github /></button
				>
			</section>
			<span>
				{#if isLoginPage}
					Don't have an account? <a href="/auth/register" class="underline">Register Here</a>
				{:else}
					Already have an account? <a href="/auth" class="underline">Login Here</a>
				{/if}
			</span>
		</div>
	</section>
</form>
