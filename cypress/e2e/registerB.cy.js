///  <reference types="Cypress" />


describe("Register via API", () => {
    it("Successful register via API", () => {
        cy.request({
            url: "https://gallery-api.vivifyideas.com/api/auth/register",
            method: "POST",
            body: {
                email: "dmitard1@gmail.com",
                first_name: "mica",
                last_name: "cami",
                password: "12345678",
                password_confirmation: "12345678",
                terms_and_conditions: true,
            },
        }).its("body").then((resp) =>{
            let respToken = resp.access_token;
            let tokenType =resp.token_type;
            expect(respToken).to.be.a("string");
            expect(tokenType).eq("bearer");
        });
    });
});