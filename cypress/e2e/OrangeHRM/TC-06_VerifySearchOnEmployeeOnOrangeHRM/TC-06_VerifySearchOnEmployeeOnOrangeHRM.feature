Feature: TC-06 Verify Update Employee On OrangeHRM

   Scenario: 1#: Verify valid search on employee by name
      Given Common Step: The user login to OrangeHRM
      And the user navigate to Add Employee page
      And the user add a new employee
      When the user navigate to Employee List page
      And the user search on the added employee by name
      #Then the employee record should be displayed successfully

   Scenario: 2#: Verify valid search on employee by id 
      Given Common Step: The user login to OrangeHRM
      And the user navigate to Add Employee page
      And the user add a new employee
      When the user navigate to Employee List page
      And the user search on the added employee by id
      #Then the employee record should be displayed successfully

   Scenario: 3#: Verify valid search on employee by name and id 
      Given Common Step: The user login to OrangeHRM
      And the user navigate to Add Employee page
      And the user add a new employee
      When the user navigate to Employee List page
      And the user search on the added employee by name and id
      #Then the employee record should be displayed successfully     