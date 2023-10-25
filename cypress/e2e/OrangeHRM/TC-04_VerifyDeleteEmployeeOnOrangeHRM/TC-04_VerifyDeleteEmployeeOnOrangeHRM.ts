import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import actions from "../../pageObjects/OrangeHRMAddEmployee/actions";
import assertions from "../../pageObjects/OrangeHRMAddEmployee/assertions";
import dataUtils from "../../pageObjects/OrangeHRMAddEmployee/dataUtils";
import {EmployeeAPIBody,DeleteAPIBody} from "../../../support/EmolyeeTypes/types";

const deleteEmployeeActions : actions = new actions();
const deleteEmployeeAssertions : assertions = new assertions();
const EmployeeAPI = new dataUtils();
const range = {min: 1000, max: 9999};
const delta = range.max - range.min;
const employeeId = (Math.round(range.min + Math.random() * delta)).toString();
const username = (Math.random() + 1).toString(36).substring(2);

let  empNumber: string ;
let createEmployee : EmployeeAPIBody;
createEmployee = {
  firstName : "Rahaf",
  middleName : "Suliman",
  lastName : "Jumaa",
  employeeId : employeeId,
};
let deleteEmployee : DeleteAPIBody;


Given("the user navigate to Add Employee page", () => {
    deleteEmployeeActions.NavigateToAddEmployeePage();
});

Given("the user add a new employee", () => {
    EmployeeAPI.AddEmployeeWithoutCreateLoginDetails(createEmployee).then((response)=>
    {
      empNumber = response.data.empNumber;
});
});
  
When("the user delete the added employee", () => {
    EmployeeAPI.DeleteEmployee(employeeId,deleteEmployee ={"ids" : [empNumber]});
});

When("the user navigate to Employee List page", () => {
    deleteEmployeeActions.NavigateToEmployeeListPage();
});

Then("the employee should be deleted successfully", () => {
    deleteEmployeeAssertions.checkTheEmployeeRecord([employeeId,"Rahaf","Jumaa"],false);
});
