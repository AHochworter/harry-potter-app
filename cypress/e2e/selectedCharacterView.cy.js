describe('should load a selected character', () => {
  beforeEach(() => {
    cy.intercept(
      'GET',
      'https://hp-api.onrender.com/api/character/9e3f7ce4-b9a7-4244-b709-dae5c1f1d4a8',
      {
        statusCode: 200,
        body: [
          {
            id: '9e3f7ce4-b9a7-4244-b709-dae5c1f1d4a8',
            name: 'Harry Potter',
            house: 'Gryffindor',
            yearOfBirth: 1980,
            wizard: true,
            ancestry: 'half-blood',
            wand: {
              wood: 'holly',
              core: 'phoenix feather',
              length: 11,
            },
            patronus: 'stag',
            hogwartsStudent: true,
            hogwartsStaff: false,
            actor: 'Daniel Radcliffe',
            image: 'https://ik.imagekit.io/hpapi/harry.jpg',
          },
        ],
      }
    ).as('getSelectedCharacter');
  });

  it('should take us to the selected character page, and display the character specifics', () => {
    cy.intercept('GET', 'https://hp-api.onrender.com/api/characters', {
      statusCode: 200,
      fixture: 'dummyData',
    })
      .as('getCharacters')
      .visit('http://localhost:3000/')
      .wait('@getCharacters');

    cy.get(
      '[href="/character/9e3f7ce4-b9a7-4244-b709-dae5c1f1d4a8"] > .card-container > .card > .image-container-main > .character-card-img'
    ).click();

    cy.get('.selected-character').should('exist');
    cy.get('.focus-name').contains('Harry Potter');
    cy.get('.focus-character-image')
      .should('have.attr', 'src')
      .should('include', 'harry');
    cy.get('.focus-actor').should('contain', 'Actor: Daniel Radcliffe');
    cy.get('.focus-house').should('contain', 'Gryffindor');
    cy.get('.focus-born').should('contain', 'Born: 1980');
    cy.get('.focus-ancestry').should('contain', 'Ancestry: half-blood');
    cy.get('.focus-wizard').should('contain', 'Wizard: Yes');
    cy.get('.focus-wand').should(
      'contain',
      'Wand: holly wood, phoenix feather core, Length: 11 inches'
    );
    cy.get('.focus-patronus').should('contain', 'Patronus: stag');

    cy.get('.linkedin-block > p > a')
      .invoke('attr', 'href')
      .should('eq', 'https://www.linkedin.com/in/annhochworter/');
    cy.get('.github-block > p > a')
      .invoke('attr', 'href')
      .should('eq', 'https://github.com/AHochworter');

    //click on the home link to return to main view
    cy.get('.home-link').click();
    cy.url('http://localhost:3000');
  });
});
