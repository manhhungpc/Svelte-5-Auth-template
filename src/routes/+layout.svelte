<script lang="ts">
	import '../app.pcss';

	let { children, data } = $props();

	// Use $inspect() to debug/console.log the data
	// $inspect(data);
</script>

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

{@render children()}
