describe('sign up page', () => {
    it('signs up new user for early access', () => {
      cy.visit('https://dev.app.yicom.xyz/login');
  
      cy.contains('Sign').click();
      cy.get('input[name="englishGivenName"]').type('Jane');
      cy.get('input[name="englishSurname"]').type('Doe');
      cy.get('input[name="companyName"]').type('Yicom');
      cy.get('input[name="email"]').type('janedoe9@yicom.com');
      cy.get('input[class=" form-control invalid-number"]').type('98679720');
      cy.get('input[type="checkbox"]').click();
      cy.contains('Get early access').click();
    })
  })
