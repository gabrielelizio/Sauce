
// Comando para acessar a página de login
Cypress.Commands.add('acessarSiteLogin', () => {
  cy.visit('/');
});

// Comando para preencher e submeter o formulário de login
Cypress.Commands.add('preencherLogin', (user, password) => {
  if (user) cy.get('[data-test="username"]').type(user);
  if (password) cy.get('[data-test="password"]').type(password);
  cy.get('#login-button').click();
});

// Login com sucesso
Cypress.Commands.add('loginComSucesso', (user = Cypress.env('USUARIO'), password = Cypress.env('SENHA')) => {
  cy.acessarSiteLogin();
  cy.preencherLogin(user, password);
});

// Login com usuário incorreto
Cypress.Commands.add('loginComUsuarioIncorreto', (user = Cypress.env('USUARIOINCORRETO'), password = Cypress.env('SENHA')) => {
  cy.acessarSiteLogin();
  cy.preencherLogin(user, password);
});

// Login com senha inválida
Cypress.Commands.add('loginComSenhaInvalida', (user = Cypress.env('USUARIO'), password = Cypress.env('SENHAINCORRETA')) => {
  cy.acessarSiteLogin();
  cy.preencherLogin(user, password);
});

// Apenas usuário informado
Cypress.Commands.add('loginApenasUsuario', (user = Cypress.env('USUARIOINCORRETO')) => {
  cy.acessarSiteLogin();
  cy.get('[data-test="username"]').type(user);
  cy.get('#login-button').click();
});

// Apenas senha informada
Cypress.Commands.add('loginApenasSenha', (password = Cypress.env('SENHAINCORRETA')) => {
  cy.acessarSiteLogin();
  cy.get('[data-test="password"]').type(password);
  cy.get('#login-button').click();
});

// Usuário bloqueado
Cypress.Commands.add('loginUsuarioLockado', (user = Cypress.env('USUARIOLOCKED'), password = Cypress.env('SENHA')) => {
  cy.acessarSiteLogin();
  cy.preencherLogin(user, password);
});
