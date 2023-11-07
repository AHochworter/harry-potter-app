import { useState } from 'react';
import './Characters.css';
import Card from '../Card/Card';
import CharacterFilter from '../CharacterFilter/CharacterFilter';

function Characters({ characters }) {
  //setup state for filtering
  const [filter, setFilter] = useState('all');

  //function to track dropdown selection
  const handleFilterChange = event => {
    setFilter(event.target.value);
  };

  //use filtered characters to render the cards, default to all
  const filteredCharacters = characters.filter(character => {
    if (filter === 'all') {
      return true;
    } else if (filter === 'student') {
      return character.hogwartsStudent;
    } else if (filter === 'staff') {
      return character.hogwartsStaff;
    }
  });
  //map over the filtered results
  const characterCards = filteredCharacters.map(character => {
    return (
      <Card
        key={character.id}
        id={character.id}
        name={character.name}
        image={character.image}
        student={character.hogwartsStudent}
        staff={character.hogwartsStaff}
      />
    );
  });
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
