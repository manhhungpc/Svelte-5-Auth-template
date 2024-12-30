<script lang="ts">
	import '../app.pcss';
	import { page } from '$app/state';

	let { children, data } = $props();

	const hiddenNavbarRoute: string[] = [];
	let showNavbar = $state(true);
	$effect(() => {
		showNavbar = !hiddenNavbarRoute.includes(page.url.pathname);
	});
	// Use $inspect() to debug/console.log the data
	// $inspect(data);
</script>

<div class="h-full flex flex-col">
	{#if showNavbar}
		<div class="navbar">
			<a href="/" class="btn">Home</a>
			<a href="/admin" class="btn">Admin</a>
			{#if data.user}
				<form action="/logout" method="POST">
					<button class="btn btn-primary">Logout</button>
				</form>
			{:else}
				<a href="/login" class="btn">Login</a>
			{/if}
		</div>
	{/if}

	<div class="content">
		{@render children()}
	</div>
</div>

<style lang="postcss">
	.navbar {
		display: flex;
		align-items: center;
		justify-content: center;
		/* padding: 10px; */
		height: 60px;
		gap: 1rem;
		border-bottom: 1px solid #707a84;
		& .btn {
			padding: 5px 10px;
			font-size: 12px;
			background-color: inherit;
			border: 2px solid white;
			color: white;
			&:hover {
				background-color: #22272b;
			}
		}
	}

	.content {
		flex: 1;
	}
</style>
