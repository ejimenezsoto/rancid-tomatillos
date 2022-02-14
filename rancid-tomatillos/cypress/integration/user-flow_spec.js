describe('User flows in Rancid Tomatillos', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('Should show "Rancid Tomatillos" as the header', () => {
    cy.get('h1')
      .contains('Rancid Tomatillos')
  });

  it('Should show a bunch of movies', () => {
    cy.get('.movie-title')
      .contains('Money Plane')
  })

  it('Should show a search bar', () => {
    cy.get('form')
      .should('be.visible')
  })

  it('Should allow users to search and filter automatically', () => {
    cy.get('form')
      .type('ava')
      .get('.movie-title')
      .contains('Ava')
  })

  it('Should show movie details when clicked', () => {
    cy.get('.movie-title')
      .contains('Mulan')
      .click()
      .get('.runtime')
      .contains('115 minutes')
  })

  it('Should return to the main page when "Go Back" button is clicked', () => {
    cy.get('.movie-title')
      .contains('Mulan')
      .click()
      .get('button')
      .click()
      .get('form')
      .should('be.visible')
  })
});
