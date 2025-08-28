
/**
 * Comandos relacionados ao login do sistema
 * Implementando princípios SOLID e DRY
 * Utilizando fixtures para elementos UI e mensagens
 */

// Variáveis para armazenar dados dos fixtures
let uiElements;
let userData;

// Carrega os fixtures necessários
before(() => {
  cy.fixture('ui.json').then((ui) => {
    uiElements = ui;
  });
  cy.fixture('user.json').then((user) => {
    userData = user;
  });
});

// Tipos de mensagens de erro
const ERROR_MESSAGES = {
  LOCKED_USER: 'Epic sadface: Sorry, this user has been locked out.',
  INVALID_CREDENTIALS: 'Epic sadface: Username and password do not match any user in this service',
  MISSING_USERNAME: 'Epic sadface: Username is required',
  MISSING_PASSWORD: 'Epic sadface: Password is required'
};

// Seletores dos elementos da página de login
const LOGIN_ELEMENTS = {
  username: '[data-test="username"]',
  password: '[data-test="password"]',
  loginButton: '#login-button',
  errorMessage: '[data-test="error"]'
};

/**
 * Realiza o login no sistema com configurações flexíveis
 * @param {Object} config - Configurações do login
 * @param {string} config.username - Nome do usuário
 * @param {string} config.password - Senha do usuário
 * @param {boolean} config.shouldSucceed - Se o login deve ter sucesso
 * @param {string} config.expectedError - Mensagem de erro esperada
 */
Cypress.Commands.add('realizarLogin', (config = {}) => {
  // Combina dados sensíveis do env com dados do fixture
  const defaultConfig = {
    username: Cypress.env('USUARIO') || userData.valid.username,
    password: Cypress.env('SENHA') || userData.valid.password,
    shouldSucceed: true,
    expectedError: null
  };
  
  const options = { ...defaultConfig, ...config };
  
  // Acessa a página de login
  cy.visit('/');
  
  // Preenche os campos
  if (options.username) {
    cy.get(LOGIN_ELEMENTS.username).type(options.username);
  }
  if (options.password) {
    cy.get(LOGIN_ELEMENTS.password).type(options.password);
  }
  
  // Clica no botão de login
  cy.get(LOGIN_ELEMENTS.loginButton).click();
  
  // Validações
  if (options.shouldSucceed) {
    cy.url().should('include', '/inventory.html');
    cy.get('.product_label, .title').should('contain', uiElements.titles.products);
  } else if (options.expectedError) {
    cy.get(LOGIN_ELEMENTS.errorMessage).should('contain', options.expectedError);
  }
});

// Comandos específicos usando o comando base
Cypress.Commands.add('loginComSucesso', () => {
  cy.realizarLogin({
    username: Cypress.env('USUARIO') || userData.valid.username,
    password: Cypress.env('SENHA') || userData.valid.password
  });
});

Cypress.Commands.add('loginComUsuarioIncorreto', () => {
  cy.realizarLogin({
    username: Cypress.env('USUARIOINCORRETO') || userData.invalid.username,
    password: Cypress.env('SENHA') || userData.valid.password,
    shouldSucceed: false,
    expectedError: ERROR_MESSAGES.INVALID_CREDENTIALS
  });
});

Cypress.Commands.add('loginComSenhaInvalida', () => {
  cy.realizarLogin({
    username: Cypress.env('USUARIO') || userData.valid.username,
    password: Cypress.env('SENHAINCORRETA') || userData.invalid.password,
    shouldSucceed: false,
    expectedError: ERROR_MESSAGES.INVALID_CREDENTIALS
  });
});

Cypress.Commands.add('loginApenasUsuario', () => {
  cy.realizarLogin({
    username: Cypress.env('USUARIOINCORRETO') || userData.invalid.username,
    password: null,
    shouldSucceed: false,
    expectedError: ERROR_MESSAGES.MISSING_PASSWORD
  });
});

Cypress.Commands.add('loginApenasSenha', () => {
  cy.realizarLogin({
    username: null,
    password: Cypress.env('SENHAINCORRETA') || userData.invalid.password,
    shouldSucceed: false,
    expectedError: ERROR_MESSAGES.MISSING_USERNAME
  });
});

Cypress.Commands.add('loginUsuarioLockado', () => {
  cy.realizarLogin({
    username: Cypress.env('USUARIOLOCKED') || userData.locked.username,
    password: Cypress.env('SENHA') || userData.valid.password,
    shouldSucceed: false,
    expectedError: ERROR_MESSAGES.LOCKED_USER
  });
});
