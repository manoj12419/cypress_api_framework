/// <reference types="Cypress" />
describe("Test contact us page via webdriver",()=>{

    it("Should be able to submit a successfull submission via contactus",()=>{
    
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#contact-us').click({force:true})
    })

});