import {CountriesSection} from './components/CountriesSection';
import { ProvincesSection } from './components/ProvincesSection';

const App = () => {
	return (
		<>
			<h1 className="py-10 text-2xl font-bold text-center">
				API Territorial Republica Dominicana
			</h1>

			<CountriesSection />
			<ProvincesSection/>
		</>
	);
};

export default App;
