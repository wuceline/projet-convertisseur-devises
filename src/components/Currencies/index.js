import PropTypes from 'prop-types';
import './currencies.scss';

const Currencies = ({ currencies }) => (
  <div className="currencies">
    <div className="currencies-title">Currencies</div>
    <ol>
      {currencies.map((currency) => (
        <li className="currency" key={currency.name}>
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
};

export default Currencies;
