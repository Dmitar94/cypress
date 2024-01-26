describe("Login functionality - Gallery App", () => {
    it("Unsuccessful login -invalid email address", () => {
        cy.visit("https://gallery-app.vivifyideas.com/login");

        cy.get("#email").type("sremac1994@gmail.com");
        cy.get("password").type("Dmitarsremcic1994");


    })
    
    

});


 