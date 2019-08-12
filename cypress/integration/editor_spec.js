/// <reference types="Cypress" />

describe('/editor', () => {
    beforeEach(() => {
        //visit login page first
        cy.login()
        cy.visit('/#/editor/')
    })    

    it('Cypress complex assertios', () => {
        cy.get('input[placeholder="Article Title"]')
        .type('Capitole1')
        cy.get('.btn').click()

        cy.get('.error-messages').as('error_list')
        cy.get('@error_list')
        .contains('body can\'t be blank')
        cy.get('@error_list')
        .contains('description can\'t be blank')

        cy.screenshot()

        cy.get('.error-messages')
        .find('li')
        .should(($li) => {
            let error_messages = $li.map((i, el) => 
                Cypress.$(el).text().trim())
    
                // jquery map returns jquery object
                // and .get() convert this to simple array

            error_messages = error_messages.get();

            expect(error_messages).to.have.length(3)

            expect(error_messages, 'has following errors').to.deep.eq([
                'body can\'t be blank',
                'description can\'t be blank',
                'description is too short (minimum is 1 character)'
             ])
        })
    })
})

