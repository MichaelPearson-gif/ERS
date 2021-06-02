package test.steps;

import java.io.IOException;
import java.nio.file.Paths;
import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;


public class TestStep {
	
	WebDriver driver;
	
	@Before()
	public void setup() throws IOException{
		System.setProperty("webdriver.chrome.driver", Paths.get(System.getProperty("user.dir")).toRealPath()+"\\src\\test\\java\\test\\Resources\\chromedriver.exe");
		this.driver = new ChromeDriver();
		this.driver.manage().window().maximize();
		this.driver.manage().timeouts().pageLoadTimeout(60, TimeUnit.SECONDS);
	}
	
	@Given("^we go to the webpage$")
	public void we_go_to_the_webpage() throws Throwable {
	    this.driver.get("http://localhost:8090/ERS/");
	}

	@Given("^I enter \"([^\"]*)\" as username$")
	public void i_enter_as_username(String username) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		this.driver.findElement(By.xpath("//input[@id='uName']")).sendKeys(username);
	}

	@Given("^I enter \"([^\"]*)\" as password$")
	public void i_enter_as_password(String password) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		this.driver.findElement(By.xpath("//input[@id='pWord']")).sendKeys(password);
	}

	@When("^I click login$")
	public void i_click_login() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    this.driver.findElement(By.xpath("//button[contains(text(),'LOGIN')]")).click();
	}

	@When("^I click the reimbursment form$")
	public void i_click_the_reimbursment_form() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		Thread.sleep(1000);
		this.driver.findElement(By.xpath("//a[contains(text(),'Fill Out New Reimbursements')]")).click();
	}

	@When("^I enter in \"([^\"]*)\" as amount$")
	public void i_enter_in_as_amount(String amount) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    this.driver.findElement(By.xpath("//input[@id='reimb_amount']")).sendKeys(amount);
	}

	@When("^I enter in \"([^\"]*)\" as description$")
	public void i_enter_in_as_description(String description) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		this.driver.findElement(By.xpath("//textarea[@id='reimb_description']")).sendKeys(description);
	}

	@When("^I click submit form$")
	public void i_click_submit_form() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    this.driver.findElement(By.xpath("//button[contains(text(),'Submit form')]")).click();
	}

	@Then("^the reimbursment will be submitted$")
	public void the_reimbursment_will_be_submitted() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		Thread.sleep(3000);
		Alert alert = this.driver.switchTo().alert();
		Assert.assertEquals("Reimbursement sent", alert.getText());
		alert.accept();
	}

	@When("^I click view past reimbursments$")
	public void i_click_view_past_reimbursments() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		Thread.sleep(1000);
	    this.driver.findElement(By.xpath("//a[contains(text(),'View Past Reimbursements')]")).click();
	}

	@When("^I click the delete button$")
	public void i_click_the_delete_button() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		Thread.sleep(1000);
	    this.driver.findElement(By.xpath("//tbody/tr[1]/td[7]/button[1]")).click();
	}

	@Then("^the reimbursment will be deleted$")
	public void the_reimbursment_will_be_deleted() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		Thread.sleep(3000);
		Alert alert = this.driver.switchTo().alert();
		Assert.assertEquals("Reimbursement deleted", alert.getText());
		alert.accept();
	}

	@When("^I click view all reimbursment$")
	public void i_click_view_all_reimbursment() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		Thread.sleep(3000);
	    this.driver.findElement(By.xpath("//a[contains(text(),'View all Reimbursements')]")).click();
	}

	@When("^I click on a reimbursment$")
	public void i_click_on_a_reimbursment() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		Thread.sleep(3000);
	    this.driver.findElement(By.xpath("//body/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]")).click();
	}

	@Then("^I can view all the reimbursment information$")
	public void i_can_view_all_the_reimbursment_information() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		Thread.sleep(1000);
	    Assert.assertFalse(this.driver.findElement(By.xpath("//span[@id='dollarAmount']")).getText().equals(""));
	}

	@When("^I approve a reimbursment request$")
	public void i_approve_a_reimbursment_request() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    this.driver.findElement(By.xpath("//button[contains(text(),'Approve')]")).click();
	}

	@Then("^the reimbursment request will no longer be shown$")
	public void the_reimbursment_request_will_no_longer_be_shown() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		Thread.sleep(3000);
		Alert alert = this.driver.switchTo().alert();
		Assert.assertEquals("rembursment approved", alert.getText());
		alert.accept();
	}
	
	@After()
	public void tearDownClass() {
		this.driver.close();
		this.driver.quit();
	}
}
