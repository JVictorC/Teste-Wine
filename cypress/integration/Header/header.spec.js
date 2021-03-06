/// <reference types="cypress" />

describe('Header', () => {
  it('deveria estar na tela inicial', () => {
    cy.visit('http://localhost:3000/');
    cy.get('[data-cy="header"]').should('exist');
  });

  it('deveria conter o icon Wine', () => {
    cy.visit('http://localhost:3000/');
    cy.get('[alt="logo Wine"]').should('exist');
  });

  it('deveria conter todos os links', () => {
    cy.visit('http://localhost:3000/');
    ['Clube', 'Loja', 'Produtores', 'Ofertas', 'Eventos'].forEach((link) => {
      cy.get(`[data-cy=${link}]`).should('exist');
    })
  });

  it('deveria ter os 3 Icons', () => {
    cy.visit('http://localhost:3000/');
    cy.get('[data-cy="procurar"]').should('exist');
    cy.get('[data-cy="perfil"]').should('exist');
    cy.get('[data-cy="carrinho"]').should('exist');
  })

  it('deveria conter a quantidade de itens no carrinho', () => {
    cy.visit('http://localhost:3000/');
    cy.get('[data-cy="contador"]').then((contador) => {
      expect(contador.text()).to.equal('0')
    });
  });

  it('quando clicado o icone de procurar deverar abrir a barra de procura', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#barra-procura').should('not.exist');
    cy.get('[data-cy="procurar"]').click();
    cy.get('#barra-procura');
    cy.get('[data-cy="procurar"]').click();
    cy.get('#barra-procura').should('not.exist');
  });

  describe('Header Mobile', () => {
    it('Deveria sumir a barra de links', () => {
      cy.viewport(600, 660);
      cy.visit('http://localhost:3000/');
      ['Clube', 'Loja', 'Produtores', 'Ofertas', 'Eventos'].forEach((link) => {
        cy.get(`[data-cy=${link}]`).should('not.be.visible')
      });
    })

    it('Icone de Perfil Deveria Sumir', () => {
      cy.viewport(600, 660);
      cy.visit('http://localhost:3000/');
      cy.get('[data-cy="perfil"]').should('not.be.visible')
    })

  })

  describe('Barra de Busca', () => {
    it('deveria estar na tela inicial', () => {
      cy.visit('http://localhost:3000/');
      cy.get('[data-cy="header"]').should('exist');
      cy.get('[data-cy="procurar"]').click();
      cy.get('#barra-procura').should('exist');
    });

    it('deveria filtrar os produtos pelo nome', () => {
      cy.visit('http://localhost:3000/');
      cy.get('[data-cy="procurar"]').click();
      cy.get('#barra-procura').should('exist');
      cy.get('#barra-procura').type('Familia La Mateo')
      cy.get('form > button').click();
      cy.get('[data-cy="card-produto-1"').should('exist');
      cy.get('[data-cy="card-produto-5"]').should('exist');

    })
  })

})