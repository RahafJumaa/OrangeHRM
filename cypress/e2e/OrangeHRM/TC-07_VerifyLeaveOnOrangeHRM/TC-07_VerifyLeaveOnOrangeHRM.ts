import { Given,When,Then } from "@badeball/cypress-cucumber-preprocessor";
import EmployeePageDataUtils from "../../pageObjects/OrangeHRMEmployeePage/dataUtils";
import LeavePageDataUtils from "../../pageObjects/OrangeHRMLeavePage/dataUtils";
import LoginPageActions from "../../pageObjects/OrangeHRMLoginPage/actions";
import LeavePageActions from "../../pageObjects/OrangeHRMLeavePage/actions";
import LeavePageAssertions from "../../pageObjects/OrangeHRMLeavePage/assertions";
import {DeleteAPIBody} from "../../../support/EmolyeeTypes/types";
import {addLeaveEntitlementBody,requestLeaveBody,approveRequestLeaveBody} from "../../../support/LeaveTypes/types";
import { getEmployee, getUser } from "cypress/e2e/Common/OrangeHRMEmployeePage/dataFaker";
import moment from "moment-timezone";

const loginActions : LoginPageActions = new LoginPageActions();
const leaveActions : LeavePageActions = new LeavePageActions();
const leaveAssertions : LeavePageAssertions = new LeavePageAssertions();
const employeeAPI = new EmployeePageDataUtils();
const LeaveAPI = new LeavePageDataUtils();
const leaveTypeId = 8;
const fromDateEntitlement = moment().startOf('year').format("YYYY-MM-DD");
const toDateEntitlement = moment().endOf('year').format("YYYY-MM-DD");
const fromDateLeave  = moment().add(2, 'days').format("YYYY-MM-DD");
const toDateLeave  = moment().add(4, 'days').format("YYYY-MM-DD");
const employee = getEmployee();

let user = getUser();
let  empNumber: string ;
let id: number;
let deleteEmployee : DeleteAPIBody;
let addLeaveEntitlement: addLeaveEntitlementBody = {
    "empNumber": empNumber,
    "leaveTypeId": leaveTypeId,
    "fromDate": fromDateEntitlement,
    "toDate": toDateEntitlement,
    "entitlement": "3"
};
let requestLeave :requestLeaveBody = {
    "leaveTypeId": leaveTypeId,
    "fromDate": fromDateLeave,
    "toDate": toDateLeave,
    "comment": "nothing",
    "duration": {
        "type": "half_day_morning"
    },
    "partialOption": "all"
};
let approveRequestLeave :approveRequestLeaveBody = {
    action : "APPROVE",
};
before(() => {
    loginActions.loginToOrangeHRM("Admin","admin123");
  });

Given("The system has an Employee with Login Details", () => {
    employeeAPI.createEmployee(employee).then((response)=>
    {
      empNumber = response.data.empNumber;
      user = {...getUser(), empNumber: empNumber};
      employeeAPI.createUser(user)
  });
});

Given("The employee has number of entitlement", () => {
    LeaveAPI.addLeaveEntitlement({...addLeaveEntitlement, empNumber: empNumber});
});

When("The employee login to the system", () => {
    loginActions.logoutfromOrangeHRM().loginToOrangeHRM(user.username,user.password);
});

When("The employee requests a leave day in the future", () => {
   LeaveAPI.requestLeave(requestLeave).then((response)=>
    {
      id = response.data.id;
});;
});

When("The admin login to the system", () => {
    loginActions.logoutfromOrangeHRM().loginToOrangeHRM("Admin","admin123");
});

When("The admin approves the leave request", () => {
    LeaveAPI.approveLeaveRequest(approveRequestLeave , id);
});

When("Open the My Leave page", () => {
    leaveActions.navigateToMyLeavePage();
});

Then("The leave should exist in the records table with status Scheduled", () => {
    leaveAssertions.waitSkeletonDisappeared().checkScheduledStatus();
});

after(() => {
    loginActions.logoutfromOrangeHRM().loginToOrangeHRM("Admin","admin123");
    employeeAPI.deleteEmployee(employee.employeeId);
});

