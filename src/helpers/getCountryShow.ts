import {Country} from '../types';

export const getCountryShow = async (id: string) => {
	try {
		const url = `https://api-territorial.apps.madlab.com.do/api/paises/${id}/show`;
		const resp = await fetch(url);

		if (!resp.ok) {
			throw new Error('Failed to fetch country');
		}

		const {data} = await resp.json();

		return data as Country;
	} catch (error) {
		console.error(error);
		throw error;
	}
};
