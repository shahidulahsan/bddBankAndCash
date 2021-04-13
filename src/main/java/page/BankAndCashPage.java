package page;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import junit.framework.Assert;



public class BankAndCashPage extends BasePage{
	
	WebDriver driver; 
	
	public BankAndCashPage(WebDriver driver) {
		this.driver = driver;

	}
	
	//Web Elements
	
	@FindBy(xpath = "//*[@id=\"side-menu\"]/li[10]/a/span[1]")
	WebElement Bank_Cash_Button;
	@FindBy(xpath = "//*[@id=\"side-menu\"]/li[10]/ul/li[1]/a")
	WebElement New_Account_Button;
	

	@FindBy(xpath = "//input[@id='account']")
	WebElement Title_Field;
	@FindBy(xpath = "//input[@id='description']")
	WebElement Description_Field;
	@FindBy(xpath = "//input[@id='balance']")
	WebElement Balance_Field;
	@FindBy(xpath = "//input[@id='account_number']")
	WebElement Account_Number_Field;
	@FindBy(xpath = "//input[@id='contact_person']")
	WebElement Contact_Person_Number_Field;
	@FindBy(xpath = "//input[@id='contact_phone']")
	WebElement Contact_Phone_Number_Field;
	@FindBy(xpath = "//input[@id='ib_url']")
	WebElement URL_Field;
	@FindBy(xpath = "//button[@class='btn btn-primary']")
	WebElement Submit_Button;

	
	
	//Interactive method
	
	public void clickBankCashButton() {Bank_Cash_Button.click();}
	public void clickNewAccountButton() {New_Account_Button.click();}
	
	public void titleField(String title) {Title_Field.sendKeys(title);}
	public void descriptionField(String description) {Description_Field.sendKeys(description);}
	public void balanceField(String balance) {Balance_Field.sendKeys(balance);}
	public void accountNumberField(String accountNumber) {Account_Number_Field.sendKeys(accountNumber);}
	public void contactPersonField(String contact) {Contact_Person_Number_Field.sendKeys(contact);}
	public void contactPhoneField(String phone) {Contact_Phone_Number_Field.sendKeys(phone);}
	public void urlField(String url) {URL_Field.sendKeys(url);}
	
	
	public void submitButton() {Submit_Button.click();}
	
	
	
}



