import './Characters.css';
import Card from '../Card/Card';

function Characters({ characters }) {
  const characterCards = characters.map(character => {
    return <Card name={character.name} image={character.image} />;
  });
  return <div className="characters">{characterCards}</div>;
}

export default Characters;
