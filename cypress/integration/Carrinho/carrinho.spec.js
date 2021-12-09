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

  it('Os itens adicionados deveriam estar no localStorage', () => {
    cy.get('[data-cy="card-produto-0"] > [data-cy="adicionar-ao-carrinho"]')
      .should('exist')
      .click();
    cy.get('[data-cy="carrinho"]').should('exist').then((value) => {
      expect(value.text()).to.equal('1')
      const local = JSON.parse(localStorage.getItem('carrinho'));;
      const validation = local.some((produto) => (
        produto.id === 0 && produto.qtd === 1
      ));
      expect(validation).to.be.true;
    });
  })
})

describe('Adicionar ao Carirnho tela de Detalhes', () => {

  it('Deveria existir o botão de +, -, adicionar e o contador', () => {
    cy.visit('http://localhost:3000/produto/0')
    cy.get('[data-cy="botão-mais"]').should('exist')
    cy.get('[data-cy="botão-menos"]').should('exist')
    cy.get('[data-cy="botão-adicionar"]').should('exist')
    cy.get('article > [data-cy="contador"]').should('exist')
  })

  it('Deveria ser possivel adicionar itens no carrinho', () => {
    cy.visit('http://localhost:3000/produto/0')
    cy.get('[data-cy="botão-mais"]').click().click()
    cy.get('article > [data-cy="contador"]').then((value) => {
      expect(value.text()).to.equal('3')
    })
    cy.get('[data-cy="botão-adicionar"]').click()
    cy.get('[data-cy="carrinho"]').should('exist').then((value) => {
      expect(value.text()).to.equal('3')
    });
  })
})

