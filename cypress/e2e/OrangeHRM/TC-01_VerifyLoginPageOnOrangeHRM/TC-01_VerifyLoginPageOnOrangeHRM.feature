Feature: TC-01 - Verify Login Page on OrangeHRM

   Scenario: 1#: Verify the login page open correctly
      Given Common Step: The user open OrangeHRM login page
      Then The login page should be open correctly

   Scenario: 2#: Check valid login attempt with valid username and password credentials
      Given Common Step: The user open OrangeHRM login page
      When The user login as admin with valid username and password credentials
      Then The user should login successfully

   Scenario: 3#: Check invalid login attempt with empty username and password 
      Given Common Step: The user open OrangeHRM login page
      When The user login with empty username and password credentials
      Then A message stating that the fields are required should appear

   Scenario: 4#: Check invalid login attempt with invalid username and password credentials
      Given Common Step: The user open OrangeHRM login page
      When The user login as admin with invalid username and password credentials
      Then A message stating that the credentials are invalid should appear

   Scenario: 5#: Check click on Forgot your password? link
      Given Common Step: The user open OrangeHRM login page
      When The user clicks on Forgot your password? link
      Then The user should navigate to Reset Password form

