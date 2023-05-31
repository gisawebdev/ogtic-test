import {useParams} from 'react-router-dom';
import {useFetch} from '../hooks/useFetch';
import {getCountryShow} from '../helpers/getCountryShow';

export const CountryPage = () => {
	const {country} = useParams();
    if(!country) return <>No hay pais</>
    
	const {data, isLoading} = useFetch(() => getCountryShow(country));

  const tt = JSON.stringify(data);

	return <div>{tt}</div>;
};
