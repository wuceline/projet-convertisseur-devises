import PropTypes from 'prop-types';
import './header.scss';

const Header = ({ amount }) => (
  <header className="title">
    <h1 className="title-value">Converter</h1>
    <p className="title-content">{amount} euro</p>
  </header>

);

Header.propTypes = {
  // amount: PropTypes.number.isRequired,
};

export default Header;
