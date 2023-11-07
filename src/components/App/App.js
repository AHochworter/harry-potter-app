import { useState, useEffect } from 'react';
import './App.css';
import Header from '../Header/Header';
import Characters from '../Characters/Characters';
import Footer from '../Footer/Footer';
import SelectedCharacterContainer from '../SelectedCharacterContainer/SelectedCharacterContainer';
import { Routes, Route } from 'react-router-dom';
import { getCharacters } from '../../apiCalls';

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getCharacters().then(data => {
      const charactersWithImage = data.filter(character => character.image);
      setCharacters([...characters, ...charactersWithImage]);
    });
  }, []);

  return (
    <div className="App">
      <Header className="header" />
      <Routes>
        <Route
          path="/"
          element={
            <Characters className="characters" characters={characters} />
          }
        />
        <Route
          path="/characters/:id"
          element={<SelectedCharacterContainer />}
        />
      </Routes>
      <Footer className="footer" />
    </div>
  );
}

export default App;
