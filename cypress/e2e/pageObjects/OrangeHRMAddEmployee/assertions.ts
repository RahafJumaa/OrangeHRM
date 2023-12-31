class assertions{
    checkAddEmployeeTitle (){
        cy.get("h6").contains("Add Employee").should('be.visible');
    } 
    
    checkRequiredMessageAppear (){
        cy.get("span").contains("Required").should('be.visible');
    }

    checkEmployeeListHeaderAppear(){
        cy.get("a").contains("Employee List").should('be.visible');
    }

    checkPersonalDetailsHeaderAppear(){
        cy.get("h6").contains("Personal Details").should('be.visible');
    }

    checkUsernameField(){
        cy.get('input').eq(7).should('be.visible');
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
        cy.get("span").contains("Should have at least 7 characters").should('be.visible');
    }

    checkTheEmployeeRecordNotAppear(id:string){
        cy.wait(7000);
        cy.get('.oxd-table-cell').contains(id).should('not.exist');
    }
}
export default assertions