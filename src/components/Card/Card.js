import './Card.css';
import PropTypes from 'prop-types';

function Card({ name, image }) {
  return (
    <div className="card">
      <img
        src={image}
        alt="character portrait"
        className="character-card-img"
      />
      <h2>{name}</h2>
    </div>
  );
}

export default Card;

Card.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string,
};
