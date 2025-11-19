describe('Login test', () => {
  it('Success login', () => {
    cy.visit('https://conduit.bondaracademy.com/login')
    cy.get('input[placeholder="Email"]').should('be.visible').type('Mohanth@mohi.com')
    cy.get('input[placeholder="Password"]').type('Mohanth@1234')
    cy.get('button[type="submit"]').click()
    cy.url().should('eq', 'https://conduit.bondaracademy.com/')
    //cy.get('h1').should('have.text', 'conduit')
    cy.get('a').contains('conduit')
    cy.get('app-article-list').find('app-article-preview').then((articleList) => {
      cy.wrap(articleList).eq(0).should('contain', 'New title')
    })
  })
})