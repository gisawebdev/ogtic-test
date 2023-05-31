import {useEffect, useState} from 'react';

export const useFetch = <T extends any>(fetcher: () => Promise<T>, deps? : object) => {
	const [data, setData] = useState<T>();
	const [isLoading, setIsLoading] = useState<boolean>(true);

	const getData = async () => {
		const result = await fetcher();
		setData(result);
		setIsLoading(false);
	};

	useEffect(() => {
		getData();
	}, [deps]);

	return {
		data,
		isLoading,
	};
};
