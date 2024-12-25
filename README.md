# SvelteKit Auth Template

Everything you need to build a Svelte project, powered by [`sv`](https://github.com/sveltejs/cli).

Get started with Svelte and SvelteKit:

- https://svelte.dev/tutorial/svelte/welcome-to-svelte
- https://svelte.dev/docs/kit/introduction

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.

## Concept of SvelteKit:

At its core, SvelteKit’s job boils down to three things:

1. Routing — figure out which route matches an incoming request
2. Loading — get the data needed by the route
3. Rendering — generate some HTML (on the server) or update the DOM (in the browser)

For more information, checkout tutorial: https://svelte.dev/tutorial/kit/page-data

## Directory

https://svelte.dev/docs/kit/routing

- `src/hooks.server.ts`: Hooks running for every request
- `lib/server`: Code for authentication, server-side action
- `routes/(auth)/*`: Protected route here, need logged in
- `store/writable.ts`: For traditional stores, using **writable()**
- `store/runes/*.svelte.ts`: For global state reactivity with **$state()** of Svelte5
