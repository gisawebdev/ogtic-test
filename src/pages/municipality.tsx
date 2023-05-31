import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { getMunicipalityShow } from "../helpers/getMunicipalityShow";
import { Tags } from "../components/Tags";

export const MunicipalityPage = () => {

  const {municipality} = useParams();

	if (!municipality) return <>No hay municipio</>;

	const {data, isLoading} = useFetch(() => getMunicipalityShow(municipality));

  return (
		<section>
			<h2 className="font-semibold">{data?.nombre}</h2>
			<Tags id={data?.id} countryCode={data?.province_code} />
		</section>
	);
}
