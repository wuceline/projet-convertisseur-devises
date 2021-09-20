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
      // montant à convertir
      amount: 1,
      // nom de la devise sélectionnée
      currency: 'United States Dollar',
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleChangeCurrency = this.handleChangeCurrency.bind(this);
  }

  handleClick() {
    const { open } = this.state;

    this.setState({
      open: !open,
    });
  }

  handleChangeCurrency(newCurrency) {
    this.setState({
      currency: newCurrency,
    });
  }

  computeAmount() {
    const { currency, amount } = this.state;
    console.log(currency);
    const selectedCurrency = currenciesData.find((item) => item.name === currency);
    const selectedCurrencyRate = selectedCurrency.rate;

    const result = amount * selectedCurrencyRate;
    const roundedResult = result.toFixed(2);
    return roundedResult;
  }

  render() {
    const { open, amount, currency } = this.state;

    const resultAmount = this.computeAmount();

    return (
      <div className="app">
        <Header amount={amount} />
        <CustomButton isOpen={open} toggleOpen={this.handleClick} />
        {open && (
          <Currencies
            currencies={currenciesData}
            handleCurrencyClick={this.handleChangeCurrency}
          />
        )}
        <Result
          currency={currency}
          resultAmount={resultAmount}
        />
      </div>
    );
  }
}

// == Export
export default App;
