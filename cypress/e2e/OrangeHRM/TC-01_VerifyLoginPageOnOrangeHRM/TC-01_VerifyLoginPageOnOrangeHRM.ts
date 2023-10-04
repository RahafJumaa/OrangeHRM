import {Given, Then, When , And} from "@badeball/cypress-cucumber-preprocessor";
import actions from "../../pageObjects/OrangeHRMLoginPage/actions";
import assertions from "../../pageObjects/OrangeHRMLoginPage/assertions";

let loginActions : actions = new actions();
let loginAssertions : assertions = new assertions();

Then("The OrangeHRM logo should appear", () => {
  loginAssertions.viewOrangeHRMLogo();
});

And("The Login title should appear", () => {
  loginAssertions.viewLoginTitle();
}); 
And("The username field should appear", () => {
  loginAssertions.viewUsernameField();
});

And("The password field should appear", () => {
  loginAssertions.viewPasswordField();
});

And("The Login button should appear", () => {
  loginAssertions.viewLoginButton();
});

//---------

When("The user login as admin with valid username and password credentials", () => {
  loginActions.typeInUsernameField("Admin");
  loginActions.typeInPasswordField("admin123");
  loginActions.clickOnLoginButton();
});


Then("The user should navigate to the Dashboard", () => {
  loginAssertions.navigateDashboard();
});
 
//--------

When("The user login with empty username and password credentials", () => {
  loginActions.clickOnLoginButton();
});

Then("A message stating that the fields are required should appear", () => {
  loginAssertions.requiredMessage();
});

//--------

When("The user login as admin with invalid username and password credentials", () => {
  loginActions.typeInUsernameField("r");
  loginActions.typeInPasswordField("r");
  loginActions.clickOnLoginButton();
});

Then("A message stating that the credentials are invalid should appear", () => {
  loginAssertions.invalidcCedentialsMessage();
});

//---------

When("The user clicks on Forgot your password? link", () => {
  loginActions.clickOnForgotPasswordLink();
});

Then("The user should navigate to Reset Password form", () => {
  loginAssertions.navigateResetPasswordForm();
});