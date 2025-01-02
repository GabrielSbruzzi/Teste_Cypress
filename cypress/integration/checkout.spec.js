describe('Checkout Testes', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/v1/index.html');
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('#login-button').click();

    cy.get('.inventory_item').first().find('button').click();
    cy.get('.shopping_cart_link').click();
  });

  it('Deve preencher as informações de checkout', () => {
    cy.get('.checkout_button').click();

    cy.get('[data-test="firstName"]').type('João');
    cy.get('[data-test="lastName"]').type('Silva');
    cy.get('[data-test="postalCode"]').type('12345');

    cy.get('.cart_button').click();

    cy.url().should('include', '/checkout-step-two.html');
  });

  it('Deve finalizar a compra corretamente', () => {
    cy.get('.checkout_button').click();

    cy.get('[data-test="firstName"]').type('John');
    cy.get('[data-test="lastName"]').type('Doe');
    cy.get('[data-test="postalCode"]').type('12345');

    cy.get('.cart_button').click();

    cy.get('.btn_action.cart_button').contains('FINISH').click(); 

    cy.url().should('include', '/checkout-complete.html');

    cy.get('.complete-header', { timeout: 10000 }).should('contain', 'THANK YOU FOR YOUR ORDER');
  });
});
