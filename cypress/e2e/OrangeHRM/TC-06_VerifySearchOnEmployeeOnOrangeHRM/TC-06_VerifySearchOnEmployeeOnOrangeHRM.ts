import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import EmployeePageActions from "../../pageObjects/OrangeHRMEmployeePage/actions";
import EmployeePageAssertions from "../../pageObjects/OrangeHRMEmployeePage/assertions";
import EmployeePageDataUtils from "../../pageObjects/OrangeHRMEmployeePage/dataUtils";
import {deleteAPIBody} from "../../../support/EmolyeeTypes/types";
import { getEmployee } from "cypress/e2e/Common/OrangeHRMEmployeePage/dataFaker";

const searchEmployeeActions : EmployeePageActions = new EmployeePageActions();
const searchEmployeeAssertions : EmployeePageAssertions = new EmployeePageAssertions();
const employeeAPI = new EmployeePageDataUtils();
const employee = getEmployee();

let  empNumber: string ;
let deleteEmployee :deleteAPIBody;

Given("the user add a new employee", () => {
    employeeAPI.CreateEmployee(employee).then((response)=>
    {
      empNumber = response.data.empNumber;
});
});

When("the user navigate to Employee List page", () => {
    searchEmployeeActions.NavigateToEmployeeListPage();
});
  
When("the user search on the added employee by name", () => {
    employeeAPI.getEmployeeByName(employee.firstName);
});

When("the user search on the added employee by id", () => {
    employeeAPI.getEmployeeByID(employee.employeeId);
});

When("the user search on the added employee by name and id", () => {
    employeeAPI.getEmployeeByNameAndID(employee.firstName,employee.employeeId);
});

after(() => {
    employeeAPI.deleteEmployee(employee.employeeId,deleteEmployee ={"ids" : [empNumber]});
 });
