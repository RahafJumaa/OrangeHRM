Feature: TC-03 Verify Add Employee On OrangeHRM

   Scenario: 1#: Verify Add Employee without create login details
      Given Common Step: The user login to OrangeHRM
      And the user navigate to Add employee page
      When the user add a new employee without create login details
      And the user navigate to Employee List page
      Then the emolyee should be added successfully

   Scenario: 2#: Verify Add Employee with create login details
      Given Common Step: The user login to OrangeHRM
      And the user navigate to Add employee page
      When the user add a new employee with create login details
      And the user navigate to Employee List page
      Then the emolyee should be added successfully


      