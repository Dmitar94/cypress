///  <reference types="Cypress" />

describe("Succsesfull register functionality - Gallery App" , () => {
    // cy.visit("https://gallery-app.vivifyideas.com/login");
    it.only("Unsuccessful registration -invalid email adress", () => {
        cy.visit("/register");
        cy.url().should('contain', '/register');
        
        
        cy.get("#first-name").type("Dmimi")
        cy.get("#last-name").type("Cic")
        cy.get("#email").type("tarmiricmi@gmil.com")
        cy.get("#password").type("12345678")
        cy.get("#password-confirmation").type("12345678")
        cy.get("#type=checkbox").check()
    })
    
})
