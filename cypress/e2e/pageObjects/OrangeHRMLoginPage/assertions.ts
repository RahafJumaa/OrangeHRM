class assertions{
    
 

 viewOrangeHRMLogo (){
    cy.get("[alt=company-branding]").should('be.visible');
}

 viewLoginTitle (){
    cy.get("h5").contains("Login").should('be.visible');
}

 viewUsernameField (){
    cy.get("[name=username]").should('be.visible');
}

 viewPasswordField (){
    cy.get("[name=password]").should('be.visible');
}

 viewLoginButton (){
    cy.get("[type=submit]").should('be.visible');
}

 navigateDashboard (){
    cy.url().should("include","/dashboard/index");
    cy.get("h6").contains("Dashboard").should('be.visible');
}

 requiredMessage (){
    cy.url().should("include","/auth/login");
    cy.get("span").contains("Required").should('be.visible').and('have.css','color','rgb(235, 9, 16)');
}

 invalidcCedentialsMessage (){
    cy.url().should("include","/auth/login");
    cy.get("p").contains("Invalid credentials").should('be.visible');
}

 navigateResetPasswordForm (){
    cy.url().should("include","/auth/requestPasswordResetCode");
    cy.get("h6").contains("Reset Password").should('be.visible');
}

}
export default assertions

