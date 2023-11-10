describe('should get an error message for a failed network request', () => {
  it('should give the user an error message for a failure to fetch the characters', () => {
    cy.intercept('GET', 'https://hp-api.onrender.com/api/characters', {
      statusCode: 404,
      body: '',
    })
      .as('getCharacters')
      .visit('http://localhost:3000/')
      .wait('@getCharacters')
      .get('.error-h2')
      .contains('ERROR');
    cy.get('.error-image').should('have.attr', 'src');
    cy.get('.error-container > :nth-child(3)').should(
      'contain',
      'Error fetching characters. Please try again later.'
    );
    cy.get('.error-container > :nth-child(4)').should(
      'contain',
      "Apologies, we're having trouble loading the page.  Please try again later."
    );
  });

  it('should give a user an error for a failed network request for the selected character', () => {
    cy.intercept('GET', 'https://hp-api.onrender.com/api/characters', {
      statusCode: 200,
      fixture: 'dummyData',
    }).as('getCharacters');

    // Intercept character by id fetch, error 500, server down
    cy.intercept(
      'GET',
      'https://hp-api.onrender.com/api/character/9e3f7ce4-b9a7-4244-b709-dae5c1f1d4a8',
      {
        statusCode: 500,
        body: '',
      }
    ).as('getSelectedCharacter');
    cy.visit('http://localhost:3000/');
    cy.wait('@getCharacters');
    cy.get(
      '[href="/character/9e3f7ce4-b9a7-4244-b709-dae5c1f1d4a8"] > .card-container > .card > .image-container-main > .character-card-img'
    )
      .click()
      .wait('@getSelectedCharacter');
    cy.get('.error-h2').contains('ERROR');
    cy.get('.error-image').should('have.attr', 'src');
    cy.get('.error-container > :nth-child(3)').should(
      'contain',
      '500 Internal Server Error'
    );
    cy.get('.error-container > :nth-child(4)').should(
      'contain',
      "We're sorry, we're experiencing a server error. Please try again later"
    );

    cy.get('.linkedin-block > p > a')
      .invoke('attr', 'href')
      .should('eq', 'https://www.linkedin.com/in/annhochworter/');
    cy.get('.github-block > p > a')
      .invoke('attr', 'href')
      .should('eq', 'https://github.com/AHochworter');

    cy.get('.home-link').click();
    cy.url('http://localhost:3000');
  });
});
