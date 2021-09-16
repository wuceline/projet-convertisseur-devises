import PropTypes from 'prop-types';
import './currencies.scss';

const Currencies = ({ currencies }) => (
  <ol className="currencies">
    <p className="currencies-title">Currencies</p>
    {currencies.map((currency) => (
      <li className="currency">{currency.name}</li>
    ))}
  </ol>
);

Currencies.propTypes = {
  currencies: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      rate: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Currencies;
