export type FetchResult = {
	id: number;
	nombre: string;
};

export type Province = {
	id: number;
	code: number;
	nombre: string;
	country_code: number;
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
	province_code: number;
	code: number;
	provincia?: Province[];
};

export type District = {
	id: number;
	nombre: string;
	province_code: string;
	provincia?: Province[];
};
