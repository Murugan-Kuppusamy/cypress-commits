describe('Login test', () => {
  it('Success login', () => {
    cy.visit('https://conduit.bondaracademy.com/login')
    cy.get('input[placeholder="Email"]').type('Mohanth@mohi.com')
    cy.get('input[placeholder="Password"]').type('Mohanth@1234')
    cy.get('button[type="submit"]').click()
    cy.url().should('eq', 'https://conduit.bondaracademy.com/')
    cy.get('h1').should('have.text', 'conduit')
  })
})