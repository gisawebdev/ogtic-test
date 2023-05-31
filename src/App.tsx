import {Route, Routes} from 'react-router-dom';
import {CountriesPage} from './pages/countries';
import {CountryPage} from './pages/country';
const App = () => {
	return (
		<>
			<h1 className="py-10 text-2xl font-bold text-center">
				API Territorial Republica Dominicana
			</h1>

			{/* <CountriesSection /> */}

			<Routes>
				<Route path="/" index element={<CountriesPage />} />
				<Route path="/:country" element={<CountryPage />} />
				<Route path="/:country/:province" />
				<Route path="/:country/:province/:municipality" />
				<Route path="/:country/:province/:district" />
			</Routes>
		</>
	);
};

export default App;
