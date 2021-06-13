Cypress.Commands.add('loadPositiveStub', () => {
  const baseUrl = 'https://sentim-api.herokuapp.com/api/v1/';
  cy.intercept('POST', baseUrl, {
    result: {
      polarity: 0.5,
      type: 'positive',
    },
    sentences: [
      {
        sentence: 'I love you',
        sentiment: {
          polarity: 0.5,
          type: 'positive',
        },
      },
    ],
  });
});

Cypress.Commands.add('loadNegativeStub', () => {
  const baseUrl = 'https://sentim-api.herokuapp.com/api/v1/';
  cy.intercept('POST', baseUrl, {
    result: {
      polarity: -0.8,
      type: 'negative',
    },
    sentences: [
      {
        sentence: 'I hate you',
        sentiment: {
          polarity: -0.8,
          type: 'negative',
        },
      },
    ],
  });
});

Cypress.Commands.add('loadNeutralStub', () => {
  const baseUrl = 'https://sentim-api.herokuapp.com/api/v1/';
  cy.intercept('POST', baseUrl, {
    result: {
      polarity: 0.0,
      type: 'neutral',
    },
    sentences: [
      {
        sentence: 'I exist',
        sentiment: {
          polarity: 0.0,
          type: 'neutral',
        },
      },
    ],
  });
});

Cypress.Commands.add('writePositiveMessage', () => {
  cy.loadPositiveStub();
  cy.get('textarea').clear().type('I love you');
});

Cypress.Commands.add('writeNegativeMessage', () => {
  cy.loadNegativeStub();
  cy.get('textarea').clear().type('I hate you');
});

Cypress.Commands.add('writeNeutralMessage', () => {
  cy.loadNeutralStub();
  cy.get('textarea').clear().type('I exist');
});

Cypress.Commands.add('saveThreeDrafts', () => {
  cy.writePositiveMessage();
  cy.get('@check-sentiment').click();
  cy.get('.submit-draft > button').click();
  cy.writeNegativeMessage();
  cy.get('@check-sentiment').click();
  cy.get('.submit-draft > button').click();
  cy.writeNeutralMessage();
  cy.get('@check-sentiment').click();
  cy.get('.submit-draft > button').click();
});
