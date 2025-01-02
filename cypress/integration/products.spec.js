describe('Página de Produto Testes', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/v1/index.html');
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('#login-button').click();
  });

  it('Deve listar produtos corretamente', () => {
    cy.get('.inventory_list').should('be.visible');
    cy.get('.inventory_item').should('have.length', 6);
  });

  it('Deve permitir ordenar os produtos por preço', () => {
    cy.get('.product_sort_container').select('lohi');
    cy.get('.inventory_item').first().should('contain', '$7.99');
    cy.get('.product_sort_container').select('hilo');
    cy.get('.inventory_item').first().should('contain', '$49.99');
  });

  it('Deve validar visualmente os produtos', () => {
    cy.get('.inventory_item').each(($item) => {
      cy.wrap($item).find('.inventory_item_img').should('be.visible');
      cy.wrap($item).find('.inventory_item_name').should('be.visible');
      cy.wrap($item).find('.inventory_item_price').should('be.visible');
    });
  });
});
