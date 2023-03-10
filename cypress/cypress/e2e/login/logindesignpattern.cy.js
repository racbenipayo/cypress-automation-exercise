import LoginPage from '../../pages/LoginPage.js' ;
// importing login page from pages
describe('login', function () {
   // importing test data from fixture
    before(function(){
       cy.fixture('logInData').then(function(logInData){
          this.logInData = logInData ;
       })
    })
    it('should log in using valid credentials', function (){

        const loginPage = new LoginPage();

        cy.visit("https://dev.app.yicom.xyz/login");
        loginPage.getEmail().type(this.logInData.email);
        loginPage.getPassword().type(this.logInData.password);
        loginPage.getLoginButton().click();
     });
  })