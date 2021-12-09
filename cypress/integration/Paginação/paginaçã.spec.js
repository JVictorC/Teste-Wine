/// <reference types="cypress" />

describe('Paginação', () => {
    it('Deveria Exister', () => {
      cy.visit('http://localhost:3000/');
      cy.get('[data-cy="paginacao"]').should('exist');
    })

    it('Deveria Exir Inicialmnete pagina 1,2,3', () => {
      cy.visit('http://localhost:3000/');
      cy.get('[data-cy="paginacao"]').should('exist');
      cy.get('[data-cy=card-produto-0]').should('exist');
      cy.get('[data-cy="selecionado"]').then((value) => {
        expect(value.text()).to.equal('1');
      })
      cy.get('[data-cy="proximo-1"]').then((value) => {
        expect(value.text()).to.equal('2');
      })
      cy.get('[data-cy="proximo-2"]').then((value) => {
        expect(value.text()).to.equal('3');
      })
    })

    it('Ao clicar na Pagina 2 deveria trocar de pagina', () => {
      cy.visit('http://localhost:3000/');
      cy.get('[data-cy="paginacao"]').should('exist');
      cy.url().should('include', '/?page=1');
      cy.get('[data-cy=card-produto-0]').should('exist');
      cy.get('[data-cy="proximo-1"]').click();
      cy.get('[data-cy=card-produto-9]').should('exist');
      cy.url().should('include', '/?page=2');
      cy.get('[data-cy="selecionado"]').then((value) => {
        expect(value.text()).to.equal('2')
      })
    })
    
    it('Ao clicar na Pagina 3 deveria trocar de pagina', () => {
      cy.visit('http://localhost:3000/');
      cy.get('[data-cy="paginacao"]').should('exist');
      cy.url().should('include', '/?page=1');
      cy.get('[data-cy=card-produto-0]').should('exist');
      cy.get('[data-cy="proximo-2"]').click();
      cy.get('[data-cy=card-produto-24]').should('exist');
      cy.url().should('include', '/?page=3');
      cy.get('[data-cy="selecionado"]').then((value) => {
        expect(value.text()).to.equal('3')
      })
    })

    it('Ao clicar no texto Proximo deveria trocar de pagina', () => {
      cy.visit('http://localhost:3000/');
      cy.get('[data-cy="paginacao"]').should('exist');
      cy.url().should('include', '/?page=1');
      cy.get('[data-cy=card-produto-0]').should('exist');
      cy.get('[data-cy="proximo"]').click();
      cy.get('[data-cy=card-produto-9]').should('exist');
      cy.url().should('include', '/?page=2');
      cy.get('[data-cy="selecionado"]').then((value) => {
        expect(value.text()).to.equal('2')
      })
    })

})
