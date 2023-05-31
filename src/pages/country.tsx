import {useParams} from 'react-router-dom';
import {useFetch} from '../hooks/useFetch';
import {getCountryShow} from '../helpers/getCountryShow';
import {Tags} from '../components/Tags';
import {ListElements} from '../components/ListElements';
import Loading from '../components/Loading';

export const CountryPage = () => {
	const {country} = useParams();
	if (!country) return <>No hay pais</>;

	const {data, isLoading} = useFetch(() => getCountryShow(country));

	return (
		<section>
			<h2 className="font-semibold">{data?.nombre}</h2>
			<Tags id={data?.id} code={data?.code} isoCode={data?.iso_code} />

			{/* <div className="p-5 my-5 transition-shadow duration-300 ease-in-out border shadow-sm md:grid-cols-3 rounded-3xl drop-shadow-md shadow-slate-400 hover:shadow-slate-700">
				<h3 className="font-semibold">Provincias</h3>
				<ol className="grid grid-cols-2">
					{data?.provincias?.map(({id, nombre}) => (
						<li key={id}>
							<Link to={`/provincias/${id}`}>{nombre}</Link>
						</li>
					))}
				</ol>
			</div> */}

			{isLoading ? (
				<div className="mt-10">
					<Loading />
				</div>
			) : (
				<ListElements
					title="Provincias"
					element={data?.provincias}
					href={`/provincias`}
				/>
			)}
		</section>
	);
};
