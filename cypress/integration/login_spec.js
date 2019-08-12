/// <reference types="Cypress" />

describe('/login', () => {
    beforeEach(() => {
        cy.visit('/#/login')
    })    

it('links to #/register', () => {
    cy
    .contains('Need an account?')
    .should('have.attr', 'href', '#/register')
    .should('contain.text','Need')
})

it('required email', () => {
    cy.get('input[type="password"]').type('capitole123{enter}')
    cy.get('form').contains('Sign in').click()
    cy.get('.error-messages')
    .should('contain', 'email or password is invalid')
})

it('required password', () => {
    cy.get('input[type="email"]').type('apuyinc.brete@gmail.com{enter}')

    cy.get('list-errors')
    .within(()=> {
        cy.get('.error-messages')
        .should('contain', 'email or password is invalid')
    })
    
    cy.get('.error-messages')
    .should('contain', 'email or password is invalid')
})

it('redirects to home after successful login', () => {
    cy.get('input[type="email"]').type('apuyinc.brete@gmail.com')
    cy.get('input[type="password"]').type('capitole123{enter}')
    cy.hash().should('eq', '#/')
})
})