// == Import
import React from 'react';

import './styles.css';
import currenciesData from 'src/data/currencies';

import CustomButton from 'src/components/CustomButton';
import Header from '../Header';
import Currencies from '../Currencies';
import Result from '../Result';

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
      amount: 1,
      currency: 'United States Dollar',
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
    const { open, amount, currency } = this.state;

    const usDollar = currenciesData.find(currencyOfArray => currencyOfArray.name === 'United States Dollar');
    const usDollarRate = usDollar.rate;

    const resultAmount = (amount * usDollarRate).toFixed(2);

    return (
      <div className="app">
        <Header amount={amount} />
        <CustomButton isOpen={open} toggleOpen={this.handleClick} />
        {open && <Currencies currencies={currenciesData} />}
        <Result currency={currency} resultAmount={resultAmount} />
      </div>
    );
  }
}

// == Export
export default App;
