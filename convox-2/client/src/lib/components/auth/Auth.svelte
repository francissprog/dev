<script lang="ts">
	import { page } from '$app/stores';
	import { preferedDarkUser } from '$lib/stores/rootStores';
	import { successMessage } from '$lib';
	import { inputFieldStyle } from '$lib';
	// user creds
	let username: string = '';
	let email: string = '';
	let password: string = '';
	let confirmPassword: string = '';
	let usernameOrEmail: string = '';

	// ui states
	let isLoading: boolean = false;
	// reactive variables
	$: isLoginRoute = $page.url.pathname === '/auth';
	$: isRegisterRoute = $page.url.pathname === '/auth/register';

	// function to handle authentication
	const handleAuth = async () => {
		isLoading = true;

		if (!username) {
			successMessage({ message: 'text', icon: 'success', loading: isLoading });
			return;
		}
	};
</script>

<form
	on:submit|preventDefault={handleAuth}
	class={`flex h-[90vh] w-full flex-col items-start justify-center gap-10 px-20 max-md:px-10 max-sm:px-0 ${isLoading ? 'opacity-50' : 'opacity-100'}`}
>
	<span class="font-stardock text-5xl font-bold tracking-widest max-md:text-3xl max-sm:text-xl"
		>{isLoginRoute ? 'LOGIN' : 'REGISTER'}</span
	>

	<div class="flex w-full flex-col gap-5">
		{#if isLoginRoute}
			<input
				type="text"
				class={`${inputFieldStyle}`}
				bind:value={usernameOrEmail}
				disabled={isLoading}
				placeholder="Username/Email"
			/>
		{:else}
			<input
				type="email"
				class={`${inputFieldStyle}`}

				disabled={isLoading}
				placeholder="Username"
				bind:value={username}
			/>
		{/if}
		{#if isRegisterRoute}
			<input
				type="email"
				class={`${inputFieldStyle}`}

				disabled={isLoading}
				bind:value={email}
				placeholder="Email"
			/>
		{/if}
		<input
			type="password"
			class={`${inputFieldStyle}`}

			disabled={isLoading}
			bind:value={password}
			placeholder="Password"
		/>
		{#if isRegisterRoute}
			<input
				type="password"
				class={`${inputFieldStyle}`}

				disabled={isLoading}
				bind:value={confirmPassword}
				placeholder="Confirm Password"
			/>
		{/if}
	</div>

	<button
		disabled={isLoading}
		class={`font-stardock max-sm:text-md cursor-pointer text-xl font-bold tracking-widest max-md:text-lg ${$preferedDarkUser ? 'bg-white text-black' : 'bg-black text-white'} w-full p-3 outline-none max-md:p-2 max-sm:p-1`}
	>
		{#if isLoading}
			<div class="flex h-auto items-center justify-center">
				<div
					class={`h-7 w-7 animate-spin rounded-full border-4 ${$preferedDarkUser ? 'border-black' : 'border-white'} border-t-transparent`}
				></div>
			</div>
		{:else}
			{isLoginRoute ? 'LOGIN' : 'REGISTER'}
		{/if}</button
	>
	<span
		>{isLoginRoute ? "Doesn't" : 'Already'} have an Account?

		{#if isLoginRoute}
			<a href="auth/register" class="underline">Register Here</a>
		{:else}
			<a href="/auth" class="underline">Login Here</a>
		{/if}
	</span>
</form>
