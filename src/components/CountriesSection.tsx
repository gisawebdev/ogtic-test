import {getCountries} from '../helpers/getCountries';
import {useFetch} from '../hooks/useFetch';
import Loading from './Loading';

export const CountriesSection = () => {
	const {array, isLoading} = useFetch(getCountries);

	return (
		<section>
			<h2 className="pb-5 text-xl font-semibold">Paises</h2>
			<ol className="grid grid-cols-2 p-5 mb-5 transition-shadow duration-300 ease-in-out border shadow-sm md:grid-cols-3 rounded-3xl drop-shadow-md shadow-slate-400 hover:shadow-slate-700">
				{isLoading ? (
					<Loading />
				) : (
					array.map(({id, nombre}) => (
						<li className="text-xs md:text-sm animate-fade" key={id}>
							{nombre}
						</li>
					))
				)}
			</ol>
		</section>
	);
};
