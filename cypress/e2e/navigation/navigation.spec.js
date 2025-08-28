// Variável compartilhada entre describes
let uiData;

describe('Navegação por menus', () => {
  before(() => {
    // Carrega os dados de UI
    cy.fixture('ui.json').then((ui) => {
      uiData = ui;
    });
  });

  beforeEach(() => {
    cy.visit('/');
    cy.loginComSucesso();
    cy.get('.product_label, .title').should('contain', uiData.titles.products);
  });

  it.only('Navegar até Home e validar comentário', () => {
    cy.get(uiData.elements.menuButton).click();
    cy.get('#about_sidebar_link')
      .should('be.visible')
      .and('have.attr', 'href', 'https://saucelabs.com/');
    cy.get('#about_sidebar_link')
      .invoke('attr', 'href')
      .should('eq', 'https://saucelabs.com/');
      cy.goHome();
      cy.origin('https://saucelabs.com', () => {
      cy.contains('button', 'OK').click();
      cy.url({ timeout: 3000 }).should('include', 'saucelabs.com');
      cy.contains('Chuan Au', { timeout: 30000 }).should('be.visible');
  });
});


  it('Deve exibir menu e opções após login', () => {
    cy.get(uiData.elements.menuButton).should('be.visible');
    cy.openMenu();
    cy.get('.bm-item-list').should('be.visible');
    
    // Validar opções do menu
    cy.get('.bm-item-list').within(() => {
      cy.contains('a', 'All Items').should('be.visible');
      cy.contains('a', 'About').should('be.visible');
      cy.contains('a', 'Logout').should('be.visible');
      cy.contains('a', 'Reset App State').should('be.visible');
    });
  });
});

describe('Navegação sem acesso', () => {
  beforeEach(() => {
    // Garantir que os dados de UI estão carregados
    cy.fixture('ui.json').then((ui) => {
      uiData = ui;
    });
  });

  it('Deve exibir erro ao tentar acessar página restrita sem login', () => {
    const restrictedError = "Epic sadface: You can only access '/inventory.html' when you are logged in.";
    
    // Arrange & Act
    cy.visit('/inventory.html', { failOnStatusCode: false });
    // Assert
    cy.get('[data-test="error"]').should('contain', restrictedError);
    cy.get('[data-test="username"]').should('be.visible');
    cy.url().should('include', '/');
  });

  it('Não deve exibir menu se não estiver logado', () => {
    cy.visit('/');
    cy.get(uiData.elements.menuButton).should('not.exist');
  });
});