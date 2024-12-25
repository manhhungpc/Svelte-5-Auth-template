<script lang="ts">
	import { enhance } from '$app/forms';
	import type { ActionData } from './$types';

	const { form }: { form: ActionData } = $props();
	$inspect(form);
</script>

<div class="button-container">
	<form use:enhance action="?/login" method="POST">
		<input type="email" name="email" placeholder="Email" required />
		<input type="password" name="password" placeholder="Password" required />

		<button type="submit">Submit</button>
	</form>
	<div>
		{#if form?.errors}
			{#each form.errors as error}
				<div>{error.message}</div>
			{/each}
		{/if}
	</div>
</div>
