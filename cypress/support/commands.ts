import "@testing-library/cypress/add-commands";
import "cypress-file-upload";
import "cypress-wait-until";
import actions from "../e2e/pageObjects/OrangeHRMLoginPage/actions";

let loginActions : actions = new actions();

declare global {
  namespace Cypress {
    interface Chainable {
      login(username: string, password: string): Chainable<string>;
    }
  }
}
Cypress.Commands.add("login" , (username: string, password: string) => {
     cy.visit("/auth/login");
     loginActions.typeInUsernameField(username).typeInPasswordField(password).clickOnLoginButton();
    
   });