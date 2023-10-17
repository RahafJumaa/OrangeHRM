Feature: TC-05 Verify Update Employee On OrangeHRM

   Scenario: 1#: Verify valid updatde employee 
      Given Common Step: The user login to OrangeHRM
      And the user navigate to Add Employee page
      And the user add a new employee
      When the user updatde the added employee
      And the user navigate to Personal Details page
      Then the employee should be updated successfully