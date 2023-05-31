import {Country} from '../types';

export const getCountries = async () => {
	try {
		const url = 'https://api-territorial.apps.madlab.com.do/api/paises';
		const resp = await fetch(url);

		if (!resp.ok) {
			throw new Error('Failed to fetch countries');
		}
		const {data} = await resp.json();

		return data as Country[];
	} catch (error) {
		console.error(error);
		throw error;
	}
};
