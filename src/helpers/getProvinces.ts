import {Province} from '../types';

export const getProvinces = async (countryCode: string) => {
	try {
		const url = `https://api-territorial.apps.madlab.com.do/api/provincias?country_code=${countryCode}`;
		const resp = await fetch(url);

		if (!resp.ok) {
			throw new Error('Failed to fetch provinces');
		}

		const {data} = await resp.json();

		console.log(data);

		return data as Province[];
	} catch (error) {
		console.error(error);
		throw error;
	}
};
