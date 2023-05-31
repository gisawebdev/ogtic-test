import {useParams} from 'react-router-dom';
import {useFetch} from '../hooks/useFetch';
import {getCountryShow} from '../helpers/getCountryShow';

export const CountryPage = () => {
	const {country} = useParams();
	if (!country) return <>No hay pais</>;

	const {data, isLoading} = useFetch(() => getCountryShow(country));

	return (
		<section>
			<h2 className="font-semibold">{data?.nombre}</h2>
			<div>
				<div className="flex gap-3 mt-3">
					<span className="p-1 text-sm text-white rounded-3xl bg-cyan-400">
						id: {data?.id}
					</span>
					<span className="p-1 text-sm text-white bg-red-400 rounded-3xl">
						Codigo: {data?.code}
					</span>
					<span className="p-1 text-sm text-white bg-green-400 rounded-3xl">
						Codigo ISO: <strong>{data?.iso_code}</strong>
					</span>
				</div>

				<div className="p-5 my-5 transition-shadow duration-300 ease-in-out border shadow-sm md:grid-cols-3 rounded-3xl drop-shadow-md shadow-slate-400 hover:shadow-slate-700">
					<h3 className="font-semibold">Provincias</h3>
					<ol className="grid grid-cols-2">
						{data?.provincias?.map((provincia) => (
							<li key={provincia.id}>
								<div>{provincia.nombre}</div>
							</li>
						))}
					</ol>
				</div>
			</div>
		</section>
	);
};
