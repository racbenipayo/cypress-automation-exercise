class LoginPage {
    getEmail(){
        return cy.get('input[name="email"]');
    }
    getPassword(){
        return cy.get('input[name="password"]');
    }
    getLoginButton() {
        return cy.get('button').contains('Login');
    }
    getSignUpNowLink(){
        return cy.contains('Sign');
    }
}
    
    export default LoginPage