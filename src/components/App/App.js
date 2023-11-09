import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getCharacters } from '../../apiCalls';
import './App.css';
import Header from '../Header/Header';
import Characters from '../Characters/Characters';
import Footer from '../Footer/Footer';
import SelectedCharacterContainer from '../SelectedCharacterContainer/SelectedCharacterContainer';
import ErrorComponent from '../ErrorComponent/ErrorComponent';

function App() {
  const [characters, setCharacters] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getCharacters()
      .then(data => {
        const charactersWithImage = data.filter(character => character.image);
        setCharacters([...characters, ...charactersWithImage]);
      })
      .catch(error => {
        setError('Error fetching characters. Please try again later.');
      });
  }, []);

  return (
    <div className="App">
      <Header className="header" />
      {error ? (
        <div className="app-error-container">
          <ErrorComponent
            error={error}
            message="Apologies, we're having trouble loading the page.  Please try again later."
          />
        </div>
      ) : (
        <Routes>
          <Route
            path="/"
            element={
              <Characters className="characters" characters={characters} />
            }
          />
          <Route
            path="/character/:id"
            element={<SelectedCharacterContainer />}
          />
          <Route
            path="*"
            element={
              <ErrorComponent
                error={error}
                message="Apologies, we can't find the requested page. Please hit the 'Home' button above."
              />
            }
          />
        </Routes>
      )}
      <Footer className="footer" />
    </div>
  );
}

export default App;
