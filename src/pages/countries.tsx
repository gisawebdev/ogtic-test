import Loading from '../components/Loading';
import {getCountries} from '../helpers/getCountries';
import {useFetch} from '../hooks/useFetch';
import {Link} from 'react-router-dom';
export const CountriesPage = () => {
	const {data, isLoading} = useFetch(getCountries);

	return (
		<section>
			<h2 className="pb-5 text-xl font-semibold">Paises</h2>
			<ol className="grid grid-cols-2 p-5 mb-5 transition-shadow duration-300 ease-in-out border shadow-sm md:grid-cols-3 rounded-3xl drop-shadow-md shadow-slate-400 hover:shadow-slate-700">
				{isLoading ? (
					<Loading />
				) : (
					data?.map(({id, nombre}) => (
						<li className="text-xs md:text-sm animate-fade" key={id}>
							<Link
								className="hover:underline hover:text-purple-600 hover:decoration-wavy"
								to={`/${id}`}
							>
								{nombre}
							</Link>
						</li>
					))
				)}
			</ol>
		</section>
	);
};
