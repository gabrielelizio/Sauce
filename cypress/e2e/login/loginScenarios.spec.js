context("Testes Funcionais de GUI", () => {
  describe("Logins", () => {
    it("Login Sucesso", () => {
      // Arrange & Act
      cy.loginComSucesso();
      // Assert
      cy.get('.product_label, .title').should('contain', 'Products');
    });

    it("Login Incorreto Informando Usuario Válido", () => {
      cy.loginComUsuarioIncorreto();
      cy.get('[data-test="error"]').should('contain', 'Epic sadface: Username and password do not match any user in this service');
    });

    it("Login Incorreto Informando Usuario Válido e Senha Invalida", () => {
      cy.loginComSenhaInvalida();
      cy.get('[data-test="error"]').should('contain', 'Epic sadface: Username and password do not match any user in this service');
    });

    it("Informando Apenas Usuario", () => {
      cy.loginApenasUsuario();
      cy.get('[data-test="error"]').should('contain', 'Epic sadface: Password is required');
    });

    it("Informando Apenas Senha", () => {
      cy.loginApenasSenha();
      cy.get('[data-test="error"]').should('contain', 'Epic sadface: Username is required');
    });

    it("Informando Usuario já logado", () => {
      cy.loginUsuarioLockado();
      cy.get('[data-test="error"]').should('contain', 'Epic sadface: Sorry, this user has been locked out.');
    });
  });
});
