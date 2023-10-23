import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import actions from "../../pageObjects/OrangeHRMAddEmployee/actions";
import assertions from "../../pageObjects/OrangeHRMAddEmployee/assertions";
import api from "../../pageObjects/OrangeHRMAddEmployee/dataUtils";
import {EmployeeAPIBody,UpdateAPIBody,DeleteAPIBody} from "../../../support/EmolyeeTypes/types";

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
let deleteEmployee : DeleteAPIBody;
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
    let updateEmployee : UpdateAPIBody = {
            "empNumber": empNumber,
            "lastName": "Hamoda",
            "firstName": "Dana",
            "middleName": "",
            "employeeId": employeeId,
            "otherId": "",
            "drivingLicenseNo": "",
            "drivingLicenseExpiredDate": null,
            "gender": null,
            "birthday": null,
            "nationalityId": null,
            "ssnNumber": "",
            "sinNumber": "",
            "nickname": "",
            "smoker": true,
            "militaryService": ""
        };
    updateEmployeeAPI.UpdateEmployee(
        updateEmployee,
        empNumber
        );
});

When("the user navigate to Employee List page", () => {
    updateEmployeeActions.NavigateToEmployeeListPage();
});

Then("the employee should be updated successfully", () => {
    updateEmployeeAssertions.checkTheEmployeeRecord([employeeId,"Dana","Hamoda"],true);
});

after(() => {
    updateEmployeeAPI.searchOnEmployeeByID(employeeId).then((response)=>
    {
        if(response.data[0].employeeId === employeeId){
      updateEmployeeAPI.DeleteEmployee(
        deleteEmployee = {
        "ids" : [empNumber]
    });
    }
       else {
        return;
       }  
    });
 });