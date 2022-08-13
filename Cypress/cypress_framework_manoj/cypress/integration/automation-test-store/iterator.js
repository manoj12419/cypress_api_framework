/// <reference types="Cypress" />
describe("Iterate over elements", () => {

    beforeEach(function(){
        cy.visit('https://www.automationteststore.com/')
        cy.get("a[href*='product/category&path']").contains("Hair Care").click()

    })
    it("Iterate", () => {
       
        cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {
            cy.log("Index "+index+" :"+$el.text())
        });

    });


    it("Iterate2", () => {
        //cy.visit('https://www.automationteststore.com/')
        //cy.get("a[href*='product/category&path']").contains("Hair Care").click()
        cy.selectProduct('Seaweed Conditioner'); 
          //custom command and call here
      /*  cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {
            if($el.text().includes('Seaweed Conditioner')){
              cy.wrap($el).click()
              cy.log("clicked")
            }
        });*/
    })

    
    it("Iterate3", () => {
        //cy.visit('https://www.automationteststore.com/')
        //cy.get("a[href*='product/category&path']").contains("Hair Care").click()
        cy.selectProduct(' CURLS TO STRAIGHT SHAMPOO');       

    })

})