import { Given,When,Then } from "@badeball/cypress-cucumber-preprocessor";
import dataUtils from "../../pageObjects/OrangeHRMAddEmployee/dataUtils";
import data_Utils from "../../pageObjects/OrangeHRMLeave/dataUtils";
import actions from "../../pageObjects/OrangeHRMLeave/actions";
import assertions from "../../pageObjects/OrangeHRMLeave/assertions";
import {EmployeeAPIBody,UserAPIBody,DeleteAPIBody} from "../../../support/EmolyeeTypes/types";
import {AddLeaveEntitlementBody,RequestLeaveBody,ApproveRequestLeaveBody} from "../../../support/LeaveTypes/types";

const leaveActions : actions = new actions();
const leaveAssertions : assertions = new assertions();
const EmployeeAPI = new dataUtils();
const LeaveAPI = new data_Utils();
const range = {min: 1000, max: 9999};
const delta = range.max - range.min;
const employeeId = (Math.round(range.min + Math.random() * delta)).toString();
const username = (Math.random() + 1).toString(36).substring(2);
const password = "rahaf123";
const leaveTypeId = 8;
const fromDate = "2023-01-01";
const toDate = "2023-12-31";

let  empNumber: string ;
let id: number;
let createEmployee : EmployeeAPIBody;
createEmployee = {
  firstName : "Rahaf",
  middleName : "Suliman",
  lastName : "Jumaa",
  employeeId : employeeId,
};
let createUser : UserAPIBody;
let deleteEmployee : DeleteAPIBody;
let addLeaveEntitlement: AddLeaveEntitlementBody;
let requestLeave :RequestLeaveBody;
let approveRequestLeave :ApproveRequestLeaveBody = {
    action : "APPROVE",
};
before(() => {
    leaveActions.loginToOrangeHRM("Admin","admin123");
  });

Given("The system has an Employee with Login Details", () => {
    EmployeeAPI.AddEmployeeWithoutCreateLoginDetails(createEmployee).then((response)=>
    {
      empNumber = response.data.empNumber;
      EmployeeAPI.AddEmployeeWithCreateLoginDetails(
      createUser = {
      username : username,
      password : password,
      userRoleId : 2,
      status : true,
      empNumber: empNumber,
    });
  })
  });

Given("The employee has number of entitlement", () => {
    addLeaveEntitlement = {
        "empNumber": empNumber,
        "leaveTypeId": leaveTypeId,
        "fromDate": fromDate,
        "toDate": toDate,
        "entitlement": "3"
    }
    LeaveAPI.addLeaveEntitlement(addLeaveEntitlement);
});

When("The employee login to the system", () => {
    leaveActions.logoutfromOrangeHRM().loginToOrangeHRM(username,password);
});

When("The employee requests a leave day in the future", () => {
    requestLeave = {
        "leaveTypeId": leaveTypeId,
        "fromDate": "2023-10-25",
        "toDate": "2023-10-27",
        "comment": "nothing",
        "duration": {
            "type": "half_day_morning"
        },
        "partialOption": "all"
    }
    LeaveAPI.requestLeave(requestLeave).then((response)=>
    {
      id = response.data.id;
});;
});

When("The admin login to the system", () => {
    leaveActions.logoutfromOrangeHRM().loginToOrangeHRM("Admin","admin123");
});

When("The admin approves the leave request", () => {
    LeaveAPI.approveLeaveRequest(approveRequestLeave , id);
});

When("Open the My Leave page", () => {
    leaveActions.navigateToMyLeavePage();
});

Then("The leave should exist in the records table with status Scheduled", () => {
    leaveAssertions.checkScheduledStatus();
});

after(() => {
    EmployeeAPI.DeleteEmployee(employeeId,deleteEmployee ={"ids" : [empNumber]});
 });








