describe('sign up feature', () => {
  it('should allow users to sign up or cancel the sign-up process', () => {
    cy.visit('https://thinking-tester-contact-list.herokuapp.com/addUser')

    // Fill out the sign-up form
    cy.get('#first-name').type('John');
    cy.get('#last-name').type('Doe');
    cy.get('#email').type('john.doe@example.com');
    cy.get('#password').type('password123');




  })
})