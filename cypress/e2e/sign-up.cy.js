describe('sign up feature', () => {
  it('should allow users to sign up or cancel the sign-up process', () => {
    cy.visit('https://thinking-tester-contact-list.herokuapp.com/addUser')

    // Fill out the sign-up form
    cy.get('#firstName').type('Nana');
    cy.get('#lastName').type('Addai');
    cy.get('#email').type('doricyj@gmail.com');
    cy.get('#password').type('nana11_24ABC');

    // Submit the form
    cy.get('button[type="submit"]').click();

    // Assert that the success message is displayed
    cy.contains('Sign Up successful').should('exist');

    //cancelling the sign-up process
    // Click the cancel button
    cy.contains('cancel').click();

    // Assert that the URL changes to contactList page
    cy.url().should('eq', 'https://thinking-tester-contact-list.herokuapp.com/contactList');

  })
})