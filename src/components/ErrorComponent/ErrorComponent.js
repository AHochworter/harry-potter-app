import './ErrorComponent.css';
import PropTypes from 'prop-types';
import Fluffy from '../../images/harry-potter-fluffy.jpg';

function ErrorComponent({ error, message }) {
  return (
    <div className="error-container">
      <h2 className="error-h2">ERROR</h2>
      <img
        className="error-image"
        src={Fluffy}
        alt="harry potter fluffy dog image"
      />
      <h3 className="error-h3">{error}</h3>
      <h3 className="error-h3">{message}</h3>
    </div>
  );
}

export default ErrorComponent;

ErrorComponent.propTypes = {
  error: PropTypes.string,
  message: PropTypes.string,
};
