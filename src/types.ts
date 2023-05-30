export type FetchResult = {
	id: number;
	nombre: string;
};

export type PromiseFunction<T> = () => Promise<T>;
