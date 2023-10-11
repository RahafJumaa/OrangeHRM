Feature: TC-02_VerifyAddEmployeeOnOrangeHRM

   Scenario: 1#: Verify the Add Employee page open correctly
      Given Common Step: The user login to OrangeHRM
      And Common Step: The user navigate to Add employee page
      Then The Add Employee page should be open correctly

   Scenario: 2#: check invalid add employee with empty fields
      Given Common Step: The user login to OrangeHRM
      And Common Step: The user navigate to Add employee page
      When The user clicks on the Save button
      Then A message stating that the fields are required should appear

   Scenario: 3#: check click on Cancel button 
      Given Common Step: The user login to OrangeHRM
      And Common Step: The user navigate to Add employee page
      When The user clicks on the Cancel button
      Then The user should navigate to Employee List page

    Scenario: 4#: check Add employee with valid inputs without create login details
      Given Common Step: The user login to OrangeHRM
      And Common Step: The user navigate to Add employee page
      When the user enter a valid full name into Employee Full Name fields
      And the user enter a valid id into Employee Id field
      And the user clicks on the Save button
      Then the emolyee should be added successfully

    Scenario: 5#: check enable create login details option
       Given Common Step: The user login to OrangeHRM
       And Common Step: The user navigate to Add employee page
       When the user enable the Create Login Details option
       Then The Create Login Details fields should appear

    Scenario: 6#: check valid add employee with create login details
       Given Common Step: The user login to OrangeHRM
       And Common Step: The user navigate to Add employee page
       When the user enter a valid full name into Employee Full Name fields
       And the user enter a valid id into Employee Id field
       And the user enable the Create Login Details option
       And the user enter a valid username into Username field
       And the user enter a valid password into Password field
       And the user enter a valid confirm password into Confirm Password field
       And the user clicks on the Save button
       Then the emolyee should be added successfully

    Scenario: 7#: check invalid add employee with an existence username
       Given Common Step: The user login to OrangeHRM
       And Common Step: The user navigate to Add employee page
       When the user enable the Create Login Details option
       And the user enter an existence username into Username field
       Then A message stating that Username already exists should appear

    Scenario: 8#: check invalid add employee with not matching password and confirm password
       Given Common Step: The user login to OrangeHRM
       And Common Step: The user navigate to Add employee page
       When the user enable the Create Login Details option
       And the user enter a valid password into Password field
       And the user enter a different confirm password into Confirm Password field
       Then A message stating that Passwords do not match should appear

    Scenario: 9#: check invalid add employee by a username with less than 5 characters
       Given Common Step: The user login to OrangeHRM
       And Common Step: The user navigate to Add employee page
       When the user enable the Create Login Details option
       And the user enter a username with less than 5 characters into Username field
       Then A message stating that Should be at least 5 characters should appear

    Scenario: 10#: check invalid add employee by a password with less than 7 characters
       Given Common Step: The user login to OrangeHRM
       And Common Step: The user navigate to Add employee page
       When the user enable the Create Login Details option
       And the user enter a password with less than 7 characters into Password field
       Then A message stating that Should be at least 7 characters should appear



   
      

   



