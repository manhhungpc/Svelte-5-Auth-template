import { PUBLIC_API_URL } from '$env/static/public';
import { HTTP_STATUS } from '@utils/constants';
import { globalState } from '@store/runes/global.svelte';
import type { Method } from '@types/index';

export async function fetchData(url: string, method: Method, options?: RequestInit) {
	globalState.isLoadingApi = true;
	try {
		const response = await fetch(PUBLIC_API_URL + url, { method, ...options });
		if (response.status != HTTP_STATUS.OK) throw new Error('API request failed');
		const data = await response.json();
		return {
			success: true,
			data: data,
			error: null
		};
	} catch (error) {
		return {
			success: false,
			data: null,
			error: error
		};
	} finally {
		globalState.isLoadingApi = false;
	}
}
