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
	provincias?: Province[];
	provincia?: {
		id: number;
		code: number;
		country_code: number;
		nombre: string;
	};
};

export type District = {
	id: number;
	nombre: string;
	code: number;
	province_code: string;
	provincias?: Province[];
	provincia?: {
		id: number;
		code: number;
		country_code: number;
		nombre: string;
	};
};
