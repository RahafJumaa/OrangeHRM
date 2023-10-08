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
     cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
     loginActions.typeInUsernameField(username);
     loginActions.typeInPasswordField(password);
     loginActions.clickOnLoginButton();
   });