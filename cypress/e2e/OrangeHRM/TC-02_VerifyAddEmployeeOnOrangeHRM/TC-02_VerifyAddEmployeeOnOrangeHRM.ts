import {Given, Then, When , And} from "@badeball/cypress-cucumber-preprocessor";
import actions from "../../pageObjects/OrangeHRMAddEmployee/actions";
import assertions from "../../pageObjects/OrangeHRMAddEmployee/assertions";

const addEmployeeActions = new actions();
const addEmployeeAssertions : assertions = new assertions();

  Then("The Add Employee page should be open correctly", () => {
    addEmployeeAssertions.checkAddEmployeeTitle();
    addEmployeeAssertions.checkAddPictureButton();
    addEmployeeAssertions.checkFullNameFields();
    addEmployeeAssertions.checkIDField();
    addEmployeeAssertions.checkCreateLoginDetails();
    addEmployeeAssertions.checkSaveButton();
    addEmployeeAssertions.checkCancelButton();
  });

  When("The user clicks on the Save button", () => {
    cy.wait(5000);
    addEmployeeActions.clickOnSaveButton();
  });

  Then("A message stating that the fields are required should appear", () => {
    addEmployeeAssertions.checkRequiredMessageAppear();
  });

  When("The user clicks on the Cancel button", () => {
    cy.wait(5000);
    addEmployeeActions.clickOnCancelButton();
  });

  Then("The user should navigate to Employee List page", () => {
    addEmployeeAssertions.checkEmployeeListHeaderAppear();
  });

  When("the user enable the Create Login Details option", () => {
    addEmployeeActions.enableCreateLoginDetails();
  });

  Then("The Create Login Details fields should appear", () => {
    addEmployeeAssertions.checkUsernameField();
    addEmployeeAssertions.checkPasswordField();
    addEmployeeAssertions.checkConfirmPasswordField();
    addEmployeeAssertions.checkStatus();
  });

  When("the user enter a valid full name into Employee Full Name fields", () => {
    cy.wait(5000);
    addEmployeeActions.typeIntoFirstNameField("Rahaf").typeIntoMiddleNameField("Suliman").typeIntoLastNameField("Jumaa");
  });

  When("the user enter a valid id into Employee Id field", () => {
    addEmployeeActions.typeIntoIDField("0285");
  });

  When("the user upload an image for the employee", () => {
    addEmployeeActions.addphoto();
  });

  When("the user enter a valid username into Username field", () => {
    addEmployeeActions.typeIntoUserNameField("rahaf");
  });

  When("the user enter a valid password into Password field", () => {
    addEmployeeActions.typeIntoPasswordField("rahaf123");
  });

  When("the user enter a valid confirm password into Confirm Password field", () => {
    addEmployeeActions.typeIntoConfirmPasswordField("rahaf123");
  });

  When("the user clicks on the Save button", () => {
    addEmployeeActions.clickOnSaveButton();
  });

  Then("the emolyee should be added successfully", () => {
    addEmployeeAssertions.checkPersonalDetailsHeaderAppear();
  });

  When ("the user enter an existence username into Username field", () => {
    addEmployeeActions.typeIntoUserNameField("rahaf");
  });

  Then("A message stating that Username already exists should appear", () => {
    addEmployeeAssertions.checkUsernameExistsMessageAppear();
  });

  When ("the user enter a different confirm password into Confirm Password field", () => {
    addEmployeeActions.typeIntoConfirmPasswordField("roro");
  });

  Then("A message stating that Passwords do not match should appear", () => {
    addEmployeeAssertions.checkPasswordNotMatchMessageAppear();
  });

When ("the user enter a username with less than 5 characters into Username field", () => {
  addEmployeeActions.typeIntoUserNameField("roro");
});

Then("A message stating that Should be at least 5 characters should appear", () => {
  addEmployeeAssertions.checkShouldBeAtLeast5CharactersMessageAppear();
});

When ("the user enter a password with less than 7 characters into Password field", () => {
  addEmployeeActions.typeIntoPasswordField("roro");
});

Then("A message stating that Should be at least 7 characters should appear", () => {
  addEmployeeAssertions.checkShouldBeAtLeast7CharactersMessageAppear();
});




  


  


  