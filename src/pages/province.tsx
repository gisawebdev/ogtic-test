import {Link, useParams} from 'react-router-dom';
import {getProvinceShow} from '../helpers/getProvinceShow';
import {useFetch} from '../hooks/useFetch';
import {Tags} from '../components/Tags';
import {getMunicipalities} from '../helpers/getMunicipalities';
import {getDistricts} from '../helpers/getDistricts';
import Loading from '../components/Loading';

export const ProvincePage = () => {
	const {province, country} = useParams();

	if (!province) return <>No hay provincia</>;

	const {data, isLoading} = useFetch(() => getProvinceShow(province));

	const {data: dataMunicipalities} = useFetch(
		async () => (data?.code ? getMunicipalities(data?.code?.toString()) : []),
		data,
	);

	const {data: dataDistrics} = useFetch(
		async () => (data?.code ? getDistricts(data?.code?.toString()) : []),
		data,
	);

	return (
		<section>
			<h2 className="font-semibold">{data?.nombre}</h2>
			<Tags id={data?.id} countryCode={data?.country_code} code={data?.code} />

			{isLoading ? (
				<div className="mt-10">
					<Loading />
				</div>
			) : (
				<div className="flex flex-col gap-1 mt-10 md:gap-10 md:flex-row">
					<div className="w-full p-5 my-5 transition-shadow duration-300 ease-in-out border shadow-sm md:grid-cols-3 rounded-3xl drop-shadow-md shadow-slate-400 hover:shadow-slate-700">
						<h3 className="font-semibold">Municipios</h3>
						<ol className="grid md:grid-cols-2">
							{dataMunicipalities?.map(({id, nombre}) => (
								<li key={id}>
									<Link
										className="hover:underline hover:text-purple-600 hover:decoration-wavy"
										to={`/${country}/${province}/${id}`}
									>
										{nombre}
									</Link>
								</li>
							))}
						</ol>
					</div>

					<div className="w-full p-5 my-5 transition-shadow duration-300 ease-in-out border shadow-sm md:grid-cols-3 rounded-3xl drop-shadow-md shadow-slate-400 hover:shadow-slate-700">
						<h3 className="font-semibold">Distritos</h3>
						<ol className="grid md:grid-cols-2">
							{dataDistrics?.map(({id, nombre}) => (
								<li key={id}>
									<Link
										className="hover:underline hover:text-purple-600 hover:decoration-wavy"
										to={`/${country}/${province}/${id}`}
									>
										{nombre}
									</Link>
								</li>
							))}
						</ol>
					</div>
				</div>
			)}
		</section>
	);
};
