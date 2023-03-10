describe('forgot password page', () => {
    it('sends reset password email to your account', () => {
      cy.visit('https://dev.app.yicom.xyz/login');
  
      cy.contains('Forgot Password?').click();
      cy.get('input[name="email"]').type('test@test.com');
      cy.get('button').contains('Send').click();
    });
  })
