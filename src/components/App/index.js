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
      // contenu du champ de recherche
      inputSearch: '',
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleChangeCurrency = this.handleChangeCurrency.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
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

  handleSearchChange(newValue) {
    this.setState({
      inputSearch: newValue,
    });
  }

  getFilteredCurrencies() {
    const currenciesFiltered = currenciesData.filter((currentCurrency) => {
      const { inputSearch } = this.state;
      const currentNameLowered = currentCurrency.name.toLowerCase();
      const inputSearchLowered = inputSearch.toLowerCase();

      return currentNameLowered.includes(inputSearchLowered);
    });
    return currenciesFiltered;
  }

  computeAmount() {
    const { currency, amount } = this.state;
    const selectedCurrency = currenciesData.find((item) => item.name === currency);
    const selectedCurrencyRate = selectedCurrency.rate;

    const result = amount * selectedCurrencyRate;
    const roundedResult = result.toFixed(2);
    return roundedResult;
  }



  render() {
    const {
      open,
      amount,
      currency,
      inputSearch,
    } = this.state;

    const resultAmount = this.computeAmount();
    const currenciesFiltered = this.getFilteredCurrencies();

    return (
      <div className="app">
        <Header amount={amount} />
        <CustomButton isOpen={open} toggleOpen={this.handleClick} />
        {open && (
          <Currencies
            currencies={currenciesFiltered}
            handleCurrencyClick={this.handleChangeCurrency}
            search={inputSearch}
            setSearch={this.handleSearchChange}
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
