import './FocusCharacterCard.css';
import PropTypes from 'prop-types';

function FocusCharacterCard({
  name,
  house,
  yearOfBirth,
  ancestry,
  wizard,
  wand,
  patronus,
  image,
  actor,
}) {
  return (
    <div className="focus-character-card">
      <div className="focus-card-left">
        <h2 className="focus-name">{name}</h2>
        <div className="img-container">
          {image ? (
            <img
              className="focus-character-image"
              src={image}
              alt="character-portrait"
            />
          ) : (
            <p>No image Available</p>
          )}
        </div>
        <p className="focus-actor">Actor: {actor || 'N/A'}</p>
      </div>
      <div className="focus-card-right">
        <h3 className="focus-house">{house || 'N/A'}</h3>
        <p className="focus-born">Born: {yearOfBirth || 'N/A'}</p>
        <p className="focus-ancestry">Ancestry: {ancestry || 'N/A'}</p>
        <p className="focus-wizard">Wizard: {wizard ? 'Yes' : 'No'}</p>
        {wand && (
          <p className="focus-wand">
            Wand: {wand.wood || 'N/A'} wood, {wand.core || 'N/A'} core, Length:{' '}
            {wand.length || 'N/A'} inches
          </p>
        )}
        <p className="focus-patronus">Patronus: {patronus || 'N/A'}</p>
      </div>
    </div>
  );
}

export default FocusCharacterCard;

FocusCharacterCard.propTypes = {
  name: PropTypes.string.isRequired,
  house: PropTypes.string,
  yearOfBirth: PropTypes.number,
  ancestry: PropTypes.string,
  wizard: PropTypes.bool,
  wand: PropTypes.shape({
    wood: PropTypes.string,
    core: PropTypes.string,
    length: PropTypes.number,
  }),
  patronus: PropTypes.string,
  image: PropTypes.string,
  actor: PropTypes.string,
};
