package test.steps;

import java.io.IOException;
import java.nio.file.Paths;
import java.util.concurrent.TimeUnit;

import org.junit.rules.Timeout;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.PendingException;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class TestStep {
	
	WebDriver driver;
	
	@Before()
	public void setup() throws IOException{
		System.setProperty("webdriver.chrome.driver", Paths.get(System.getProperty("user.dir")).toRealPath()+"\\ERS\\src\\test\\java\\test\\Resources\\chromedriver.exe");
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
	    throw new PendingException();
	}

	@When("^I enter in \"([^\"]*)\" as amount$")
	public void i_enter_in_as_amount(String arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}

	@When("^I enter in \"([^\"]*)\" as description$")
	public void i_enter_in_as_description(String arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}

	@When("^I click submit form$")
	public void i_click_submit_form() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}

	@Then("^the reimbursment will be submitted$")
	public void the_reimbursment_will_be_submitted() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}

	@When("^I click view past reimbursments$")
	public void i_click_view_past_reimbursments() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}

	@When("^I click the delete button$")
	public void i_click_the_delete_button() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}

	@Then("^the reimbursment will be deleted$")
	public void the_reimbursment_will_be_deleted() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}

	@When("^I click view all reimbursment$")
	public void i_click_view_all_reimbursment() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}

	@When("^I click on a reimbursment$")
	public void i_click_on_a_reimbursment() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}

	@Then("^I can view all the reimbursment information$")
	public void i_can_view_all_the_reimbursment_information() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}

	@When("^I approve a reimbursment request$")
	public void i_approve_a_reimbursment_request() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}

	@Then("^the reimbursment request will no longer be shown$")
	public void the_reimbursment_request_will_no_longer_be_shown() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    throw new PendingException();
	}
}
