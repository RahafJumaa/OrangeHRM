Feature: TC-04 Verify Delete Employee On OrangeHRM

   Scenario: 1#: Verify valid delete mployee 
      Given Common Step: The user login to OrangeHRM
      And the user navigate to Add Employee page
      And the user add a new employee
      When the user delete the added employee
      And the user navigate to Employee List page
      Then the employee should be deleted successfully