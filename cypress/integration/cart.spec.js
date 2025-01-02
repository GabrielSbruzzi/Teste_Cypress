describe('Carrinho de Compras Testes', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/v1/index.html');
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('#login-button').click();
  });

  it('Deve adicionar produtos ao carrinho e verificar quantidade', () => {
    cy.get('.inventory_item').first().find('button').click();
    
    cy.get('.shopping_cart_badge').should('have.text', '1');

    cy.get('.shopping_cart_link').click();

    cy.get('.cart_item').first().find('.cart_quantity').should('have.text', '1');
  });

  it('Deve adicionar múltiplos produtos ao carrinho e verificar total', () => {
    cy.get('.inventory_item').eq(0).find('button').click(); 
    cy.get('.inventory_item').eq(1).find('button').click(); 
    
    cy.get('.shopping_cart_badge').should('have.text', '2');
    
    cy.get('.shopping_cart_link').click();
    
    cy.get('.cart_item').should('have.length', 2);
  });

  it('Deve remover produtos do carrinho e verificar que está vazio', () => {
    cy.get('.inventory_item').first().find('button').click();
    
    cy.get('.shopping_cart_link').click();

    cy.get('.cart_item').first().find('.cart_button').click();

    cy.get('.cart_item').should('not.exist');

  });

  it('Deve verificar o total do carrinho com 1 produto', () => {
    cy.get('.inventory_item').first().find('button').click();
    
    cy.get('.shopping_cart_link').click();
    
    cy.get('.cart_item').first().find('.cart_quantity').should('have.text', '1');
    
  });

  it('Deve verificar o total do carrinho com múltiplos produtos', () => {
    cy.get('.inventory_item').eq(0).find('button').click(); 
    cy.get('.inventory_item').eq(1).find('button').click(); 
    
    cy.get('.shopping_cart_link').click();
    
    cy.get('.cart_item').should('have.length', 2);
  });
});
