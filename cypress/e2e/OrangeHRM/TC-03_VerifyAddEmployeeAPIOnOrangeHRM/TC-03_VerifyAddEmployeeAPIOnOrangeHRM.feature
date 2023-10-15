Feature: TC-03_VerifyAddEmployeeOnOrangeHRM

   Scenario: 1#: Verify Add Employee without create login details
      Given Common Step: The user login to OrangeHRM
      And the user navigate to Add employee page
      When the user add a new employee without create login details
      Then the emolyee should be added successfully

   Scenario: 2#: Verify Add Employee with create login details
      Given Common Step: The user login to OrangeHRM
      And the user navigate to Add employee page
      When the user add a new employee with create login details
      Then the emolyee should be added successfully
      