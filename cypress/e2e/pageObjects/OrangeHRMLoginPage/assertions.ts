class assertions{
 checkOrangeHRMLogo (){
    cy.get("[alt=company-branding]").should('be.visible');
    return this;
}

 checkLoginTitle (){
    cy.get("h5").contains("Login").should('be.visible');
    return this;
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

