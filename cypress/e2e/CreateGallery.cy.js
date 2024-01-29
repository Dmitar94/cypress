/// <reference types="Cypress" />

const locators = require('../fixtures/locators.json')

describe(" Create Gallery- Gallery App", () => {
})


//before( ()=> {
   cy.visit("login"); 
   //cy.get(locators.Login.emailInputField).type("peraperic12345@gmail.com");
  // cy.get(locators.Login.passwordInputField).type("pera12345");
  // cy.get(locators.Login.submitButton).click();
//})

    
it("Successfull login" , ()=>{

    
    cy.get(locators.Login.createGalleryButton) .click()
    cy.get('input[id="title"]').type("naslov")
    cy.get('#description').type("opis")
    cy.get('[type="url"]').type('https://imgd.aeplcdn.com/664x374/n/cw/ec/99235/right-front-three-quarter.jpeg?q=80')
    cy.get('#type="button"').click()

    
    

    //cy.get('a[role="button "]').click();
    
});