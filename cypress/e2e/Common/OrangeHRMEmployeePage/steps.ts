import { Given } from "@badeball/cypress-cucumber-preprocessor";
import actions from "../../pageObjects/OrangeHRMEmployeePage/actions";
import api from "../../pageObjects/OrangeHRMEmployeePage/dataUtils";

const loginActions = new actions();
const apiAddEmployee = new api();

Given ("Common Step: The user login to OrangeHRM", () =>{
    cy.login("Admin","admin123");
 });

 Given ("Common Step: The user navigate to Add employee page", () =>{
    cy.wait(6000);
    loginActions.navigateToAddEmployeePage();
 });