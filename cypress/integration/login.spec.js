describe('Login Testes', () => {
  beforeEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
  });

  it('Deve fazer login com credenciais válidas', () => {
    cy.visit('https://www.saucedemo.com/v1/index.html');
    cy.get('[data-test="username"]', { timeout: 10000 }).should('be.visible');
    cy.get('[data-test="password"]', { timeout: 10000 }).should('be.visible');
    cy.get('#login-button', { timeout: 10000 }).should('be.visible');
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('#login-button').click();
    cy.url().should('include', '/inventory.html');
  });

  it('Deve mostrar erro para credenciais inválidas', () => {
    cy.visit('https://www.saucedemo.com/v1/index.html');
    cy.get('[data-test="username"]').type('invalid_user');
    cy.get('[data-test="password"]').type('wrong_password');
    cy.get('#login-button').click();
    cy.get('.error-message-container', { timeout: 10000 }).should('be.visible');
  });

  it('Deve mostrar erro quando o usuário tentar fazer login sem preencher o nome de usuário e senha', () => {
    cy.visit('https://www.saucedemo.com/v1/index.html');
    cy.get('#login-button').click();
    cy.get('.error-message-container', { timeout: 10000 }).should('be.visible');
    cy.get('.error-message-container').should('contain', 'Username is required'); 
    cy.get('.error-message-container').should('contain', 'Password is required');
  });
});
