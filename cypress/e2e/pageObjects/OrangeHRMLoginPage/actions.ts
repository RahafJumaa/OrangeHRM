class LoginPageActions{
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

loginToOrangeHRM(username: string, password: string){
    cy.login(username,password);
    return this;
}

logoutfromOrangeHRM(){
    cy.get('.oxd-userdropdown-img').click();
    cy.get('.oxd-userdropdown-link').eq(3).click();
    return this;
}

}
export default LoginPageActions


