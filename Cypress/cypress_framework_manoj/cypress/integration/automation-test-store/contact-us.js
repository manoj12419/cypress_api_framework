/// <reference types="Cypress" />
describe("Test contact us page via automation store",()=>{
    
    before(function(){
        cy.fixture("userdetails").as("user")
    })
    
    it("Should be able to submit successfull",()=>{
        cy.visit('https://www.automationteststore.com/')
        cy.xpath("//a[text()='Contact Us']").click()

        cy.get("@user").then((user)=>{
            cy.get('#ContactUsFrm_first_name').type(user.first_name)
            cy.get('#ContactUsFrm_email').type(user.email)
        })
   
   
    cy.get('#ContactUsFrm_email').should('have.attr','name','email')
    cy.get('#ContactUsFrm_enquiry').type("enter comment here")
    cy.xpath("//button[@title='Submit']").click()
    cy.get('.mb40 > :nth-child(3)').should('have.text','Your enquiry has been successfully sent to the store owner!')
    
    
    })
    
})

   