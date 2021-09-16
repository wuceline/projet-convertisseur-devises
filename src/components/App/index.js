// == Import
import './styles.css';
import currenciesData from 'src/data/currencies';

import Header from '../Header';
import Currencies from '../Currencies';
import Result from '../Result';

// == Composant
const App = () => (
  <div className="app">
    <Header />
    <Currencies
      currencies={currenciesData}
    />
    <Result />

  </div>
);

// == Export
export default App;
