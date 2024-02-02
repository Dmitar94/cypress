/// <reference types="Cypress" />

describe("Create Gllery R", () => {
    beforeEach(()=>{
    cy.request({
            url: "https://gallery-api.vivifyideas.com/api/auth/login",
            method: "POST",
            body: {
                email: "sremac1994@gmail.com",
                password: "Dmitarsremcic1994",
            },
        }).its("body").then((resp) =>{
            let respToken = resp.access_token;
            let tokenType =resp.token_type;
            expect(respToken).to.be.a("string");
            expect(tokenType).eq("bearer");

            window.localStorage.setItem("token",respToken);
    })

    })
    it("Succesfully create gallery with one image", () => {
        cy.visit("")
      cy.get('a[href="/create"]').should("be.visible").click();
      cy.get("h1").should("have.text", "Create Gallery");
  
      cy.get("#title").should("be.visible").type("Nova Galerija 1 - Marko");
      cy.get("#description").should("be.visible").type("Galerija Ducati");
  
      cy.get('input[type="url"]').type(
        "https://media.gazetadopovo.com.br/2009/05/f1ec0bfe587fe950b904c4267fb20ca9-gpLarge.jpg"
      );
      cy.contains("Submit").click();
    });

    it("Succesfully create gallery with one image", () => {
      cy.visit("")
      cy.get('a[href="/create"]').should("be.visible").click();
      cy.get("h1").should("have.text", "Create Gallery");
    
      cy.get("#title").should("be.visible").type("Nova Galerija 1 - Marko");
      cy.get("#description").should("be.visible").type("Galerija Ducati");
    
      cy.get('input[type="url"]').type(
        "https://media.gazetadopovo.com.br/2009/05/f1ec0bfe587fe950b904c4267fb20ca9-gpLarge.jpg"
      );
      cy.contains("Submit").click();
    });
});

  