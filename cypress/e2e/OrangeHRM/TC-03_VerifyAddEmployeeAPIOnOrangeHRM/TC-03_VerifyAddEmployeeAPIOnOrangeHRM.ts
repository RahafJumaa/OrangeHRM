import { Given,When,Then } from "@badeball/cypress-cucumber-preprocessor";
import api from "../../pageObjects/OrangeHRMAddEmployee/dataUtils";
import assertions from "../../pageObjects/OrangeHRMAddEmployee/assertions";
import {EmployeeAPIBody,UserAPIBody} from "../../../support/types";

const addEmployeeAssertions : assertions = new assertions();
const addEmployeeAPI = new api();
const range = {min: 1000, max: 9999};
const delta = range.max - range.min;
const employeeId = (Math.round(range.min + Math.random() * delta)).toString();
const username = (Math.random() + 1).toString(36).substring(2);
let  empNumber: string ;
let CreateEmployee : EmployeeAPIBody;
CreateEmployee = {
  firstName : "Rahaf",
  middleName : "Suliman",
  lastName : "Jumaa",
  employeeId : employeeId,
};
let CreateUser : UserAPIBody;

Given("the user navigate to Add employee page", () => {
  addEmployeeAPI.NavigateToAddEmployeePage();
  addEmployeeAssertions.NavigateToAddEmployeePage();
  });

When("the user add a new employee without create login details", () => {
    addEmployeeAPI.AddEmployeeWithoutCreateLoginDetails(CreateEmployee);
  });

When("the user add a new employee with create login details", () => {
  addEmployeeAPI.AddEmployeeWithoutCreateLoginDetails(CreateEmployee).then((response)=>
  {
    empNumber = response.data.empNumber;
    addEmployeeAPI.AddEmployeeWithCreateLoginDetails(
    CreateUser = {
    username : username,
    password : "rahaf123",
    userRoleId : 2,
    status : true,
    empNumber: response.data.empNumber,
  });
})
    
  });

Then("the emolyee should be added successfully", () => {
    addEmployeeAPI.checkPersonalDerails(employeeId,empNumber);
  });