// See https://svelte.dev/docs/kit/types#app.d.ts

import type { UserInfo } from './interfaces';

// for information about these interfaces
declare global {
	namespace App {
		interface Locals {
			user: UserInfo | null; // Your type here
		}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
