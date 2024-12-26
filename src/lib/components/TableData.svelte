<script lang="ts">
	import type { UserInfo } from '@interfaces/index';
	import { globalState } from '@store/runes/global.svelte';

	interface Props {
		userData: UserInfo[];
	}

	const { userData }: Props = $props();

	function handleAction(itemId: number) {}
</script>

<div class="p-4 max-w-4xl mx-auto">
	<h1 class="text-2xl font-bold mb-4">Data List</h1>

	{#if globalState.isLoadingApi}
		<p class="text-gray-500">Loading...</p>
	{:else if userData.length === 0}
		<p class="text-red-500">No data available</p>
	{:else}
		<ul class="divide-y divide-gray-200">
			{#each userData as item (item.id)}
				<div class="flex justify-between p-4 hover:bg-gray-900">
					<div class="flex items-center gap-5">
						<p class="text-lg font-medium">{`${item.firstName} ${item.lastName}`}</p>
						<p class="text-sm text-gray-500">{item.email}</p>
					</div>

					<button
						onclick={() => handleAction(item.id)}
						class="inline-flex items-center px-3 py-1.5 text-sm font-medium text-white bg-blue-600 rounded hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
					>
						Action
					</button>
				</div>
			{/each}
		</ul>
	{/if}
</div>
