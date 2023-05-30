import {FetchResult, PromiseFunction} from '../types';

export const getProvinces: PromiseFunction<[]> = async () => {
	try {
		const url =
			'https://api-territorial.apps.madlab.com.do/api/provincias?country_code=8089';
		const resp = await fetch(url);

		if (!resp.ok) {
			throw new Error('Failed to fetch provinces');
		}

		const {data} = await resp.json();

		console.log(data);

		const provinces: [] = data.map(({id, nombre}: FetchResult) => ({
			id,
			nombre,
		}));

		return provinces;
	} catch (error) {
		console.error(error);
		throw error;
	}
};
