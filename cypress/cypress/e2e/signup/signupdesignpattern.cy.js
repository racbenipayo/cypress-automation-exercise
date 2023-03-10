import LoginPage from '../../pages/LoginPage.js' ;
import SignUpPage from '../../pages/SignUpPage.js' ;
//import login page and signup page from pages
describe('signup', function () {
    before(function(){
       cy.fixture('logInData').then(function(logInData){
          this.logInData = logInData ;
       })
       cy.fixture('signUpData').then(function(signUpData){
        this.signUpData = signUpData ;
       })
    })
    it('should sign up with new user', function (){
// import test data from fixtures
        const loginPage = new LoginPage();
        const signUpPage = new SignUpPage();

        cy.visit("https://dev.app.yicom.xyz/login");
        loginPage.getSignUpNowLink().click();
        signUpPage.getGivenName().type(this.signUpData.givenName);
        signUpPage.getGivenSurname().type(this.signUpData.givenSurname);
        signUpPage.getCompanyName().type(this.signUpData.companyName);
        signUpPage.getSignUpEmail().type(this.signUpData.email);
        signUpPage.getNumber().type(this.signUpData.number);
        signUpPage.getTOSCheckBox().click();
        signUpPage.getSignUpButton().click();
     });
  })