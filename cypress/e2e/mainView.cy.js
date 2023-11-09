describe('should load main page', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://hp-api.onrender.com/api/characters', {
      statusCode: 200,
      fixture: 'dummyData',
    })
      .as('getCharacters')
      .visit('http://localhost:3000/')
      .wait('@getCharacters');
  });

  it('should display main page elements', () => {
    cy.get('h1').contains('Harry Potter');
    cy.get('.heading-two').contains('Magical Moments');
    cy.get('#filter-dropdown').should('exist');

    // Check the first card in the characters container
    cy.get('.character-cards .card')
      .first()
      .within(() => {
        cy.get('.character-name').contains('Harry Potter');
        cy.get('.character-card-img')
          .should('have.attr', 'src')
          .should('include', 'harry');
      });
    cy.get('.character-cards .card')
      .last()
      .within(() => {
        cy.get('.character-name').contains('Minerva McGonagall');
        cy.get('.character-card-img')
          .should('have.attr', 'src')
          .should('include', 'mcgonagall');
      });
    cy.get('.title-logo > .subtitle').should(
      'contain',
      'Harry Potter Magic Moments'
    );
    cy.get('.linkedin-block > p > a')
      .invoke('attr', 'href')
      .should('eq', 'https://www.linkedin.com/in/annhochworter/');
    cy.get('.github-block > p > a')
      .invoke('attr', 'href')
      .should('eq', 'https://github.com/AHochworter');
  });

  it('should filter the characters based on the select dropdown filter', () => {
    cy.get('#filter-dropdown')
      .select('student')
      .should('have.value', 'student')
      .get('.card-container')
      .should('have.length', 3);
    cy.get('.character-cards .card')
      .last()
      .within(() => {
        cy.get('.character-name').contains('Ron Weasley');
        cy.get('.character-card-img')
          .should('have.attr', 'src')
          .should('include', 'ron');
      });
    cy.get(
      '[href="/character/9e3f7ce4-b9a7-4244-b709-dae5c1f1d4a8"] > .card-container > .card > .image-container-main > .character-card-img'
    )
      .click()
      .get('.selected-character');
    cy.get('.focus-name').contains('Harry Potter');
  });
});
