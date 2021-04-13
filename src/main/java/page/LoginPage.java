package page;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class LoginPage extends BasePage  {

	WebDriver driver;

	public LoginPage(WebDriver driver) {
		this.driver = driver;

	}

	// Element Library

	@FindBy(xpath = "//input[@type='text']")
	WebElement Email_Field;
	@FindBy(xpath = "//input[@type='password']")
	WebElement Password_Field;
	@FindBy(xpath = "//button[@name='login']")
	WebElement Signin_Button;

	// Interactive methods

	public void loginEmail(String email) {
		Email_Field.sendKeys(email);
	}

	public void loginPassword(String password) {
		Password_Field.sendKeys(password);
	}

	public void signinButon() {
		Signin_Button.click();
	}
	

}
