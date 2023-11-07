function getCharacters() {
  return fetch('https://hp-api.onrender.com/api/characters').then(response => {
    if (!response.ok) {
      throw new Error(`${response.status} ${response.statusText}`);
    }
    return response.json();
  });
}

function getUniqueCharacter() {
  return fetch('https://hp-api.onrender.com/api/character/:id').then(
    response => {
      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }
      return response.json();
    }
  );
}

export { getCharacters, getUniqueCharacter };
