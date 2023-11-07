function getCharacters() {
  return fetch('https://hp-api.onrender.com/api/characters').then(response =>
    response.json()
  );
}

function getUniqueCharacter() {
  return fetch('https://hp-api.onrender.com/api/character/:id')
    .then(response => response.json())
    .then(data => console.log('uniqueID', data));
}

export { getCharacters };
