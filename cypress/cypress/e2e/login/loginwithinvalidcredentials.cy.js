describe('welcome page', () => {
    it('logs in using invalid credentials', () => {
      cy.visit('https://dev.app.yicom.xyz/login');
  
      cy.get('input[name="email"]').type('tester@test.com');
      cy.get('input[name="password"]').type('Test@12345');
      cy.get('button').contains('Login').click();
    });
  })