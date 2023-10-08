class assertions{
    checkAddEmployeeTitle (){
        cy.get("h6").contains("Add Employee").should('be.visible');
    } 
    
    checkAddPictureButton (){
       cy.get("button").should('have.class', 'oxd-icon-button oxd-icon-button--solid-main employee-image-action');
    }

    checkFullNameFields (){
        cy.get("label").contains("Employee Full Name").should('be.visible');
        cy.get("[name=firstName]").should('be.visible');
        cy.get("[name=middleName]").should('be.visible');
        cy.get("[name=lastName]").should('be.visible');
    }

    checkIDField (){
        cy.get("label").contains("Employee Id").should('be.visible');
        cy.get("input").should('have.class', 'oxd-input oxd-input--active');
    }

    checkCreateLoginDetails (){
        cy.get("[type=checkbox]").should('not.be.checked');
    }

    checkSaveButton (){
        cy.get("button").contains(" Save ").should('be.visible').and('have.css','background-color','rgb(118, 188, 33)');
    }

    checkCancelButton (){
        cy.get("button").contains(" Cancel ").should('be.visible').and('have.css','color','rgb(118, 188, 33)');
    }

    checkRequiredMessageAppear (){
        cy.get("span").contains("Required").should('be.visible').and('have.css','color','rgb(235, 9, 16)');
    }

    checkEmployeeListHeaderAppear(){
        cy.get("a").contains("Employee List").should('be.visible');
    }

    checkPersonalDetailsHeaderAppear(){
        cy.get("h6").contains("Personal Details").should('be.visible');
    }

    checkUsernameField(){
        cy.get(':nth-child(4) > .oxd-grid-2 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').should('be.visible');
    }

    checkPasswordField(){
       cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').should('be.visible');
    }

    checkConfirmPasswordField(){
        cy.get('.oxd-grid-2 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').should('be.visible');
    }

    checkStatus(){
        cy.get('.oxd-grid-2 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').should('be.visible');
    }

    checkUsernameExistsMessageAppear(){
        cy.get("span").contains("Username already exists").should('be.visible');
    }

    checkPasswordNotMatchMessageAppear(){
        cy.get("span").contains("Passwords do not match").should('be.visible');
    }

    checkShouldBeAtLeast5CharactersMessageAppear(){
        cy.get("span").contains("Should be at least 5 characters").should('be.visible');
    }

    checkShouldBeAtLeast7CharactersMessageAppear(){
        cy.wait(7000);
        cy.get(".oxd-input-group > .oxd-text").contains("Should have at least 7 characters").should('be.visible');
    }

}
export default assertions