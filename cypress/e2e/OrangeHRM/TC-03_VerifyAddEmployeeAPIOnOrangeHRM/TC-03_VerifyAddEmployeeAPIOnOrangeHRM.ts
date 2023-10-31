import { Given,When,Then } from "@badeball/cypress-cucumber-preprocessor";
import EmployeePageDataUtils from "../../pageObjects/OrangeHRMEmployeePage/dataUtils";
import EmployeePageActions from "../../pageObjects/OrangeHRMEmployeePage/actions";
import EmployeePageAssertions from "../../pageObjects/OrangeHRMEmployeePage/assertions";
import {deleteAPIBody} from "../../../support/EmolyeeTypes/types";
import {getEmployee,getUser} from "../../Common/OrangeHRMEmployeePage/dataFaker";

const addEmployeeActions : EmployeePageActions = new EmployeePageActions();
const addEmployeeAssertions : EmployeePageAssertions = new EmployeePageAssertions();
const employeeAPI = new EmployeePageDataUtils();
const employee = getEmployee();

let  empNumber: string ;
let user = getUser();
let deleteEmployee : deleteAPIBody;

Given("the user navigate to Add employee page", () => {
  addEmployeeActions.NavigateToAddEmployeePage();
  });

When("the user add a new employee without create login details", () => {
  employeeAPI.CreateEmployee(employee).then((response)=>
    {
      empNumber = response.data.empNumber;
    });
  });

When("the user add a new employee with create login details", () => {
  employeeAPI.CreateEmployee(employee).then((response)=>
  {
    empNumber = response.data.empNumber;
    user = {...getUser(), empNumber: empNumber};
    employeeAPI.CreateUser(user);
})
});

When("the user navigate to Employee List page", () => {
    addEmployeeActions.NavigateToEmployeeListPage();
});

Then("the emolyee should be added successfully", () => {
    addEmployeeAssertions.checkTheEmployeeRecord([employee.employeeId,"Rahaf","Jumaa"],true);
});

afterEach(() => {
  employeeAPI.deleteEmployee(employee.employeeId,deleteEmployee ={"ids" : [empNumber]});
});
