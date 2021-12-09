/// <reference types="cypress" />

describe('Filter', () => {
  it('Deveria Existir', () => {
    cy.visit('http://localhost:3000/');
    cy.get('[data-cy=component-filter]').should('exist');
  })

  it('Deveria conter 5 filtros com os valores "Até R$40", "R$40 A R$60", "R$100 A R$200", "R$200 A R$500" e "Acima de R$500" ', () => {
    [
      'Até R$40',
      'R$40 A R$60',
      'R$100 A R$200',
      'R$200 A R$500',
      'Acima de R$500',
    ].forEach((title) => {
      cy.get(`[data-cy="${title}"]`).should('exist')
    })
  })

  it('Ao clicar no fitltro de Até 40 reais com esses dados deveriam retornar nenhum produto', () => {
    cy.visit('http://localhost:3000/');
    cy.get('[data-cy= card-produto-0]').should('exist');
    cy.get('.total-produtos').should('exist').then((value) => {
      expect(value.text()).to.equal('62');
    });
    cy.get('[data-cy="Até R$40"]').should('exist');
    cy.get('[data-cy="Até R$40"]').click();
    cy.wait(1300);
    cy.get('.total-produtos').then((value) => {
      expect(value.text()).to.equal('0')
    })
  })

  it('Ao clicar no fitltro de 100 a 200 reais com esses dados deveriam retornar 32 produtos', () => {
    cy.visit('http://localhost:3000/');
    cy.get('[data-cy=card-produto-0]').should('exist');
    cy.get('.total-produtos').should('exist').then((value) => {
      expect(value.text()).to.equal('62');
    });
    cy.get('[data-cy="R$100 A R$200"]').should('exist');
    cy.get('[data-cy="R$100 A R$200"]').click();
    cy.wait(1300);
    cy.get('.total-produtos').then((value) => {
      expect(value.text()).to.equal('32')
    })
  })


  describe('Teste Filtro Mobile', () => {
    it('O filtro Deveria sumir na resuloção mobile', () => {
      cy.viewport(750, 660);
      cy.visit('http://localhost:3000/');
      cy.get('[data-cy=component-filter]').should('exist');
    })
  })
  


})
