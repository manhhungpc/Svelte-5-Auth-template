<script lang="ts">
	import { Accordion } from 'bits-ui';
	import { inlineSvg } from '@svelte-put/inline-svg';
	import CarretDownSvg from '$lib/assets/icon/carret-down.svg';

	interface NavigationTree {
		title: string;
		path?: string;
		children?: NavigationTree[];
	}

	const {} = $props();
	const routes: NavigationTree[] = [
		{ title: 'User', path: '/user' },
		{ title: 'Connection', path: '/connection' },
		{
			title: 'Date',
			children: [
				{ title: 'Month', path: '/date/month' },
				{ title: 'Year', path: '/date/year' }
			]
		},
		{
			title: 'Notify',
			children: [{ title: 'Notify child', path: '/notify' }]
		}
	];
</script>

<div class="flex flex-col w-64 bg-gray-800 h-full p-4 text-gray-200">
	<h1 class="text-xl font-bold mb-6">Statistics</h1>
	{#each routes as route}
		{#if route.path}
			<a href={route.path}>{route.title}</a>
		{:else if route.children}
			<Accordion.Root class="w-full ">
				<Accordion.Item value={route.title} class="group ">
					<Accordion.Header>
						<Accordion.Trigger
							class="flex w-full flex-1 select-none items-center justify-between transition-all [&[data-state=open]>span>*]:rotate-180"
						>
							<span class="w-full text-left">
								{route.title}
							</span>
							<span
								class="inline-flex size-8 items-center justify-center rounded-[7px] bg-transparent transition-all hover:bg-dark-10"
							>
								<svg use:inlineSvg={CarretDownSvg} height="20" fill="#fff" />
							</span>
						</Accordion.Trigger>
					</Accordion.Header>
					{#each route.children as routeChild}
						<Accordion.Content
							class="overflow-hidden flex  mb-2 data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
						>
							<!-- <div class="bg-slate-50"> -->
							<a href={routeChild.path} class="p-2 pl-5 flex-1 w-full bg-gray-600"
								>{routeChild.title}</a
							>
							<!-- </div> -->
						</Accordion.Content>
					{/each}
				</Accordion.Item>
			</Accordion.Root>
		{/if}
	{/each}
</div>
