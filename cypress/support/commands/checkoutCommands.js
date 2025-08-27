// Checkout com dados faltando
Cypress.Commands.add('checkoutSemNome', (lastName, postalCode) => {
  cy.get('.shopping_cart_link').click();
  cy.get('[data-test="checkout"]').click();
  cy.get('[data-test="lastName"]').type(lastName);
  cy.get('[data-test="postalCode"]').type(postalCode);
  cy.get('[data-test="continue"]').click();
});

Cypress.Commands.add('checkoutSemSobrenome', (firstName, postalCode) => {
  cy.get('.shopping_cart_link').click();
  cy.get('[data-test="checkout"]').click();
  cy.get('[data-test="firstName"]').type(firstName);
  cy.get('[data-test="postalCode"]').type(postalCode);
  cy.get('[data-test="continue"]').click();
});

Cypress.Commands.add('checkoutSemCep', (firstName, lastName) => {
  cy.get('.shopping_cart_link').click();
  cy.get('[data-test="checkout"]').click();
  cy.get('[data-test="firstName"]').type(firstName);
  cy.get('[data-test="lastName"]').type(lastName);
  cy.get('[data-test="continue"]').click();
});

// Adiciona produto ao carrinho
Cypress.Commands.add('adicionarProdutoNoCarrinho', (productName) => {
  cy.contains('.inventory_item', productName)
    .find('button')
    .click();
});

// Realiza o fluxo de checkout (preenche e avança)
Cypress.Commands.add('preencherCheckout', (firstName, lastName, postalCode) => {
  cy.get('.shopping_cart_link').click();
  cy.get('[data-test="checkout"]').click();
  cy.get('[data-test="firstName"]').type(firstName);
  cy.get('[data-test="lastName"]').type(lastName);
  cy.get('[data-test="postalCode"]').type(postalCode);
  cy.get('[data-test="continue"]').click();
  cy.get('[data-test="finish"]').click();
});
