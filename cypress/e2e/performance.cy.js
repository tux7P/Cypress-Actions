describe('empty spec', () => {
  
  it('Audits Home Page', () => {
    cy.visit('https://example.cypress.io')
    cy.lighthouse({
      performance: 50,
      accessibility: 50,
      "best-practices": 50,
      seo: 50,
      pwa: 10,
    });
  })
})