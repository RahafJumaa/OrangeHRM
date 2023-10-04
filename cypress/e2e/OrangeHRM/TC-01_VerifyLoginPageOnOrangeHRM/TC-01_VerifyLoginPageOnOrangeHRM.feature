Feature: TC-01 - Verify Login Page on OrangeHRM

   Scenario: check valid login page display with login fields
      Given Common Step: The user open OrangeHRM login page
      Then The OrangeHRM logo should appear
      And The Login title should appear
      And The username field should appear
      And The password field should appear
      And The Login button should appear

   Scenario: Check valid login attempt with valid username and password credentials
      Given Common Step: The user open OrangeHRM login page
      When The user login as admin with valid username and password credentials
      Then The user should navigate to the Dashboard

   Scenario: Check invalid login attempt with empty username and password 
      Given Common Step: The user open OrangeHRM login page
      When The user login with empty username and password credentials
      Then A message stating that the fields are required should appear

   Scenario: Check invalid login attempt with invalid username and password credentials
      Given Common Step: The user open OrangeHRM login page
      When The user login as admin with invalid username and password credentials
      Then A message stating that the credentials are invalid should appear

   Scenario: Check click on Forgot your password? link
      Given Common Step: The user open OrangeHRM login page
      When The user clicks on Forgot your password? link
      Then The user should navigate to Reset Password form

