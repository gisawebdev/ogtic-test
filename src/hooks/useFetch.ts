import {useEffect, useState} from 'react';
import {FetchResult, PromiseFunction} from '../types';

export const useFetch = (getFunction: PromiseFunction<[]>) => {
	const [array, setArray] = useState<FetchResult[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(true);

	const getArray = async () => {
		const result = await getFunction();
		setArray(result);
		setIsLoading(false);
	};

	useEffect(() => {
		getArray();
	}, []);

	return {
		array,
		isLoading,
	};
};
