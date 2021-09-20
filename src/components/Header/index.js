import PropTypes from 'prop-types';
import './header.scss';

const Header = ({ amount, setAmount }) => (
  <header className="title">
    <h1 className="title-value">Converter</h1>
    <input
      type="text"
      className="header-input"
      value={amount}
      onChange={(event) => {
        const newAmount = event.target.value;
        setAmount(newAmount);
      }}
    />
    <p className="title-content">euro</p>
  </header>

);

Header.propTypes = {
  amount: PropTypes.number.isRequired,
  setAmount: PropTypes.func.isRequired,
};

export default Header;
