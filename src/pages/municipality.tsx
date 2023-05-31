import {useParams} from 'react-router-dom';
import {useFetch} from '../hooks/useFetch';
import {getMunicipalityShow} from '../helpers/getMunicipalityShow';
import {Tags} from '../components/Tags';
import Loading from '../components/Loading';

export const MunicipalityPage = () => {
	const {municipality} = useParams();

	if (!municipality) return <>No hay municipio</>;

	const {data, isLoading} = useFetch(() => getMunicipalityShow(municipality));

	return (
		<section>
			<h2 className="font-semibold">{data?.nombre}</h2>
			<Tags id={data?.id} countryCode={data?.province_code} code={data?.code} />
			{isLoading ? (
				<div className="mt-10">
					<Loading />
				</div>
			) : (
				<div className="p-5 my-5 transition-shadow duration-300 ease-in-out border shadow-sm rounded-3xl drop-shadow-md shadow-slate-400 hover:shadow-slate-700">
					<h3 className="mb-3 text-center">Provincia</h3>
					<div className="flex flex-col gap-2 md:flex-row md:justify-between ">
						<span className="p-2 text-white bg-purple-400 rounded-3xl">
							id: {data?.provincia?.id}
						</span>
						<span className="p-2 text-white bg-purple-400 rounded-3xl">
							Nombre: {data?.provincia?.nombre}
						</span>
						<span className="p-2 text-white bg-purple-400 rounded-3xl">
							Codigo: {data?.provincia?.code}
						</span>
						<span className="p-2 text-white bg-purple-400 rounded-3xl">
							Codigo del Pais: {data?.provincia?.country_code}
						</span>
					</div>
				</div>
			)}
		</section>
	);
};
