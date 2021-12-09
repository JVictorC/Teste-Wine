/// <reference types="cypress" />

describe('Barra de Busca', () => {
  it('deveria estar na tela inicial', () => {
    cy.visit('http://localhost:3000/');
    cy.get('[data-cy="header"]').should('exist');
  });
})
