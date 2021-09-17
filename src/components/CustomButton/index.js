import PropTypes from 'prop-types';
import './customButton.scss';

const CustomButton = ({ isOpen, toggleOpen }) => {
  let classCss = 'custom-button';
  if (isOpen) {
    classCss += ' custom-button--open';
  }
  return (
    <button
      className={classCss}
      type="button"
      onClick={() => {
        toggleOpen();
      }}
    >
      +
    </button>
  );
};

CustomButton.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleOpen: PropTypes.func.isRequired,
};

export default CustomButton;
