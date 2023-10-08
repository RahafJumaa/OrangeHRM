class actions{
    public n;
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

    addphoto(){
        const filepath = 'employee.jpg';
        cy.get('.oxd-file-div > .oxd-icon-button > .oxd-icon').click().attachFile(filepath);
        cy.wait(5000);
    }

    typeIntoFirstNameField(firstname :string){
        this.n = cy.get("[name=firstName]").clear().type(firstname);
        return this;
    }

    typeIntoMiddleNameField(middlename :string){
        this.n = cy.get("[name=middleName]").clear().type(middlename);
        return this;
    }

    typeIntoLastNameField(lastname :string){
        this.n = cy.get("[name=lastName]").clear().type(lastname);
        return this;
    }

    typeIntoIDField(id :string){
        cy.get('.oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type(id);
    }

    enableCreateLoginDetails(){
        cy.wait(7000);
        cy.get("[type=checkbox]").check({ force: true });
    }

    typeIntoUserNameField(username :string){
        cy.get(':nth-child(4) > .oxd-grid-2 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type(username);
    }

    typeIntoPasswordField(password :string){
        cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type(password);
    }

    typeIntoConfirmPasswordField(confirmPassword :string){
        cy.get('.oxd-grid-2 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').clear().type(confirmPassword);
    }

    chooseStatus(){
        cy.get(':nth-child(2) > :nth-child(2) > .oxd-radio-wrapper').check();
    }
}
export default actions