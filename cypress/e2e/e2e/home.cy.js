describe('Verify Nav Menu', function() {
    it('Verify Nav', function() {
        cy.visit("/")
        cy.contains('Use Cases').click()
        cy.location('pathname').should('eq', '/use-cases')
        cy.go('back')
     
        cy.contains('Pricing').click()
        cy.location('pathname').should('eq', '/pricing')
        cy.go('back')
     
        cy.contains('About Us').click()
        cy.location('pathname').should('eq', '/about-us')
        cy.go('back')
    });
})