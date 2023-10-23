class actions{
    navigateToAddEmployeePage(){
        cy.get("span").contains("PIM").click();
        cy.get("button").contains("Add").click();
    }
    
    clickOnSaveButton(){
        cy.get("[type=submit]").contains("Save").click();
    }

    clickOnCancelButton(){
        cy.get("[type=button]").contains("Cancel").click();
    }

    typeIntoFirstNameField(firstname :string){
        cy.get("[name=firstName]").clear().type(firstname);
        return this;
    }

    typeIntoMiddleNameField(middlename :string){
        cy.get("[name=middleName]").clear().type(middlename);
        return this;
    }

    typeIntoLastNameField(lastname :string){
        cy.get("[name=lastName]").clear().type(lastname);
        return this;
    }

    typeIntoIDField(id :string){
        cy.wait(6000);
        cy.get('input').eq(5).clear().type(id);
    }

    enableCreateLoginDetails(){
        cy.get("[type=checkbox]").check({ force: true });
        cy.wait(7000);
    }

    typeIntoUserNameField(username :string){
        cy.get('input').eq(7).clear().type(username);
    }

    typeIntoPasswordField(password :string){
        cy.get('[type=password]').eq(1).clear().type(password);
    }

    typeIntoConfirmPasswordField(confirmPassword :string){
        cy.get('[type=password]').eq(2).clear().type(confirmPassword);
    }

    NavigateToAddEmployeePage(){
        cy.intercept("GET", "https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/action-summary").as("action-summary");
        cy.intercept("GET", "https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/shortcuts").as("shortcuts");
        cy.intercept("GET", "https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/subunit").as("subunit");
        cy.intercept("GET", "https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/locations").as("locations");
        
        cy.wait("@action-summary");
        cy.wait("@shortcuts");
        cy.wait("@subunit");
        cy.wait("@locations");
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/pim/addEmployee");
    }

    NavigateToEmployeeListPage(){ 
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList");
    }

    NavigateToPersonalDetailsPage(empNumber : string){
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/"+empNumber+"");
    }
}
export default actions