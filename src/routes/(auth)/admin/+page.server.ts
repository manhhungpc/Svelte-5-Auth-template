import { fetchData } from '@services/api';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ parent }) => {
	await parent();
	const getCustomers = async () => {
		const customers = await fetchData('/users?limit=10', 'GET');
		return customers.data.users;
	};

	return {
		customers: await getCustomers()
	};
};
