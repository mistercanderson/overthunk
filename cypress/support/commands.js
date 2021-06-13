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
