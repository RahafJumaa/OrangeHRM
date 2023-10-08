import { Given } from "@badeball/cypress-cucumber-preprocessor";
import actions from "../../pageObjects/OrangeHRMAddEmployee/actions";

let loginActions : actions = new actions();

Given ("Common Step: The user login to OrangeHRM", () =>{
    cy.login("Admin","admin123");
 });

 Given ("Common Step: The user navigate to Add employee page", () =>{
    loginActions.navigateToAddEmployeePage();
 });