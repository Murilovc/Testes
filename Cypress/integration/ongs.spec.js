/// <reference types="cypress" />

describe('Ongs', () => {


    it('deve poder realizar um cadastro', () => {
        cy.visit('http://127.0.0.1:5500/')
        // cy.get - busca um elemento
        //.type - insere um texto
        cy.get('[data-cy=name]').type('Dogs queridos');
        cy.get('[data-cy=email]').type('dogs@mail.com');
        cy.get('[data-cy=whatsaap]').type('68988776655');
        cy.get('[data-cy=city]').type('Rio Branco');
        cy.get('[data-cy=uf ]').type('AC');

        cy.get('[data-cy=submit]').click();
    })

    it('deve poder realizar um login no sistema', () => {

    })
})