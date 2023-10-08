class assertions{
 checkOrangeHRMLogo (){
    cy.get("[alt=company-branding]").should('be.visible');
}

checkLoginTitle (){
    cy.get("h5").contains("Login").should('be.visible');
}

checkUsernameField (){
    cy.get("[name=username]").should('be.visible');
}

checkPasswordField (){
    cy.get("[name=password]").should('be.visible');
}

checkLoginButton (){
    cy.get("[type=submit]").should('be.visible');
}

 checkDashboardHeaderAppear (){
    cy.get("h6").contains("Dashboard").should('be.visible');
}

checkRequiresMessageAppear (){
    cy.get("span").contains("Required").should('be.visible').and('have.css','color','rgb(235, 9, 16)');
}

 checkInvalidcCedentialsMessageAppear (){
    cy.get("p").contains("Invalid credentials").should('be.visible');
}

 checkResetPasswordHeaderAppear (){
    cy.get("h6").contains("Reset Password").should('be.visible');
}

}
export default assertions

