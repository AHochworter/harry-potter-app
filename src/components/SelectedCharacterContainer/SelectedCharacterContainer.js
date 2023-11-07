import { useState } from 'react';
import './SelectedCharacterContainer.css';
import FocusCharacterCard from '../FocusCharacterCard/FocusCharacterCard';

function SelectedCharacterContainer() {
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  return (
    <div className="selected-character">
      <h2>FocusCard will Live Here! Inside FocusCharacterCard</h2>
      <FocusCharacterCard />
    </div>
  );
}

export default SelectedCharacterContainer;
