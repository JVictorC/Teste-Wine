/// <reference types="cypress" />

describe('Carrinho', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
    window.localStorage.clear()
  })


  it('Deveria ter um Icon com a Quantidade de Itens no Carrinho', () => {
    cy.get('[data-cy="carrinho"]').should('exist').then((value) => {
      expect(value.text()).to.equal('0')
    });
  });

  it('Deveria ser possivel adicionar um item no carrinho pela paginal inicial', () => {
    cy.get('[data-cy="card-produto-0"] > [data-cy="adicionar-ao-carrinho"]')
      .should('exist')
      .click()
      .click();

    cy.get('[data-cy="carrinho"]').should('exist').then((value) => {
      expect(value.text()).to.equal('2')
    });
  })


  it('Deveria ser possivel adicionar varios itens no carrinho pela paginal inicial', () => {
    cy.get('[data-cy="card-produto-0"] > [data-cy="adicionar-ao-carrinho"]')
      .should('exist')
      .click()
      .click();

    cy.get('[data-cy="card-produto-1"] > [data-cy="adicionar-ao-carrinho"]')
      .should('exist')
      .click()
      .click();

    cy.get('[data-cy="carrinho"]').should('exist').then((value) => {
      expect(value.text()).to.equal('4')
    });
  })

})
