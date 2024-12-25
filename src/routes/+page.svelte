<script lang="ts">
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<main>
	<h1>Is Auth in +layout sufficient?</h1>
	<p>Let's find out if it can be trusted.</p>
	{#if data.user}
		Logged in as: {data.user.email}
	{/if}
</main>
