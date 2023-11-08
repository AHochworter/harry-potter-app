import './FocusCharacterCard.css';

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
      <h2>Name: {name}</h2>
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
      <h3>House: {house || 'N/A'}</h3>
      <p>Born: {yearOfBirth || 'N/A'}</p>
      <p>Ancestry: {ancestry || 'N/A'}</p>
      <p>Wizard: {wizard ? 'Yes' : 'No'}</p>
      {wand && (
        <p>
          Wand: {wand.wood || 'N/A'} wood, {wand.core || 'N/A'} core, Length:{' '}
          {wand.length || 'N/A'} inches
        </p>
      )}
      <p>Patronus: {patronus || 'N/A'}</p>
      <p>Actor: {actor || 'N/A'}</p>
    </div>
  );
}

export default FocusCharacterCard;
