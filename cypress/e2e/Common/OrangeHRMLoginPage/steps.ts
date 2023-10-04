import { Given } from "@badeball/cypress-cucumber-preprocessor";
import actions from "../../pageObjects/OrangeHRMLoginPage/actions";

let loginActions : actions = new actions();

Given ("Common Step: The user open OrangeHRM login page", () =>{
   loginActions.openLoginPage();
});