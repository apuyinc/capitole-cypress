Cypress.Commands.add('login', () => {
    cy.visit('/#/login')
    cy.get('input[type="email"]').type('capitole_user@capitole-consulting.com')
    cy.get('input[type="password"]').type('capitole123').click()
    cy.hash().should('eq', '#/')
})

Cypress.Commands.add('login_api', () => {
    cy.request({
        method: 'POST',
        //url: 'https://conduit.productionready.io/api/users/login',
        url: 'http://localhost:3000/api/users/login',
        body: {
            user: {
                email: 'capitole_user@capitole-consulting.com',
                password: 'capitole123'
            }
        }
    })
    .then((resp) => {
        window.localStorage.setItem('jwt', resp.body.user.token)
    })
})