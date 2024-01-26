/// <reference types="Cypress" />

describe("Login functionality - Gallery App", () => {
})
it("Successfull login" , ()=>{
    cy.visit("login"); 
    cy.url().should('contain',"login")
    cy.get("#email").type("peraperic12345@gmail.com");
    cy.get("#password").type("pera12345");
    cy.get("button").click();
    cy.get("h1").should("have.text", "Please login")
    cy.get("label").eq(0).should("have.text","Email")
    cy.get("label").eq(1).should("have.text","Password")
    cy.get("a").contains('Logout').click();
    

    //cy.get('a[role="button "]').click();
    
});

    it.only("Unsuccessful registration -invalid email adress", () => {
        cy.visit("/register");
    })


 