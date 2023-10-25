import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import actions from "../../pageObjects/OrangeHRMAddEmployee/actions";
import assertions from "../../pageObjects/OrangeHRMAddEmployee/assertions";
import dataUtils from "../../pageObjects/OrangeHRMAddEmployee/dataUtils";
import {DeleteAPIBody, EmployeeAPIBody} from "../../../support/EmolyeeTypes/types";

const searchEmployeeActions : actions = new actions();
const searchEmployeeAssertions : assertions = new assertions();
const EmployeeAPI = new dataUtils();
const range = {min: 1000, max: 9999};
const delta = range.max - range.min;
const employeeId = (Math.round(range.min + Math.random() * delta)).toString();
const username = (Math.random() + 1).toString(36).substring(2);
const firstName = "Rahaf";
const  middleName = "Suliman";
const lastName = "Jumaa";

let  empNumber: string ;
let createEmployee : EmployeeAPIBody;
createEmployee = {
  firstName : firstName,
  middleName : middleName,
  lastName : lastName,
  employeeId : employeeId,
};
let deleteEmployee :DeleteAPIBody;

Given("the user add a new employee", () => {
    EmployeeAPI.AddEmployeeWithoutCreateLoginDetails(createEmployee).then((response)=>
    {
      empNumber = response.data.empNumber;
});
});

When("the user navigate to Employee List page", () => {
    searchEmployeeActions.NavigateToEmployeeListPage();
});
  
When("the user search on the added employee by name", () => {
    EmployeeAPI.getEmployeeByName(firstName);
});

When("the user search on the added employee by id", () => {
    EmployeeAPI.getEmployeeByID(employeeId);
});

When("the user search on the added employee by name and id", () => {
    EmployeeAPI.getEmployeeByNameAndID(firstName,employeeId);
});

after(() => {
    EmployeeAPI.DeleteEmployee(employeeId,deleteEmployee ={"ids" : [empNumber]});
 });
