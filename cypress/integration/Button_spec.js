describe('Buttons', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get('form > a > button').as('check-sentiment');
  });

  it("should have a button to check a message's sentiment", () => {
    cy.get('@check-sentiment').contains('Check Sentiment');
  });

  it('should have a button to go back after checking a sentiment', () => {
    cy.writePositiveMessage();
    cy.get('@check-sentiment').click();
    cy.wait(500);
    cy.get('.back > button').contains('Back').click();
    cy.get('textarea').contains('I love you');
  });

  it('should have a button save a draft after checking a sentiment', () => {
    cy.writePositiveMessage();
    cy.get('@check-sentiment').click();
    cy.wait(500);
    cy.get('.submit-draft > button').contains('Save').click();
    cy.get('textarea').should('have.value', '');
    cy.get('.drafts > button').contains('Draft 1');
  });

  it('should have a button to close a draft preview', () => {
    cy.saveThreeDrafts();
    cy.get('button[name="0"]').click();
    cy.wait(500);
    cy.get('.drafts').children().should('have.length', 4);
    cy.get('.draft-container button').contains('x').click();
    cy.get('.drafts').children().should('have.length', 3);
  });

  it.only('should have a home button that brings the user to the home page', () => {
    cy.writePositiveMessage();
    cy.get('@check-sentiment').click();
    cy.wait(500);
    cy.get('.polarity').contains('positive');
    cy.url().should('eq', 'http://localhost:3000/result');
    cy.get('h1').contains('Overthunk').click();
    cy.get('textarea').should('have.value', 'I love you');
    cy.url().should('eq', 'http://localhost:3000/');
  });
});
