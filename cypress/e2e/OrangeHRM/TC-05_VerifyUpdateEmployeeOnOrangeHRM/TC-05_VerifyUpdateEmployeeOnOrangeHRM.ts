import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import EmployeePageActions from "../../pageObjects/OrangeHRMEmployeePage/actions";
import EmployeePageAssertions from "../../pageObjects/OrangeHRMEmployeePage/assertions";
import EmployeePageDataUtils from "../../pageObjects/OrangeHRMEmployeePage/dataUtils";
import {updateAPIBody,deleteAPIBody} from "../../../support/EmolyeeTypes/types";
import {getEmployee} from "../../Common/OrangeHRMEmployeePage/dataFaker";

const updateEmployeeActions : EmployeePageActions = new EmployeePageActions();
const updateEmployeeAssertions : EmployeePageAssertions = new EmployeePageAssertions();
const employeeAPI = new EmployeePageDataUtils();
const employee = getEmployee();

let  empNumber: string ;
let deleteEmployee : deleteAPIBody;

Given("the user navigate to Add Employee page", () => {
    updateEmployeeActions.NavigateToAddEmployeePage();
});

Given("the user add a new employee", () => {
    employeeAPI.CreateEmployee(employee).then((response)=>
    {
      empNumber = response.data.empNumber;
});
});
  
When("the user updatde the added employee", () => {
    let updateEmployee : updateAPIBody = {
            "empNumber": empNumber,
            "lastName": "Hamoda",
            "firstName": "Dana",
            "middleName": "",
            "employeeId": employee.employeeId,
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
        employeeAPI.updateEmployee(
        updateEmployee,
        empNumber
        );
});

When("the user navigate to Employee List page", () => {
    updateEmployeeActions.NavigateToEmployeeListPage();
});

Then("the employee should be updated successfully", () => {
    updateEmployeeAssertions.checkTheEmployeeRecord([employee.employeeId,"Dana","Hamoda"],true);
});

after(() => {
    employeeAPI.deleteEmployee(employee.employeeId,deleteEmployee ={"ids" : [empNumber]});
 });