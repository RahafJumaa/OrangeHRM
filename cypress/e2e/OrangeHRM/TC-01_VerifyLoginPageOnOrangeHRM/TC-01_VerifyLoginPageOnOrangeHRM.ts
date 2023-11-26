import {Given, Then, When , And} from "@badeball/cypress-cucumber-preprocessor";
import LoginPageActions from "../../pageObjects/OrangeHRMLoginPage/actions";
import LoginPageAssertions from "../../pageObjects/OrangeHRMLoginPage/assertions";

const loginActions = new LoginPageActions();
const loginAssertions = new LoginPageAssertions();

Then("The login page should be open correctly", () => {
  loginAssertions.checkOrangeHRMLogo().checkLoginTitle();
});

When("The user login as admin with valid username and password credentials", () => {
  cy.login("Admin","admin123");
});

Then("The user should login successfully", () => {
  loginAssertions.checkDashboardHeaderAppear();
});

When("The user login with empty username and password credentials", () => {
  loginActions.clickOnLoginButton();
});

Then("A message stating that the fields are required should appear", () => {
  loginAssertions.checkRequiresMessageAppear();
});

When("The user login as admin with invalid username and password credentials", () => {
  cy.login("r","r");
});

Then("A message stating that the credentials are invalid should appear", () => {
  loginAssertions.checkInvalidcCedentialsMessageAppear();
});

When("The user clicks on Forgot your password? link", () => {
  loginActions.clickOnForgotPasswordLink();
});

Then("The user should navigate to Reset Password form", () => {
  loginAssertions.checkResetPasswordHeaderAppear();
});