<script lang="ts">
	import { enhance } from '$app/forms';
	import type { ActionData } from './$types';

	const { form }: { form: ActionData } = $props();
	$inspect(form);
</script>

<div class=" w-full h-full flex justify-center items-center">
	<form
		use:enhance
		action="?/login"
		method="POST"
		class="flex flex-col items-center bg-slate-700 p-10 rounded-lg"
	>
		<p class="text-xl mb-5">Admin page</p>
		<input type="email" name="email" placeholder="Email" required />
		<input type="password" name="password" placeholder="Password" required />

		<div>
			{#if form?.errors}
				{#each form.errors as error}
					<div>{error.message}</div>
				{/each}
			{/if}
		</div>
		<button type="submit" class="bg-yellow-700 w-full p-2">Submit</button>
	</form>
</div>
