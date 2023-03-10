class SignupPage {
    getGivenName() {
        return cy.get('input[name="englishGivenName"]');
    }
    getGivenSurname(){
        return cy.get('input[name="englishSurname"]');
    }
    getCompanyName(){
        return cy.get('input[name="companyName"]');
    }
    getSignUpEmail(){
        return cy.get('input[name="email"]');
    }
    getNumber(){
        return cy.get('input[class=" form-control invalid-number"]');
    }
    getTOSCheckBox() {
        return cy.get('input[type="checkbox"]');
    }
    getSignUpButton() {
        return cy.contains('Get early access');
    }
    }
    export default SignupPage
