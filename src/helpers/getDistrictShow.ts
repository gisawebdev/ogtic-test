import {District} from '../types';

export const getDistrictShow = async (id: string) => {
	try {
		const url = `https://api-territorial.apps.madlab.com.do/api/distritos/${id}/show`;
		const resp = await fetch(url);

		if (!resp.ok) {
			throw new Error('Failed to fetch district');
		}

		const {data} = await resp.json();

		return data as District;
	} catch (error) {
		console.error(error);
		throw error;
	}
};
