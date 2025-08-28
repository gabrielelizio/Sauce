describe('Checkout', () => {
  let checkoutData;
  let uiData;

  before(() => {
    // Carrega os dados de teste
    cy.fixture('checkout.json').then((data) => {
      checkoutData = data;
    });
    cy.fixture('ui.json').then((data) => {
      uiData = data;
    });
  });

  beforeEach(() => {
    cy.visit('/');
    cy.loginComSucesso();
    cy.get('.product_label, .title').should('contain', uiData.titles.products);
  });

  it('Fluxo de checkout de compra', () => {
    // Arrange & Act
    cy.adicionarProdutoNoCarrinho(checkoutData.products.tshirt.name);
    cy.realizarCheckout({
      firstName: checkoutData.customerData.firstName,
      lastName: checkoutData.customerData.lastName,
      postalCode: checkoutData.customerData.postalCode,
      shouldFinish: true
    });
    // Assert
    cy.contains(checkoutData.messages.success).should('be.visible');
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
