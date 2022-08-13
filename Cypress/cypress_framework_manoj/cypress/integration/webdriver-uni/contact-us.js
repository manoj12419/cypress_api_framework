import Contact_US_PO from '../../support/pageObjects/webdriver-uni/Contact_US_PO'
import HomePage_PO from '../../support/pageObjects/webdriver-uni/HomePage_PO'
///<reference types="Cypress" />


describe("Test contact us page via webdriver", () => {
  Cypress.config('defaultCommandTimeout',20000)  //explicit timeout
  const contact_US_PO = new Contact_US_PO();
  const homePage_PO = new HomePage_PO();

  /* before(function(){  // executed only once for all of test case
   cy.visit('http://www.webdriveruniversity.com/')
   cy.get('#contact-us').click({force:true})
   })*/

  before(function () {
    cy.fixture('example').then(function (data) {
      //  this.data=data; if this work use below code
      globalThis.data = data;
    })
  })
  beforeEach(function () {  //executed for each test case 
    //cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
    // cy.get('#contact-us').click({force:true})
    //cy.visit("/")  //url set in cypress.json file
    //cy.navigate_webdriveruni_homepage(); //custome methode
    //cy.get('#contact-us').invoke('removeAttr','target').click({force:true})
    
    homePage_PO.visitHomePage();
    homePage_PO.clickOn_ContactUs_Button();

  })


  /*            
  it("Should be able to submit a successfull submission via contactus",()=>{
  
      cy.visit('http://www.webdriveruniversity.com/')
      cy.get('#contact-us').click({force:true})
  })
  */
  it("MultipleWindow Handling mechanism", () => {

    // cy.visit('http://www.webdriveruniversity.com/')
    //cy.get('#contact-us').invoke('removeAttr','target').click({force:true})
    cy.get('[name="first_name"]').type("Manoj")
    cy.get('[name="email"]').type("manoj@gmail.com")


  })
  it("Should be able to submit successfull", () => {
    //cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
    //cy.webdriverUni_contactForm_Submission(Cypress.env("first_name"),data.last_name,data.email,data.feedback,'h1','Thank You for your Message!');   

    contact_US_PO.contactform_Submission(Cypress.env("first_name"), data.last_name, data.email, data.feedback, 'h1', 'Thank You for your Message!');
    //webdriverUni_contactForm_Submission
    //cy.get('[name="first_name"]').type("Manoj")
    //cy.get('[name="last_name"]').type("Kumar")
    //cy.get('[name="email"]').type("manoj@gmail.com")
    //cy.get('textarea.feedback-input').type("Entering the test")
    //cy.get('[type="submit"]').click()
    //cy.get('h1').contains('have.text','Thank You for your Message!')

  })

  it("Should not be able to submit successfull", () => {
    //  cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
    cy.document().should('have.property','charset').and('eq','UTF-8')
    cy.url().should('include','contactus')
    //cy.title().should('include','WebDriver | Contact-Us')
    
    contact_US_PO.contactform_Submission(data.first_name, data.last_name, " ", data.feedback, 'body', 'Error: Invalid email address');
    // cy.get('[name="first_name"]').type(data.first_name)
    //cy.get('[name="last_name"]').type(data.last_name)
    //cy.get('[name="email"]').type("manoj")
    //cy.get('textarea.feedback-input').type("Entering the test")
    //cy.get('[type="submit"]').click()
    //cy.get('body').contains('Error: Invalid email address')

  })



})