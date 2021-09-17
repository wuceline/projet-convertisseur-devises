// == Import
import React from 'react';

import './styles.css';
import currenciesData from 'src/data/currencies';

import Header from '../Header';
import Currencies from '../Currencies';
import Result from '../Result';
import CustomButton from 'src/components/CustomButton';

// == Composant
class App extends React.Component {
  constructor(props) {
    // obligatoire quand on écrit un constructeur de composant React
    // => initialiser le composant avec les props
    super(props);

    // création du state : objet qui contient des propriétés et founit
    // les valeurs initiales
    this.state = {
      // indique si currencies est affiché
      open: true,

    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { open } = this.state;

    this.setState({
      open: !open,
    });
  }

  render() {
    const { open } = this.state;

    return (
      <div className="app">
        <Header />
        <CustomButton isOpen={open} toggleOpen={this.handleClick} />
        {open && <Currencies currencies={currenciesData} />}
        <Result />
      </div>
    );
  }
}

// == Export
export default App;
