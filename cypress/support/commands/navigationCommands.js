Cypress.Commands.add('clicarAboutEValidarUrl', () => {
  cy.findByRole('button', { name: 'Open Menu' }).click();
  cy.findByRole('link', { name: 'About' })
    .invoke('removeAttr', 'target')
    .click();
  cy.url().should('eq', 'https://saucelabs.com/');
});
Cypress.Commands.add('openMenu', () => {
  
  cy.get('#react-burger-menu-btn', { timeout: 10000 })
    .should('be.visible')
    .click({ force: true });
 
});

Cypress.Commands.add('goHome', () => {
  cy.openMenu();
  cy.get('#about_sidebar_link', { timeout: 10000 })
    .should('be.visible')
    .and('have.attr', 'href', 'https://saucelabs.com/')
    .invoke('removeAttr', 'target')
    .click({ force: true });
});
// Valida acesso negado à página restrita inventory.html
Cypress.Commands.add('validarAcessoNegadoInventory', () => {
  cy.visit('/inventory.html', { failOnStatusCode: false });
  cy.get('[data-test="error"]').should(
    'contain',
    "Epic sadface: You can only access '/inventory.html' when you are logged in."
  );
  cy.get('[data-test="username"]').should('be.visible');
  cy.url().should('include', '/');
});