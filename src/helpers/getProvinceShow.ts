import {Province} from '../types';

export const getProvinceShow = async (id: string) => {
	try {
		const url = `https://api-territorial.apps.madlab.com.do/api/provincias/${id}/show`;
		const resp = await fetch(url);

		if (!resp.ok) {
			throw new Error('Failed to fetch province');
		}

		const {data} = await resp.json();

		return data as Province;
	} catch (error) {
		console.error(error);
		throw error;
	}
};
