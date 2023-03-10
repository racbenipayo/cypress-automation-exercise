describe('webpage language', () => {
    it('switches between all 3 languages', () => {
      cy.visit('https://dev.app.yicom.xyz/login');
  
      cy.wait(2000);
      cy.get('div[class="pointer-cursor countries language-zh-HK"]').click();
      cy.wait(2000);
      cy.get('div[class="pointer-cursor countries language-zh-CN"]').click();
      cy.wait(2000);
      cy.get('div[class="pointer-cursor countries language-en-GB"]').click();
    });
  })