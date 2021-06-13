describe('Routing', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get('form > a > button').as('check-sentiment');
  });

  it('should start out with nothing extra in the url path', () => {
    cy.url().should('eq', 'http://localhost:3000/');
  });

  it('should change the path when checking a message', () => {
    cy.writePositiveMessage();
    cy.get('@check-sentiment').click();
    cy.wait(500);
    cy.url().should('eq', 'http://localhost:3000/result');
  });

  it('should change the path when saving drafts or going back', () => {
    cy.writePositiveMessage();
    cy.get('@check-sentiment').click();
    cy.wait(500);
    cy.url().should('eq', 'http://localhost:3000/result');
    cy.get('.back button').click();
    cy.wait(500);
    cy.url().should('eq', 'http://localhost:3000/');
    cy.get('@check-sentiment').click();
    cy.wait(500);
    cy.url().should('eq', 'http://localhost:3000/result');
    cy.get('.submit-draft button').click();
    cy.wait(500);
    cy.url().should('eq', 'http://localhost:3000/');
  });

  it('should redirect the user when a random url path is entered', () => {
    cy.visit('/a;lsdkjf');
    cy.wait(500);
    cy.url().should('eq', 'http://localhost:3000/');
  });
});
