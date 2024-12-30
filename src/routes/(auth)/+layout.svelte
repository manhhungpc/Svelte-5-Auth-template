<script>
	import SideBar from '@components/SideBar.svelte';

	let { children } = $props();
</script>

<div class="flex h-full">
	<SideBar />
	<div class="flex-1">
		{@render children()}
	</div>
</div>
