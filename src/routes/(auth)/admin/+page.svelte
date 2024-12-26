<script lang="ts">
	import TableData from '@components/TableData.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<main>
	<div>
		<h3>Admin Home</h3>
		{#if data.user}
			<p>You are currently logged in as: {data.user.email}</p>
		{/if}
	</div>
	<h4>Customers:</h4>
	<TableData userData={data.customers} />
</main>

<style lang="postcss">
	h4 {
		padding-top: 1rem;
	}
</style>
