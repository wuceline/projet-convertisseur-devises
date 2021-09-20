import PropTypes from 'prop-types';
import './result.scss';

const Result = ({ currency, resultAmount }) => (
  <div className="result">
    <p className="result-number">{resultAmount}</p>
    <p className="result-currency">{currency}</p>
  </div>
);

Result.propTypes = {
  currency: PropTypes.string.isRequired,
  resultAmount: PropTypes.string.isRequired,

};

export default Result;
