class Contact_US_PO {
   
    contactform_Submission(firstName, lastName, email, comment,$selector,texttolocate){
        cy.get('[name="first_name"]').type(firstName)
        cy.get('[name="last_name"]').type(lastName)
        cy.get('[name="email"]').type(email)
        cy.get('textarea.feedback-input').type(comment)
        cy.get('[type="submit"]').click()
        cy.get($selector).contains( texttolocate,{timeout:60000}) //explicit timeout
        cy.screenshot("Made a contact us form submission");
    }
}

export default Contact_US_PO;