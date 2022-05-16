describe("Sanity tests", () => {
  
  let TITLE = 'Tango | Create beautiful step-by-step guides with screenshots, in seconds'
   
  it("Visits Tango website", () => {
    cy.visit("/")
    cy.title().should("eq", TITLE)
  });
  
});
