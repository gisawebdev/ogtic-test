import {Municipality} from '../types';

export const getMunicipalities = async (provinceCode: string) => {
	try {
		const url = `https://api-territorial.apps.madlab.com.do/api/municipios?province_code=${provinceCode}`;
		const resp = await fetch(url);

		if (!resp.ok) {
			throw new Error('Failed to fetch municipalities');
		}

		const {data} = await resp.json();

		return data as Municipality[];
	} catch (error) {
		console.error(error);
		throw error;
	}
};
