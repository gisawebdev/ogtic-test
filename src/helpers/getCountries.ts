import {FetchResult, PromiseFunction} from '../types';

export const getCountries: PromiseFunction<[]> = async () => {
	try {
		const url = 'https://api-territorial.apps.madlab.com.do/api/paises';
		const resp = await fetch(url);

		if (!resp.ok) {
			throw new Error('Failed to fetch countries');
		}
		const {data} = await resp.json();

		const countries: [] = data.map(({id, nombre}: FetchResult) => ({
			id,
			nombre,
		}));

		return countries;
	} catch (error) {
		console.error(error);
		throw error;
	}
};
