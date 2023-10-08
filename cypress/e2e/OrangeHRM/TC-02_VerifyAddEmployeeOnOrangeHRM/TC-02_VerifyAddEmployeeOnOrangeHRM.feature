Feature: TC-01_VerifyAddEmployeeOnOrangeHRM

   #Scenario: check valid Add employee page display
   #   Given Common Step: The user login to OrangeHRM
    #  And Common Step: The user navigate to Add employee page
     # Then The Add Employee title should appear
    #  And A button to add a photo should appear
    #  And The Employee Full Name fields should appear
     # And The Employee Id field should appear with default number
    #  And The Create Login Details option should be disable
    #  And The Save button should appear
    #  And The Cancel button should appear

  # Scenario: check invalid add employee with empty fields
    #  Given Common Step: The user login to OrangeHRM
     # And Common Step: The user navigate to Add employee page
      #When The user clicks on the Save button
      #Then A message stating that the fields are required should appear

 #  Scenario: check click on Cancel button 
  #    Given Common Step: The user login to OrangeHRM
   #   And Common Step: The user navigate to Add employee page
    #  When The user clicks on the Cancel button
     # Then The user should navigate to Employee List page

  # Scenario: check Add employee with valid inputs
   #   Given Common Step: The user login to OrangeHRM
    #  And Common Step: The user navigate to Add employee page
     # When the user enter valid inputs to all fields
      #And the user clicks on the Save button
      #Then the user should navigate to Personal Details page

  #  Scenario: check enable create login details option
   #    Given Common Step: The user login to OrangeHRM
    #   And Common Step: The user navigate to Add employee page
     #  When the user enable the Create Login Details option
      # Then The Username field should appear
       #And The Password field should appear
       #And The Confirm Password field should appear
       #And The Status option should appear

   # Scenario: check valid add employee with create login details
    #   Given Common Step: The user login to OrangeHRM
   #    And Common Step: The user navigate to Add employee page
    #   When the user enter a valid full name into Employee Full Name fields
    #   And the user enter a valid id into Employee Id field
    #   And the user upload an image for the employee
    #   And the user enable the Create Login Details option
    #   And the user enter a valid username into Username field
    #   And the user enter a valid password into Password field
    #   And the user enter a valid confirm password into Confirm Password field
       #And the user choose the status for the employee
     #  And the user clicks on the Save button
      # Then the user should navigate to Personal Details page

   # Scenario: check invalid add employee with an existence username
    #   Given Common Step: The user login to OrangeHRM
     #  And Common Step: The user navigate to Add employee page
    #   When the user enable the Create Login Details option
     #  And the user enter an existence username into Username field
    #   Then A message stating that Username already exists should appear

  #  Scenario: check invalid add employee with not matching password and confirm password
  #     Given Common Step: The user login to OrangeHRM
   #    And Common Step: The user navigate to Add employee page
   #    When the user enable the Create Login Details option
   #    And the user enter a valid password into Password field
   #    And the user enter a different confirm password into Confirm Password field
   #    Then A message stating that Passwords do not match should appear

   # Scenario: check invalid add employee by a username with less than 5 characters
    #   Given Common Step: The user login to OrangeHRM
   #    And Common Step: The user navigate to Add employee page
   #    When the user enable the Create Login Details option
    #   And the user enter a username with less than 5 characters into Username field
     #  Then A message stating that Should be at least 5 characters should appear

    Scenario: check invalid add employee by a password with less than 7 characters
       Given Common Step: The user login to OrangeHRM
       And Common Step: The user navigate to Add employee page
       When the user enable the Create Login Details option
       And the user enter a password with less than 7 characters into Password field
       Then A message stating that Should be at least 7 characters should appear



   
      

   



