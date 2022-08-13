/// <reference types="Cypress" />
describe("Inspect Automation Test Store Items using chain of commands",()=>{

    it("Inspect Automation Test Store Items using chain of commands",()=>
    {
        cy.visit('https://www.automationteststore.com/')
      
        const makeupLink=cy.get("a[href*='product/category&path=']").contains("Makeup")
        makeupLink.click()
        const skincareLink=cy.get("a[href*='product/category&path=']").contains("Skincare").click()
        
       const header=cy.get("h1 .maintext");
       cy.log(header.texr())

    })

    
    it("test2",()=>
    {
        cy.visit('https://www.automationteststore.com/')
      
     
       //const header=cy.get("h1 .maintext");
       //cy.log(header)
      cy.get("a[href*='product/category&path']").contains("Makeup").click()  
       
      
      const header=cy.get("h1 .maintext").then(($headerText)=>{  //turning promise
            const headerText=$headerText.text()
            cy.log("found header text -->"+headerText)
            expect(headerText).is.eq('Makeup')
      })
      

    })

    //nested closure
    it.only("test3",()=>
    {
        cy.visit('https://automationteststore.com/index.php?rt=content/contact')
      
        //use cypress   commands and chaining
      cy.contains('#ContactUsFrm','Contact Us Form').find('#field_11').should('contain','First name')
      
        //jquery approach
        cy.contains('#ContactUsFrm','Contact Us Form').then(text=>{
            const firstNameText=text.find('#field_11').text()
            expect(firstNameText).to.contain('First name')
            //embeded commands (closure)
            cy.get('#field_11').then(fnText=>{
                cy.log(fnText.text())
                cy.log(fnText)

            })
        })

        
      

    })

})