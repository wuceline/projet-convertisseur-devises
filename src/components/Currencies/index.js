import PropTypes from 'prop-types';
import './currencies.scss';
import React from 'react';

class Currencies extends React.Component {
  constructor(props) {
    super(props);
    console.log('  [Currencies] constructor');
  }

  // méthode appelée automatiquement après le tout premier rendu du composant
  componentDidMount() {
    console.log('  [Currencies] componentDidMount');
  }

  // méthode appelée automatiquement après le tout premier rendu du composant
  componentDidUpdate() {
    console.log('  [Currencies] componentDidUpdate');
  }

  // méthode appelée automatiquement avant la destruction du composant (avant qu'il
  // disparaisse du DOM)
  componentWillUnmount() {
    console.log('  [Currencies] componentWillUnmount');
  }

  render() {
    const {
      currencies,
      handleCurrencyClick,
      search,
      setSearch,
    } = this.props;

    return (
      <div className="currencies">
        <input
          type="text"
          className="currencies-search"
          placeholder="Rechercher"
          value={search}
          onChange={(event) => {
            const newValue = event.target.value;
            setSearch(newValue);
          }}

        />
        <ol>
          {currencies.map((currency) => (
            <li
              className="currency"
              key={currency.name}
              onClick={() => {
                handleCurrencyClick(currency.name);
              }}
            >
              {currency.name}
            </li>
          ))}
        </ol>
      </div>

    );
  }
}

Currencies.propTypes = {
  currencies: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      // rate: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
  handleCurrencyClick: PropTypes.func.isRequired,
  search: PropTypes.string.isRequired,
  setSearch: PropTypes.func.isRequired,
};

export default Currencies;
