import { Given,When,Then } from "@badeball/cypress-cucumber-preprocessor";
import api from "../../pageObjects/OrangeHRMAddEmployee/dataUtils";
import actions from "../../pageObjects/OrangeHRMAddEmployee/actions";
import assertions from "../../pageObjects/OrangeHRMAddEmployee/assertions";
import {EmployeeAPIBody,UserAPIBody} from "../../../support/types";

const addEmployeeActions : actions = new actions();
const addEmployeeAssertions : assertions = new assertions();
const addEmployeeAPI = new api();
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
let createUser : UserAPIBody;

Given("the user navigate to Add employee page", () => {
  addEmployeeActions.NavigateToAddEmployeePage();
  });

When("the user add a new employee without create login details", () => {
    addEmployeeAPI.AddEmployeeWithoutCreateLoginDetails(createEmployee).then((response)=>
    {
      empNumber = response.data.empNumber;
    });
  });

When("the user add a new employee with create login details", () => {
  addEmployeeAPI.AddEmployeeWithoutCreateLoginDetails(createEmployee).then((response)=>
  {
    empNumber = response.data.empNumber;
    addEmployeeAPI.AddEmployeeWithCreateLoginDetails(
    createUser = {
    username : username,
    password : "rahaf123",
    userRoleId : 2,
    status : true,
    empNumber: empNumber,
  });
})
});

When("the user navigate to Employee List page", () => {
    addEmployeeActions.NavigateToEmployeeListPage();
});

Then("the emolyee should be added successfully", () => {
    addEmployeeAssertions.checkTheEmployeeRecord([employeeId,"Rahaf","Jumaa"],true);
});