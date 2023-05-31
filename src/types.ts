export type FetchResult = {
	id: number;
	nombre: string;
};

export type Province = {
	id: number | undefined;
	code: number | undefined;
	nombre: string | undefined;
	country_code: number | undefined;
};
export type Country = {
	id: number;
	nombre: string;
	code: number;
	iso_code: string;
	provincias?: Province[];
};

export type Municipality = {
	id: number;
	nombre: string;
	province_code: number | undefined;
	provincias?: Province[];
};

export type District = {
	id: number;
	nombre: string;
	province_code: string;
	provincias?: Province[];
};
