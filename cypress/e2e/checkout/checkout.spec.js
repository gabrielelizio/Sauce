describe('Checkout', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.loginComSucesso();
    cy.get('.product_label, .title').should('contain', 'Products');
  });


  it('Fluxo de checkout de compra', () => {
    // Arrange & Act
    cy.adicionarProdutoNoCarrinho('Test.allTheThings() T-Shirt (Red)');
    cy.preencherCheckout('Nome', 'Sobrenome', '12345-678');
    // Assert
    cy.contains('Thank you for your order!').should('be.visible');
  });

  it('Checkout sem preencher o nome', () => {
    cy.adicionarProdutoNoCarrinho('Test.allTheThings() T-Shirt (Red)');
    cy.checkoutSemNome('Sobrenome', '12345-678');
    cy.get('[data-test="error"]').should('contain', 'Error: First Name is required');
  });

  it('Checkout sem preencher o sobrenome', () => {
    cy.adicionarProdutoNoCarrinho('Test.allTheThings() T-Shirt (Red)');
    cy.checkoutSemSobrenome('Nome', '12345-678');
    cy.get('[data-test="error"]').should('contain', 'Error: Last Name is required');
  });

  it('Checkout sem preencher o CEP', () => {
    cy.adicionarProdutoNoCarrinho('Test.allTheThings() T-Shirt (Red)');
    cy.checkoutSemCep('Nome', 'Sobrenome');
    cy.get('[data-test="error"]').should('contain', 'Error: Postal Code is required');
  });
});
