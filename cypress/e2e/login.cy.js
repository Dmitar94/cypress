/// <reference types="Cypress" />

const locators = require('../fixtures/locators.json')

describe("Login functionality - Gallery App", () => {
})
it("Successfull login" , ()=>{
    cy.visit("login"); 
    cy.url().should('contain',"login")
    cy.get(locators.Login.emailInputField).type("peraperic12345@gmail.com");
    cy.get(locators.Login.passwordInputField).type("pera12345");
    cy.get(locators.Login.submitButton).click();
    cy.get("h1").should("have.text", "Please login")
    cy.get("label").eq(0).should("have.text","Email")
    cy.get("label").eq(1).should("have.text","Password")
    cy.get("a").contains('Logout').click();
    

    //cy.get('a[role="button "]').click();
    
});

   


 