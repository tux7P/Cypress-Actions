
describe("API Tests", () => {
    
    const baseUrl = "https://jsonplaceholder.typicode.com";
  
    it("Verify comments endpoint returns 200 response and 500 body length", () => {
        cy.request(`${baseUrl}/comments`).should((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property("length").and.be.oneOf([500]);
        });
    });
  
    it("Verify new posts can be created", () => {
        cy.request("POST", `${baseUrl}/posts`, {
            userId: 15,
            title: "Test",
            body: "Test Body",
        }).then((response) => {
            console.log(response);
            expect(response).property("status").to.equal(201);
            expect(response.body).to.contain({
                title: "Test",
            });
        });
    });
  
    it("Verify posts can be updated", () => {
        cy.request("PUT", `${baseUrl}/posts/1`, {
            id: 1,
            userId: 11,
            title: "foo",
            body: "bar",
      }).then((response) => {
            console.log(response);
            expect(response).property("status").to.equal(200);
            expect(response.statusText).to.equal("OK");
            expect(response.body).to.contain({
                title: "foo",
            });
        });
    });
  });