describe('Saving drafts', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get('form > a > button').as('check-sentiment');
  });

  it('should be able to save a message as a draft', () => {
    cy.writePositiveMessage();
    cy.get('@check-sentiment').click();
    cy.get('.submit-draft > button').click();
    cy.get('.draft-button[name="0"]').click();
    cy.get('.draft-container').contains('I love you');
  });

  it('should be able to save multiple drafts', () => {
    cy.writePositiveMessage();
    cy.get('@check-sentiment').click();
    cy.get('.submit-draft > button').click();
    cy.writeNegativeMessage();
    cy.get('@check-sentiment').click();
    cy.get('.submit-draft > button').click();
    cy.get('.drafts button').should('have.length', 2);
    cy.writeNeutralMessage();
    cy.get('@check-sentiment').click();
    cy.get('.submit-draft > button').click();
    cy.get('.drafts button').should('have.length', 3);
  });

  it('should only let a user save three drafts', () => {
    cy.saveThreeDrafts();
    cy.writePositiveMessage();
    cy.get('@check-sentiment').click();
    cy.get('.submit-draft > button').click();
    cy.on('window:alert', (str) => {
      expect(str).to.equal(
        "You've already written 3 drafts, make sure you don't overthink it!"
      );
    });
    cy.get('.drafts button').should('have.length', 3);
  });
});
