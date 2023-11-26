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
    cy.intercept("GET", "/api/v2/dashboard/employees/action-summary").as("action-summary");
    cy.intercept("GET", "/api/v2/dashboard/shortcuts").as("shortcuts");
    cy.intercept("GET", "/api/v2/dashboard/employees/subunit").as("subunit");
    cy.intercept("GET", "/api/v2/dashboard/employees/locations").as("locations");
    /*cy.wait("@action-summary");
    cy.wait("@shortcuts");
    cy.wait("@subunit");
    cy.wait("@locations");*/
    return this;
}

logoutfromOrangeHRM(){
    cy.intercept("https://opensource-demo.orangehrmlive.com/web/index.php/core/i18n/messages**").as("messages");
    cy.get(".oxd-userdropdown-tab").click();
    cy.contains("[role=menuitem]", "Logout").click();
    cy.wait("@messages");
    return this;
}
waitSkeletonDisappeared() {
    return cy.get(".oxd-loading-spinner-container", { timeout: 10000 }).should("not.exist");
}

}
export default LoginPageActions


