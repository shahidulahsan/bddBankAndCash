@login
Feature:  Login function 

Background: 
	Given User is in Techfios login page      
	
Scenario Outline: 
	User  able to login with valid username and password  
	When User enters valid "<username>" and "<password>" 
	And  User clicks the signIn button 
	Then User will see the dashboard 
	 
	
	Examples: 
		|username         |password|
		|demo@techfios.com|abc123  |