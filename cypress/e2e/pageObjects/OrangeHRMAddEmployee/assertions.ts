class assertions{
    viewAddEmployeeTitle (){
        cy.get("h6").contains("Add Employee").should('be.visible');
    } 

    viewAddPictureButton (){
       cy.get("button").should('have.class', 'oxd-icon-button oxd-icon-button--solid-main employee-image-action');
    }

    viewFullNameFields (){
        cy.get("label").contains("Employee Full Name").should('be.visible');
        cy.get("[name=firstName]").should('be.visible');
        cy.get("[name=middleName]").should('be.visible');
        cy.get("[name=lastName]").should('be.visible');
    }

    viewIDField (){
        cy.get("label").contains("Employee Id").should('be.visible');
        cy.get("input").should('have.class', 'oxd-input oxd-input--active');
    }

    viewCreateLoginDetails (){
        cy.get("[type=checkbox]").should('not.be.checked');
    }

    viewSaveButton (){
        cy.get("button").contains(" Save ").should('be.visible').and('have.css','background-color','rgb(118, 188, 33)');
    }

    viewCancelButton (){
        cy.get("button").contains(" Cancel ").should('be.visible').and('have.css','color','rgb(118, 188, 33)');
    }

    requiredMessage (){
        cy.url().should("include","/pim/addEmployee");
        cy.get("span").contains("Required").should('be.visible').and('have.css','color','rgb(235, 9, 16)');
    }

    navigateToEmployeeListPage(){
        cy.url().should("include","pim/viewEmployeeList");
    }

    navigateToPersonalDetails(){
        cy.url().should("include","pim/viewPersonalDetails/empNumber");
        cy.get("h6").contains("Personal Details").should('be.visible');
    }

    viewUsernameField(){
        cy.get(':nth-child(4) > .oxd-grid-2 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').should('be.visible');
    }

    viewPasswordField(){
       cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').should('be.visible');
    }

    viewConfirmPasswordField(){
        cy.get('.oxd-grid-2 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').should('be.visible');
    }

    viewStatus(){
        cy.get('.oxd-grid-2 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').should('be.visible');
    }

    viewUsernameExists(){
        cy.url().should("include","pim/addEmployee");
        cy.get("span").contains("Username already exists").should('be.visible');
    }

    viewPasswordNotMatch(){
        cy.url().should("include","pim/addEmployee");
        cy.get("span").contains("Passwords do not match").should('be.visible');
    }

    viewUsernameCharacters(){
        cy.url().should("include","pim/addEmployee");
        cy.get("span").contains("Should be at least 5 characters").should('be.visible');
    }

    viewPasswordCharacters(){
        cy.url().should("include","pim/addEmployee");
        cy.wait(7000);
        cy.get(".oxd-input-group > .oxd-text").contains("Should have at least 7 characters").should('be.visible');
    }
}
export default assertions