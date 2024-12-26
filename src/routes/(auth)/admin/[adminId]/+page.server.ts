import { fetchData } from '@services/api';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params, parent }) => {
	await parent();
	const getCustomerById = async (customerId: string) => {
		console.log(`Fetched customer id: ${customerId} from database`);
		const customer = await fetchData(`/users/${customerId}`, 'GET');
		return customer.data;
	};

	return {
		customer: await getCustomerById(params.adminId)
	};
};
