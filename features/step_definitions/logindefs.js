// const { Given, When, Then, setDefaultTimeout } = require("@cucumber/cucumber");
// const { Builder, By, Capabilities, Key } = require("selenium-webdriver");
// const assert = require("assert");
// setDefaultTimeout(60 * 1000);

// require("chromedriver");

// // driver setup
// const capabilities = Capabilities.chrome();
// capabilities.set("chromeOptions", { w3c: false });
// const driver = new Builder().withCapabilities(capabilities).build();

// Given("User is on saucedemo.com login page", async function () {
//   await driver.get("http://saucedemo.com/");
// });

// When("User enters {string} and {string}", async function (username, password) {
//   let userInput = driver.findElement(By.name("user-name"));
//   await userInput.sendKeys(username);
//   let pwInput = driver.findElement(By.name("password"));
//   await pwInput.sendKeys(password);
//   let submitInput = driver.findElement(By.xpath("//input[@value='LOGIN']"));
//   await submitInput.click();
// });

// Then("User should should land on inventory page", async function () {
//   let strUrl = await driver.getCurrentUrl();
//   assert.strictEqual(strUrl, "https://www.saucedemo.com/inventory.html");
// });
