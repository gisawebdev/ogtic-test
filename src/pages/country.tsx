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

			{isLoading ? (
				<div className="mt-10">
					<Loading />
				</div>
			) : (
				<ListElements
					title="Provincias"
					element={data?.provincias}
					href={`/${country}`}
				/>
			)}
		</section>
	);
};
