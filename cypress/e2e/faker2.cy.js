///  <reference types="Cypress" />

import { registerPage } from "./page_objects/registerPage";
import { faker } from "@faker-js/faker";
let firstName = faker.person.firstName()
let randomEmail=faker.internet.email()




describe("Succsesfull register functionality - Gallery App" , () => {
    // cy.visit("https://gallery-app.vivifyideas.com/login");
    it.only("Unsuccessful registration -invalid email adress", () => {
        cy.visit("/register");
        cy.url().should('contain', '/register');
        cy.get("#first-name").type(firstName)
        cy.get("#last-name").type("Cic")
        cy.get("#email").type(randomEmail)
        

        cy.get("#password").type("12345678")
        cy.get("#password-confirmation").type("12345678")
        cy.get(".btn-custom").contains("Submit").click();

        

    })
    
})