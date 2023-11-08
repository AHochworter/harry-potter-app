import './Card.css';
import PropTypes from 'prop-types';

function Card({ name, image }) {
  return (
    <div className="card-container">
      <div className="card">
        <div className="image-container-main">
          <img
            src={image}
            alt="character portrait"
            className="character-card-img"
          />
        </div>
        <h2 className="character-name">{name}</h2>
      </div>
    </div>
  );
}

export default Card;

Card.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  image: PropTypes.string,
};
