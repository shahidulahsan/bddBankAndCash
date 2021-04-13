package steps;


import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import page.LoginPage;
import util.BrowserFactory;

public class LoginSteps {
	WebDriver driver;
	LoginPage login;



	@Given("^User is in Techfios login page$")
	public void user_is_in_Techfios_login_page() {
		driver.get("https://techfios.com/billing/?ng=login/after/dashboard");

	}

	@When("^User enters valid \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_enters_valid_and(String email, String password) {
		login.loginEmail(email);
		login.loginPassword(password);

	}

	@When("^User clicks the signIn button$")
	public void user_clicks_the_signIn_button() {
		login.signinButon();

	}

	@Then("^User will see the dashboard$")
	public void user_will_see_the_dashboard() {
		   BrowserFactory.tearDown();
	}

}
