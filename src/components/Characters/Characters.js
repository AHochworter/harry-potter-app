import { useState } from 'react';
import './Characters.css';
import Card from '../Card/Card';
import CharacterFilter from '../CharacterFilter/CharacterFilter';
import { Link } from 'react-router-dom'; // Import Link

function Characters({ characters }) {
  const [filter, setFilter] = useState('all');

  const handleFilterChange = event => {
    setFilter(event.target.value);
  };

  if (!characters || characters.length === 0) {
    return <div>No characters available.</div>;
  }

  const filteredCharacters = characters.filter(character => {
    if (filter === 'all') {
      return true;
    } else if (filter === 'student') {
      return character.hogwartsStudent;
    } else if (filter === 'staff') {
      return character.hogwartsStaff;
    }
  });

  const characterCards = filteredCharacters.map(character => (
    // Put the react link here, capture the card component inside the link
    <Link
      to={`/character/${character.id}`}
      key={character.id}
      className="character-link"
    >
      <Card
        key={character.id}
        id={character.id}
        name={character.name}
        image={character.image}
        student={character.hogwartsStudent}
        staff={character.hogwartsStaff}
      />
    </Link>
  ));

  return (
    <div className="characters-container">
      <div className="filter-container">
        <CharacterFilter filter={filter} onFilterChange={handleFilterChange} />
      </div>
      <div className="character-cards">{characterCards}</div>
    </div>
  );
}

export default Characters;
