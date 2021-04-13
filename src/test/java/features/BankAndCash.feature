@BankCash
Feature: Techfios bank and cash New Account Functionality 

Background: 
	Given User is on the techfios login page 
	
	
Scenario Outline: 
	User should be able to login with valid username and password and open a new account 
	When User enters "<username>" and "<password>" 
	And  User clicks on signIn button 
	Then User able to see the dashboard 
	When User clicks on bank and cash 
	When User clicks on new account 
	And User fill up the form entering "<accountTitle>" and "<description>"and "<initialBalance>"and "<accountNumber>"and "<contactPerson>" and "<phone>" and "<internetBankingUrl>" and clicks on submit 
	Then User should be able to see validate 
	
	Examples: 
		|username         |password|accountTitle  |description|initialBalance|accountNumber|contactPerson|phone  |internetBankingUrl|
		|demo@techfios.com|abc123  |Shahidul Ahsan|Savings    |2500          |25345423     |Ahsan        |3473412|www.abc.com       |