describe('Checking messages', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get('form > a > button').as('check-sentiment');
  });

  it('should be able to type a message', () => {
    cy.get('textarea').type('I love you');
  });

  it('should only be able to type 200 characters', () => {
    cy.get('.char-counter').contains('200/200');
    cy.get('textarea').type('I love you');
    cy.get('.char-counter').contains('190/200');
    const type190 = () => {
      let word = '';
      for (let i = 0; i < 190; i++) {
        word += 'a';
      }
      return word;
    };
    cy.get('textarea').type(type190());
    cy.get('.char-counter').contains('0/200');
    cy.get('textarea').clear();
    cy.get('.char-counter').contains('200/200');
  });

  it('should always have a message before checking', () => {
    cy.get('@check-sentiment').click();
    cy.on('window:alert', (str) => {
      expect(str).to.equal('Please enter a message to overthink!');
    });
  });
  it('should be able to check the tone of a positive message', () => {
    cy.loadPositiveStub();
    cy.get('textarea').type('I love you');
    cy.get('@check-sentiment').click();
    cy.wait(500);
    cy.get('.polarity').contains('positive');
    cy.get('.emoji').contains('🙂');
  });

  it('should know if a message is also negative, or neutral', () => {
    cy.loadNegativeStub();
    cy.get('textarea').type('I hate you');
    cy.get('@check-sentiment').click();
    cy.wait(500);
    cy.get('.polarity').contains('negative');
    cy.get('.emoji').contains('😕');
    cy.get('.back > button').click();
    cy.loadNeutralStub();
    cy.get('textarea').clear().type('I exist');
    cy.get('@check-sentiment').click();
    cy.wait(500);
    cy.get('.polarity').contains('neutral');
    cy.get('.emoji').contains('😑');
  });

  it('a user should be able to go back & update a message', () => {
    cy.loadPositiveStub();
    cy.get('textarea').type('I love you');
    cy.get('@check-sentiment').click();
    cy.wait(500);
    cy.get('.back > button').click();
    cy.get('textarea').contains('I love you').type(' so much!');
    cy.get('@check-sentiment').click();
    cy.wait(500);
    cy.get('.polarity').contains('positive');
    cy.get('.emoji').contains('🙂');
  });
});
