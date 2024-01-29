class RegisterPage{
get firstNameInputField () {
    return cy.get("#first-name")
}
get lastNameInputField () {
    return  cy.get("#last-name")
}
get emailInputField () {
    return cy.get("#email");
}
get passwordInputField () {
    return cy.get( "#password");
}
get passwordConfirmedField () {
    return cy.get("#password")
}
get checkBoxButton () {
    return cy.get ("check()")
}
get submitBtn () {
    return cy.get("button")
}

}
export const registerPage = new RegisterPage ()