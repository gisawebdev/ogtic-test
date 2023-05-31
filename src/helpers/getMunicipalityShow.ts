import {Municipality} from '../types';

export const getMunicipalityShow = async (id: string) => {
	try {
		const url = `https://api-territorial.apps.madlab.com.do/api/municipios/${id}/show`;
		const resp = await fetch(url);

		if (!resp.ok) {
			throw new Error('Failed to fetch municipality');
		}

		const {data} = await resp.json();

		return data as Municipality;
	} catch (error) {
		console.error(error);
		throw error;
	}
};
