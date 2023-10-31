import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import EmployeePageActions from "../../pageObjects/OrangeHRMEmployeePage/actions";
import EmployeePageAssertions from "../../pageObjects/OrangeHRMEmployeePage/assertions";
import EmployeePageDataUtils from "../../pageObjects/OrangeHRMEmployeePage/dataUtils";
import {deleteAPIBody} from "../../../support/EmolyeeTypes/types";
import {getEmployee} from "../../Common/OrangeHRMEmployeePage/dataFaker";

const deleteEmployeeActions : EmployeePageActions = new EmployeePageActions();
const deleteEmployeeAssertions : EmployeePageAssertions = new EmployeePageAssertions();
const employeeAPI = new EmployeePageDataUtils();
const employee = getEmployee();

let  empNumber: string ;
let deleteEmployee : deleteAPIBody;

Given("the user navigate to Add Employee page", () => {
    deleteEmployeeActions.NavigateToAddEmployeePage();
});

Given("the user add a new employee", () => {
    employeeAPI.CreateEmployee(employee).then((response)=>
    {
      empNumber = response.data.empNumber;
});
});
  
When("the user delete the added employee", () => {
    employeeAPI.deleteEmployee(employee.employeeId,deleteEmployee ={"ids" : [empNumber]});
});

When("the user navigate to Employee List page", () => {
    deleteEmployeeActions.NavigateToEmployeeListPage();
});

Then("the employee should be deleted successfully", () => {
    deleteEmployeeAssertions.checkTheEmployeeRecord([employee.employeeId,"Rahaf","Jumaa"],false);
});
