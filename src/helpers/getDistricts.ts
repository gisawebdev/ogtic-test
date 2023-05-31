import {District} from '../types';

export const getDistricts = async (provinceCode: string) => {
	try {
		const url = `https://api-territorial.apps.madlab.com.do/api/distritos?province_code=${provinceCode}`;
		const resp = await fetch(url);

		if (!resp.ok) {
			throw new Error('Failed to fetch district');
		}

		const {data} = await resp.json();

		return data as District[];
	} catch (error) {
		console.error(error);
		throw error;
	}
};
