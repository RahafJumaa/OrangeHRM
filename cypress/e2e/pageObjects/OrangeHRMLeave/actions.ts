class actions {
    loginToOrangeHRM(username: string, password: string){
        cy.login(username,password);
        cy.intercept("GET", "/api/v2/dashboard/employees/action-summary").as("action-summary");
        cy.intercept("GET", "/api/v2/dashboard/shortcuts").as("shortcuts");
        cy.wait("@action-summary");
        cy.wait("@shortcuts");
        return this;
    }
    
    navigateToMyLeavePage(){
        cy.visit('/leave/viewMyLeaveList');
    }

    logoutfromOrangeHRM(){
        cy.get('.oxd-userdropdown-img').click();
        cy.get('.oxd-userdropdown-link').eq(3).click();
        return this;
    }

}
export default actions;