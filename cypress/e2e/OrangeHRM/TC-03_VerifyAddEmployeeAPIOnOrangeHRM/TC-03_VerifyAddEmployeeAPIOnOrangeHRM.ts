import { Given,When,Then } from "@badeball/cypress-cucumber-preprocessor";
import api from "../../pageObjects/OrangeHRMAddEmployee/api";

const addEmployeeAPI = new api();

Given("the user navigate to Add employee page", () => {
    addEmployeeAPI.NavigateToAddEmployeePage();
  });

When("the user add a new employee", () => {
    addEmployeeAPI.AddEmployeeWithoutCreateLoginDetails();
  });

Then("the emolyee should be added successfully", () => {
    addEmployeeAPI.checkPersonalDerails();
  });