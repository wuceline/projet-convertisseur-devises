// == Import
import './styles.css';
import currenciesData from 'src/data/currencies';

import Header from '../Header';
import Currencies from '../Currencies';
import Result from '../Result';

// == Composant
const App = () => {
  let open = true;

  return (
    <div className="app">
      <Header />
      <button
        type="button"
        onClick={() => {
          open = false;
        }}
      >
        Toggle Currencies
      </button>
      {open && <Currencies currencies={currenciesData} />}
      <Result />
    </div>
  );
};

// == Export
export default App;
