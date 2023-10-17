import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import actions from "../../pageObjects/OrangeHRMAddEmployee/actions";
import assertions from "../../pageObjects/OrangeHRMAddEmployee/assertions";
import api from "../../pageObjects/OrangeHRMAddEmployee/dataUtils";
import {EmployeeAPIBody,UpdateAPIBody} from "../../../support/types";

const updateEmployeeActions : actions = new actions();
const updateEmployeeAssertions : assertions = new assertions();
const updateEmployeeAPI = new api();
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
let updateEmployee : UpdateAPIBody;

Given("the user navigate to Add Employee page", () => {
    updateEmployeeActions.NavigateToAddEmployeePage();
});

Given("the user add a new employee", () => {
    updateEmployeeAPI.AddEmployeeWithoutCreateLoginDetails(createEmployee).then((response)=>
    {
      empNumber = response.data.empNumber;
});
});
  
When("the user updatde the added employee", () => {
    updateEmployeeAPI.UpdateEmployee(
        updateEmployee = {
            "lastName": "Hamoda",
            "firstName": "Dana",
            "middleName": "",
            "employeeId": employeeId,
            "otherId": "",
            "drivingLicenseNo": "",
            "drivingLicenseExpiredDate": "",
            "gender": "Female",
            "birthday": "",
            "nationalityId": 123,
            "ssnNumber": "",
            "sinNumber": "",
            "nickname": "",
            "smoker": false,
            "militaryService": ""  
        },
        );
});

When("the user navigate to Personal Details page", () => {
    updateEmployeeActions.NavigateToPersonalDetailsPage(empNumber);
});

Then("the employee should be updated successfully", () => {
    updateEmployeeAPI.checkUpdatedPersonalDerails(updateEmployee,empNumber);
});