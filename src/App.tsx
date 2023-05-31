import {Route, Routes} from 'react-router-dom';
import {CountriesPage} from './pages/countries';
import {CountryPage} from './pages/country';
import {ProvincePage} from './pages/province';
import {MunicipalityPage} from './pages/municipality';
import {DistrictPage} from './pages/district';

const App = () => {
	return (
		<>
			<h1 className="py-10 text-2xl font-bold text-center">
				API Territorial Republica Dominicana
			</h1>

			<Routes>
				<Route path="/" index element={<CountriesPage />} />
				<Route path="/:country" element={<CountryPage />} />
				<Route path="/:country/:province" element={<ProvincePage />} />
				<Route
					path="/:country/:province/:municipality"
					element={<MunicipalityPage />}
				/>
				<Route
					path="/:country/:province/:district"
					element={<DistrictPage />}
				/>
			</Routes>
		</>
	);
};

export default App;
