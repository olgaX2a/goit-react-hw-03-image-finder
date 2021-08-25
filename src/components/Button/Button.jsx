import "./Button.css";
import PropTypes from "prop-types";

const Button = ({ onLoadMore }) => {
  return (
    <button type="button" className="Button" onClick={onLoadMore}>
      Load more
    </button>
  );
};

export default Button;

Button.propTypes = {
  onLoadMore: PropTypes.func.isRequired,
};
