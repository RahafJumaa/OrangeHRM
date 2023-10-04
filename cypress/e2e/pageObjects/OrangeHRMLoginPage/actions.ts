class actions{
openLoginPage (){
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
}
 typeInUsernameField (username : string){
    cy.get("[name=username]").clear().type(username);
}

 typeInPasswordField (password : string){
    cy.get("[name=password]").clear().type(password);
}

 clickOnLoginButton (){
    cy.get("[type=submit]").click();
}

 clickOnForgotPasswordLink (){
    cy.get("p").contains("Forgot your password? ").click();
}
}
export default actions


