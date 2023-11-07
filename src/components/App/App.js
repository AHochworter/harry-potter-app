import { useState } from 'react';
import './App.css';
import Header from '../Header/Header';
import Characters from '../Characters/Characters';
import Footer from '../Footer/Footer';

function App() {
  const dummyData = [
    {
      id: '9e3f7ce4-b9a7-4244-b709-dae5c1f1d4a8',
      name: 'Harry Potter',
      alternate_names: ['The Boy Who Lived', 'The Chosen One'],
      species: 'human',
      gender: 'male',
      house: 'Gryffindor',
      dateOfBirth: '31-07-1980',
      yearOfBirth: 1980,
      wizard: true,
      ancestry: 'half-blood',
      eyeColour: 'green',
      hairColour: 'black',
      wand: {
        wood: 'holly',
        core: 'phoenix feather',
        length: 11,
      },
      patronus: 'stag',
      hogwartsStudent: true,
      hogwartsStaff: false,
      actor: 'Daniel Radcliffe',
      alternate_actors: [],
      alive: true,
      image: 'https://ik.imagekit.io/hpapi/harry.jpg',
    },
    {
      id: '4c7e6819-a91a-45b2-a454-f931e4a7cce3',
      name: 'Hermione Granger',
      alternate_names: [],
      species: 'human',
      gender: 'female',
      house: 'Gryffindor',
      dateOfBirth: '19-09-1979',
      yearOfBirth: 1979,
      wizard: true,
      ancestry: 'muggleborn',
      eyeColour: 'brown',
      hairColour: 'brown',
      wand: {
        wood: 'vine',
        core: 'dragon heartstring',
        length: 10.75,
      },
      patronus: 'otter',
      hogwartsStudent: true,
      hogwartsStaff: false,
      actor: 'Emma Watson',
      alternate_actors: [],
      alive: true,
      image: 'https://ik.imagekit.io/hpapi/hermione.jpeg',
    },
    {
      id: 'ca3827f0-375a-4891-aaa5-f5e8a5bad225',
      name: 'Minerva McGonagall',
      alternate_names: [],
      species: 'human',
      gender: 'female',
      house: 'Gryffindor',
      dateOfBirth: '04-10-1925',
      yearOfBirth: 1925,
      wizard: true,
      ancestry: 'half-blood',
      eyeColour: '',
      hairColour: 'black',
      wand: {
        wood: 'fir',
        core: 'dragon heartstring',
        length: 9.5,
      },
      patronus: 'tabby cat',
      hogwartsStudent: false,
      hogwartsStaff: true,
      actor: 'Dame Maggie Smith',
      alternate_actors: [],
      alive: true,
      image: 'https://ik.imagekit.io/hpapi/mcgonagall.jpg',
    },
    {
      id: '3569d265-bd27-44d8-88e8-82fb0a848374',
      name: 'Severus Snape',
      alternate_names: ['Half-Blood Prince'],
      species: 'human',
      gender: 'male',
      house: 'Slytherin',
      dateOfBirth: '09-01-1960',
      yearOfBirth: 1960,
      wizard: true,
      ancestry: 'half-blood',
      eyeColour: 'black',
      hairColour: 'black',
      wand: {
        wood: '',
        core: '',
        length: null,
      },
      patronus: 'doe',
      hogwartsStudent: false,
      hogwartsStaff: true,
      actor: 'Alan Rickman',
      alternate_actors: [],
      alive: false,
      image: 'https://ik.imagekit.io/hpapi/snape.jpg',
    },
  ];

  const [characters, setCharacters] = useState(dummyData);

  return (
    <div className="App">
      <Header className="header" />
      <Characters className="characters" characters={characters} />
      <Footer className="footer" />
    </div>
  );
}

export default App;
