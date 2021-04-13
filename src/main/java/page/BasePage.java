package page;

import java.io.File;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Random;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;

import junit.framework.Assert;

public class BasePage {
	
	

	public void screenShot(WebDriver driver) throws IOException {
		TakesScreenshot ts = ((TakesScreenshot) driver);

		SimpleDateFormat formatter = new SimpleDateFormat("MMddyy_HHmmss");
		Date date = new Date();
		String label = formatter.format(date);

		File sourceFile = ts.getScreenshotAs(OutputType.FILE);
		String currentDirectory = System.getProperty("user.dir");

		FileUtils.copyFile(sourceFile, new File(currentDirectory + "/screenshots/" + label + ".png"));
	}

	public int random(int digit) {
		Random rnd = new Random();
		return (rnd.nextInt(digit));

	}
	
	public void validatePage(String expected, WebDriver driver) {
		Assert.assertEquals(expected, driver.getTitle());
	}

}
