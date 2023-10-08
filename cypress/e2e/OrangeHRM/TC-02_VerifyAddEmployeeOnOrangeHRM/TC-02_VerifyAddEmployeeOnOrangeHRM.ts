import {Given, Then, When , And} from "@badeball/cypress-cucumber-preprocessor";
import actions from "../../pageObjects/OrangeHRMAddEmployee/actions";
import assertions from "../../pageObjects/OrangeHRMAddEmployee/assertions";

let addEmployeeActions : actions = new actions();
let addEmployeeAssertions : assertions = new assertions();

Then("The Add Employee title should appear", () => {
    addEmployeeAssertions.viewAddEmployeeTitle();
  });
  
  And("A button to add a photo should appear", () => {
    addEmployeeAssertions.viewAddPictureButton();
  }); 
  And("The Employee Full Name fields should appear", () => {
    addEmployeeAssertions.viewFullNameFields();
  });
  
  And("The Employee Id field should appear with default number", () => {
    addEmployeeAssertions.viewIDField();
  });

  And("The Create Login Details option should be disable", () => {
    addEmployeeAssertions.viewCreateLoginDetails();;
  });
  
  And("The Save button should appear", () => {
    addEmployeeAssertions.viewSaveButton();
  });

  And("The Cancel button should appear", () => {
    addEmployeeAssertions.viewCancelButton();
  });

//-----------

  When("The user clicks on the Save button", () => {
    cy.wait(5000);
    addEmployeeActions.clickOnSaveButton();
  });

  Then("A message stating that the fields are required should appear", () => {
    addEmployeeAssertions.requiredMessage();
  });

  //-----------

  When("The user clicks on the Cancel button", () => {
    cy.wait(5000);
    addEmployeeActions.clickOnCancelButton();
  });

  Then("The user should navigate to Employee List page", () => {
    addEmployeeAssertions.navigateToEmployeeListPage();
  });

  //--------

  When("the user enable the Create Login Details option", () => {
    addEmployeeActions.enableCreateLoginDetails();

  });

  Then("The Username field should appear", () => {
    addEmployeeAssertions.viewUsernameField();

  });

  And("The Password field should appear", () => {
    addEmployeeAssertions.viewPasswordField();

  });

  And("The Confirm Password field should appear", () => {
    addEmployeeAssertions.viewConfirmPasswordField();

  });

  And("The Status option should appear", () => {
    addEmployeeAssertions.viewStatus();

  });

  //--------

  When("the user enter a valid full name into Employee Full Name fields", () => {
    cy.wait(5000);
    addEmployeeActions.typeIntoFirstNameField("Rahaf");
    addEmployeeActions.typeIntoMiddleNameField("Suliman");
    addEmployeeActions.typeIntoLastNameField("Jumaa");
  });

  And("the user enter a valid id into Employee Id field", () => {
    addEmployeeActions.typeIntoIDField("0285");
  });

  And("the user upload an image for the employee", () => {
    addEmployeeActions.addphoto();
  });

  And("the user enter a valid username into Username field", () => {
    addEmployeeActions.typeIntoUserNameField("rahaf");
  });

  And("the user enter a valid password into Password field", () => {
    addEmployeeActions.typeIntoPasswordField("rahaf123");
  });

  And("the user enter a valid confirm password into Confirm Password field", () => {
    addEmployeeActions.typeIntoConfirmPasswordField("rahaf123");
  });

 // And("the user choose the status for the employee", () => {
   // addEmployeeActions.chooseStatus();
  //});

  And("the user clicks on the Save button", () => {
    addEmployeeActions.clickOnSaveButton();
  });

  Then("the user should navigate to Personal Details page", () => {
    addEmployeeAssertions.navigateToPersonalDetails();
  });

  //---------

  And ("the user enter an existence username into Username field", () => {
    addEmployeeActions.typeIntoUserNameField("rahaf");
  });

  Then("A message stating that Username already exists should appear", () => {
    addEmployeeAssertions.viewUsernameExists();
  });

  //--------

  And ("the user enter a different confirm password into Confirm Password field", () => {
    addEmployeeActions.typeIntoConfirmPasswordField("roro");
  });

  Then("A message stating that Passwords do not match should appear", () => {
    addEmployeeAssertions.viewPasswordNotMatch();
  });

//--------

And ("the user enter a username with less than 5 characters into Username field", () => {
  addEmployeeActions.typeIntoUserNameField("roro");
});

Then("A message stating that Should be at least 5 characters should appear", () => {
  addEmployeeAssertions.viewUsernameCharacters();
});

//-------

And ("the user enter a password with less than 7 characters into Password field", () => {
  addEmployeeActions.typeIntoPasswordField("roro");
});

Then("A message stating that Should be at least 7 characters should appear", () => {
  addEmployeeAssertions.viewPasswordCharacters();
});




  


  


  