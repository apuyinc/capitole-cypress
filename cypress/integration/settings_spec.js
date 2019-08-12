/// <reference types="Cypress" />

describe('/settings', () => {
    beforeEach(() => {
        //visit login page first
        cy.login_api()
        cy.visit('/#/settings')
        
    })    

    it.only('settings has greeting login', () => {
        cy.contains('h1', 'Your Settings')
    })

    it('settings has greeting login with api', () => {
        cy.contains('h1', 'Your Settings')
    })

    it('session expired after logout', () => {
        cy.get('button.btn-outline-danger').click()

        cy.window()
        .its('localStorage')
        .invoke('getItem', 'jwt')
        .should('not.exist')

        cy.contains('Your Settings').should('not.exist')
    })
})

