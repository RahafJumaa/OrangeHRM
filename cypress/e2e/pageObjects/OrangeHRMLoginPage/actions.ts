class actions{
    public n ;
openLoginPage (){
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
}

 typeInUsernameField (username : string){
    this.n = cy.get("[name=username]").clear().type(username);
    return this;
}

 typeInPasswordField (password : string){
    this.n = cy.get("[name=password]").clear().type(password);
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


