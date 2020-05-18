describe("GMDB Home Page", () => {
    beforeEach(() => {
        cy.visit('/')
    })
    
    it("header contains GMDB, ", () => {
        cy.get('.App-header').should('contain', 'GMDB')
    })

    it("header contains navigation bar with elements home, login, search", () => {        
        cy.get('#navigation').should('contain', 'Home')
        cy.get('#navigation').should('contain', 'Login')
        cy.get('#navigation').should('contain', 'Search')
    })

    
})