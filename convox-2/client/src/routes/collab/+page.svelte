<script lang="ts">
	let username: string = '';
	let email: string = '';
	let message: string = '';

	// function to handle submission of Message
	const onMessage = async () => {

    };
</script>

<section class=" min-h-[90vh]">
	<form on:submit={onMessage} class="flex flex-col gap-3 items-start justify-center h-[50vh]">
        <input type="text" bind:value={username} placeholder="Name">
    </form>
</section>
