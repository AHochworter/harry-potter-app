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
  console.log('name', name);
  return (
    <div className="focus-character-card">
      <h2>Name: {name}</h2>
      <div className="img-container">
        <img
          className="focus-character-image"
          src={image}
          alt="character-portrait"
        />
      </div>
      <h3>House: {house}</h3>
      <p>Born: {yearOfBirth}</p>
      <p>Ancestry: {ancestry}</p>
      <p>Wizard: {wizard ? 'Yes' : 'No'}</p>
      {wand && (
        <p>
          Wand: {wand.wood} wood, {wand.core} core, Length: {wand.length} inches
        </p>
      )}
      <p>Patronus: {patronus}</p>
      <p>Actor: {actor}</p>
    </div>
  );
}

export default FocusCharacterCard;
