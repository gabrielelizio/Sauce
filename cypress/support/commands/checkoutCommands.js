/**
 * Comandos relacionados ao checkout do sistema
 * Implementando princípios SOLID e DRY
 */

// Seletores dos elementos do checkout
const CHECKOUT_ELEMENTS = {
  cartLink: '.shopping_cart_link',
  checkoutButton: '[data-test="checkout"]',
  firstName: '[data-test="firstName"]',
  lastName: '[data-test="lastName"]',
  postalCode: '[data-test="postalCode"]',
  continueButton: '[data-test="continue"]',
  finishButton: '[data-test="finish"]',
  errorMessage: '[data-test="error"]'
};

// Mensagens de erro
const ERROR_MESSAGES = {
  MISSING_FIRST_NAME: 'Error: First Name is required',
  MISSING_LAST_NAME: 'Error: Last Name is required',
  MISSING_POSTAL_CODE: 'Error: Postal Code is required'
};

/**
 * Realiza o processo de checkout com configurações flexíveis
 * @param {Object} config - Configurações do checkout
 * @param {string} config.firstName - Nome
 * @param {string} config.lastName - Sobrenome
 * @param {string} config.postalCode - CEP
 * @param {boolean} config.shouldFinish - Se deve finalizar a compra
 * @param {string} config.expectedError - Mensagem de erro esperada
 */
Cypress.Commands.add('realizarCheckout', (config = {}) => {
  const defaultConfig = {
    firstName: 'John',
    lastName: 'Doe',
    postalCode: '12345',
    shouldFinish: true,
    expectedError: null
  };
  
  const options = { ...defaultConfig, ...config };
  
  // Acessa o carrinho
  cy.get(CHECKOUT_ELEMENTS.cartLink).click();
  cy.get(CHECKOUT_ELEMENTS.checkoutButton).click();
  
  // Preenche os campos disponíveis
  if (options.firstName) {
    cy.get(CHECKOUT_ELEMENTS.firstName).type(options.firstName);
  }
  if (options.lastName) {
    cy.get(CHECKOUT_ELEMENTS.lastName).type(options.lastName);
  }
  if (options.postalCode) {
    cy.get(CHECKOUT_ELEMENTS.postalCode).type(options.postalCode);
  }
  
  // Continua o checkout
  cy.get(CHECKOUT_ELEMENTS.continueButton).click();
  
  // Validações
  if (options.expectedError) {
    cy.get(CHECKOUT_ELEMENTS.errorMessage).should('contain', options.expectedError);
  } else if (options.shouldFinish) {
    cy.get(CHECKOUT_ELEMENTS.finishButton).click();
  }
});

/**
 * Adiciona produto ao carrinho
 * @param {string} productName - Nome do produto a ser adicionado
 */
Cypress.Commands.add('adicionarProdutoNoCarrinho', (productName) => {
  cy.contains('.inventory_item', productName)
    .find('button')
    .click();
});

// Comandos específicos usando o comando base
Cypress.Commands.add('checkoutSemNome', (lastName, postalCode) => {
  cy.realizarCheckout({
    firstName: null,
    lastName,
    postalCode,
    shouldFinish: false,
    expectedError: ERROR_MESSAGES.MISSING_FIRST_NAME
  });
});

Cypress.Commands.add('checkoutSemSobrenome', (firstName, postalCode) => {
  cy.realizarCheckout({
    firstName,
    lastName: null,
    postalCode,
    shouldFinish: false,
    expectedError: ERROR_MESSAGES.MISSING_LAST_NAME
  });
});

Cypress.Commands.add('checkoutSemCep', (firstName, lastName) => {
  cy.realizarCheckout({
    firstName,
    lastName,
    postalCode: null,
    shouldFinish: false,
    expectedError: ERROR_MESSAGES.MISSING_POSTAL_CODE
  });
});

/**
 * Mantido para compatibilidade com testes existentes
 * @deprecated Use realizarCheckout instead
 */
Cypress.Commands.add('preencherCheckout', (firstName, lastName, postalCode) => {
  cy.realizarCheckout({
    firstName,
    lastName,
    postalCode,
    shouldFinish: true
  });
});
