import { getUniqueCharacter } from '../../apiCalls';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './SelectedCharacterContainer.css';
import FocusCharacterCard from '../FocusCharacterCard/FocusCharacterCard';

function SelectedCharacterContainer() {
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [selectedCharacterError, setSelectedCharacterError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getUniqueCharacter(id);
        setSelectedCharacter(data);
        console.log(selectedCharacter);
      } catch (error) {
        setSelectedCharacterError(error.message);
      }
    }

    fetchData();
  }, [id]);

  return (
    <div className="selected-character">
      <h2>FocusCard will Live Here! Inside FocusCharacterCard</h2>
      <FocusCharacterCard />
    </div>
  );
}

export default SelectedCharacterContainer;
