package steps;

import java.io.IOException;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import page.BankAndCashPage;
import page.LoginPage;
import util.BrowserFactory;

public class BankAndCashSteps {

	WebDriver driver;
	LoginPage login;
	BankAndCashPage bank;

	@Before
	public void launchBrowser() {
		driver = BrowserFactory.init();
		login = PageFactory.initElements(driver, LoginPage.class);
		bank = PageFactory.initElements(driver, BankAndCashPage.class);

	}

	@Given("^User is on the techfios login page$")
	public void user_is_on_the_techfios_login_page() {
		driver.get("https://techfios.com/billing/?ng=admin/");
	}

	@When("^User enters \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_enters_and(String email, String password) {
		login.loginEmail(email);
		login.loginPassword(password);
	}

	@When("^User clicks on signIn button$")
	public void user_clicks_on_signIn_button() {
		login.signinButon();
	}

	@Then("^User able to see the dashboard$")
	public void user_able_to_see_the_dashboard() throws IOException {
		login.screenShot(driver);
	}

	@When("^User clicks on bank and cash$")
	public void user_clicks_on_bank_and_cash() {
		bank.clickBankCashButton();
	}

	@When("^User clicks on new account$")
	public void user_clicks_on_new_account() {
		bank.clickNewAccountButton();
	}

	@When("^User fill up the form entering \"([^\"]*)\" and \"([^\"]*)\"and \"([^\"]*)\"and \"([^\"]*)\"and \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\" and clicks on submit$")
	public void user_fill_up_the_form_entering_and_and_and_and_and_and_and_clicks_on_submit(String title,
			String description, String balance, String accountNumber, String contactPerson, String phone, String url)
			throws InterruptedException {

		Thread.sleep(2000);
		bank.titleField(title + bank.random(111));
		Thread.sleep(3000);
		bank.descriptionField(description);
		bank.balanceField(balance);
		bank.accountNumberField(accountNumber + bank.random(111));
		bank.contactPersonField(contactPerson);
		Thread.sleep(3000);
		bank.contactPhoneField(phone + bank.random(111));
		bank.urlField(url);

		bank.submitButton();
	}

	@Then("^User should be able to see validate$")
	public void user_should_be_able_to_see_validate() {
		bank.validatePage("Accounts- iBilling", driver);
		BrowserFactory.tearDown();
	}

	
}
