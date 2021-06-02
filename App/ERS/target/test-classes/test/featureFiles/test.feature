Feature: testing the reimbursment page.

Background: 
	Given we go to the webpage
	

Scenario: We create a reimbursment request
	And I enter "Robert" as username
	And I enter "p" as password
	When I click login
	When I click the reimbursment form
	And I enter in "3" as amount
	And I enter in "description" as description
	When I click submit form
	Then the reimbursment will be submitted
	
Scenario: We delete a reimbursment
	And I enter "Robert" as username
	And I enter "p" as password
	When I click login
	When I click view past reimbursments
	When I click the delete button
	Then the reimbursment will be deleted
	
Scenario: view a reimbursment request
	And I enter "Ronda" as username
	And I enter "password" as password
	When I click login
	When I click view all reimbursment
	When I click on a reimbursment
	Then I can view all the reimbursment information
	
Scenario: update a reimbursment request
	And I enter "Ronda" as username
	And I enter "password" as password
	When I click login
	When I click view all reimbursment
	When I click on a reimbursment
	When I approve a reimbursment request
	Then the reimbursment request will no longer be shown
	