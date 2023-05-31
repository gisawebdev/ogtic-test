export type FetchResult = {
	id: number;
	nombre: string;
};

export type Province = {
	id: number;
	nombre: string;
	pronvice_code: string;
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
	province_code: string;
	provincias?: Province[];
};

export type District = {
	id: number;
	nombre: string;
	province_code: string;
	provincias?: Province[];
};
