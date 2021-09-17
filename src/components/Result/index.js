import PropTypes from 'prop-types';
import './result.scss';

const Result = ({ currency }) => (
  <div className="result">
    <p className="result-number">1.09</p>
    <p className="result-currency">{currency}</p>
  </div>
);

Result.propTypes = {
  currency: PropTypes.string.isRequired,
};

export default Result;
