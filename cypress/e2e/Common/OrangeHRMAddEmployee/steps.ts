import { Given } from "@badeball/cypress-cucumber-preprocessor";
import actions from "../../pageObjects/OrangeHRMAddEmployee/actions";
import api from "../../pageObjects/OrangeHRMAddEmployee/api";

const loginActions = new actions();
const apiAddEmployee = new api();

Given ("Common Step: The user login to OrangeHRM", () =>{
    cy.login("Admin","admin123");
 });

 Given ("Common Step: The user navigate to Add employee page", () =>{
    cy.wait(6000);
    loginActions.navigateToAddEmployeePage();
    //apiAddEmployee.clickOnPIMOnSideMenue();
    //apiAddEmployee.clickOnAddButton();
 });