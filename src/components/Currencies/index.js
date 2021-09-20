import PropTypes from 'prop-types';
import './currencies.scss';

const Currencies = ({ currencies, handleCurrencyClick }) => (
  <div className="currencies">
    <input
      type="text"
      className="currencies-search"
      placeholder="Rechercher"
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

Currencies.propTypes = {
  currencies: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      // rate: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
  handleCurrencyClick: PropTypes.func.isRequired,

};

export default Currencies;
