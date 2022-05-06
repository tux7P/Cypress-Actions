describe("Sanity tests", () => {
  it("Visits Tango website", () => {
    cy.visit("/");
    cy.title().should(
      "eq",
      "Tango | Create beautiful step-by-step guides with screenshots, in seconds"
    );
  });
});
