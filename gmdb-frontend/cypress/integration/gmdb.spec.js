describe("GMDB Home Page", () => {
    beforeEach(() => {
        cy.visit('/')
    })
    
    it("header contains browsing movie heading with a message that there are no movie", () => {
        cy.get('.App-header').should('contain', 'Browsing Movies')
        cy.get('p').should('contain', 'There are no movies to list.')
      })
})