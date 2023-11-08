import { getUniqueCharacter } from '../../apiCalls';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './SelectedCharacterContainer.css';
import FocusCharacterCard from '../FocusCharacterCard/FocusCharacterCard';
import ErrorComponent from '../ErrorComponent/ErrorComponent';

function SelectedCharacterContainer() {
  const [selectedCharacter, setSelectedCharacter] = useState('');
  const [selectedCharacterError, setSelectedCharacterError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getUniqueCharacter(id);
        //Access the first (and only)object in the array
        const characterData = data[0];
        setSelectedCharacter(characterData);
        console.log('GETTING HERE!');
      } catch (error) {
        console.log('Error', error);
        setSelectedCharacterError(error.message);
      }
    }

    fetchData();
  }, [id]);

  return (
    <div className="selected-character">
      {selectedCharacterError ? (
        <ErrorComponent
          error={selectedCharacterError}
          message="We're sorry, we're experiencing a server error. Please try again later"
        />
      ) : selectedCharacter ? ( //think about reversing this logic with the!selectedCharacter first
        <FocusCharacterCard
          name={selectedCharacter.name}
          house={selectedCharacter.house}
          yearOfBirth={selectedCharacter.yearOfBirth}
          ancestry={selectedCharacter.ancestry}
          wizard={selectedCharacter.wizard}
          wand={selectedCharacter.wand}
          patronus={selectedCharacter.patronus}
          image={selectedCharacter.image}
          actor={selectedCharacter.actor}
        />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default SelectedCharacterContainer;
