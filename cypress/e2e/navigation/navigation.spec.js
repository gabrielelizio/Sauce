describe('Navegação por menus', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.loginComSucesso();
    cy.get('.product_label, .title').should('contain', 'Products');
  });

  it.only('Navegar até Home e validar comentário', () => {
  cy.goHome();
  cy.url({ timeout: 30000 }).should('include', 'saucelabs.com');
  cy.contains('Chuan Au', { timeout: 30000 }).should('be.visible');
  });

  it('Deve exibir menu e opções após login', () => {
    cy.visit('/');
    cy.loginComSucesso();
    cy.get('#react-burger-menu-btn').should('be.visible');
    cy.openMenu();
    cy.get('.bm-item-list').should('be.visible');
  });
});

describe('Navegação sem acesso', () => {
  it('Deve exibir erro ao tentar acessar página restrita sem login', () => {
    // Arrange & Act
    cy.visit('/inventory.html', { failOnStatusCode: false });
    // Assert
    cy.get('[data-test="error"]').should(
      'contain',
      "Epic sadface: You can only access '/inventory.html' when you are logged in."
    );
    cy.get('[data-test="username"]').should('be.visible');
    cy.url().should('include', '/');
  });

    it('Não deve exibir menu se não estiver logado', () => {
    cy.visit('/');
    cy.get('#react-burger-menu-btn').should('not.exist');
  });
});