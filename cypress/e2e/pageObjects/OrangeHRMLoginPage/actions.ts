class actions{
openLoginPage (){
    cy.visit("/auth/login");
}

 typeInUsernameField (username : string){
    cy.get("[name=username]").clear().type(username);
    return this;
}

 typeInPasswordField (password : string){
    cy.get("[name=password]").clear().type(password);
    return this;
}

 clickOnLoginButton (){
    cy.get("[type=submit]").click();
}

 clickOnForgotPasswordLink (){
    cy.get("p").contains("Forgot your password? ").click();
}
}
export default actions


