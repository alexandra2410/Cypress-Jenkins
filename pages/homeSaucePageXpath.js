/// <reference types="cypress" />

class homeSaucePage{
    elements = {
        usernameInput: () => cy.xpath(`//input[@data-test='username']`),
        passwordInput: () => cy.xpath(`//input[@data-test='password']`), 
        loginButton: () => cy.xpath(`//*[@type='submit']`), 
        errorMessage: () => cy.xpath('//h3')
    }
    typeUsername(username){
        this.elements.usernameInput().type(username)
    }
    typePassword(passaword){
        this.elements.passwordInput().type(passaword)
    }
    clickLogin(){
        this.elements.loginButton().click()
    }
}
module.exports = new homeSaucePage(); 