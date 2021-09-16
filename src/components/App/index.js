// == Import
import './styles.css';

import Header from '../Header';
import Currencies from '../Currencies';
import Result from '../Result';

// == Composant
const App = () => (
  <div className="app">
    <Header />
    <Currencies />
    <Result />

  </div>
);

// == Export
export default App;
