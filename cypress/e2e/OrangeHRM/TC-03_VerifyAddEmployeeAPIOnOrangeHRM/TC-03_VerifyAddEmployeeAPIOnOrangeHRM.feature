Feature: TC-03_VerifyAddEmployeeOnOrangeHRM

   Scenario: 1#: Verify Add Employee without create login details
      Given Common Step: The user login to OrangeHRM
      And the user navigate to Add employee page
      When the user add a new employee
      Then the emolyee should be added successfully
      