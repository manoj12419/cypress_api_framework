/// <reference types="Cypress" />
describe("Inspect Automation Test Store Items using chain of commands",()=>{

    it("Inspect Automation Test Store Items using chain of commands",()=>
    {
        cy.visit('https://www.automationteststore.com/')
        //cy.get('.prdocutname').contains('Skinsheen Bronzer Stick').click()        
        cy.get('.prdocutname').contains('Skinsheen Bronzer Stick').click().then(function(itemHeaderText){
            console.log("selected the following ite,: "+itemHeaderText)
            cy.log("selected the following ite,: "+itemHeaderText)
        })       
    })

    
    it.only("Inspect Automation Test Store Items using chain of commands",()=>
    {
        cy.visit('https://www.automationteststore.com/')
        cy.get("a[href$='contact']").click().then(function(linktext){

            cy.log("clicked on link using text "+linktext.text())
        })     
    })


    it("Inspect Automation Test Store Items using chain of commands",()=>
    {
            cy.visit('https://www.automationteststore.com/')
            cy.get('.fixed_wrapper').find('.prdocutname').eq(0).click()
            console.log("Test completed") // wont display in cypress report but it will show in console window
            cy.log("cypress message log here")
    })

    })