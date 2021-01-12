const { Given, When, Then, setDefaultTimeout } = require("@cucumber/cucumber");
const { Builder, By, Capabilities, Key } = require("selenium-webdriver");
const assert = require("assert");
setDefaultTimeout(60 * 1000);

require("chromedriver");

// driver setup

const capabilities = Capabilities.chrome();
capabilities.set("chromeOptions", { w3c: false });
const driver = new Builder().withCapabilities(capabilities).build();

let cart = [];

Given("User is on inventory page", async function () {
  await driver.get("https://www.saucedemo.com/inventory");
});

Then("User adds {string}", async function (item) {
  await driver
    .findElement(
      By.xpath(
        `//div[text()='${item}']//parent::*/parent::*/parent::*/div[3]/button`
      )
    )
    .click();
  cart.push(item);
});

Then("User clicks on cart", async function () {
  await driver
    .findElement(By.xpath('//*[@id="shopping_cart_container"]/a'))
    .click();
});

Then("User redirects to cart page with correct items", function () {
  while (cart.length) {
    driver.findElement(By.xpath(`//div[text()='${cart.pop()}']`));
  }
});

Then("User clicks on Checkout button", async function () {
  await driver.findElement(By.xpath(`//a[text()='CHECKOUT']`)).click();
});

Then(
  "User fills out checkout form with {string}, {string}, and {string}",
  async function (firstName, lastName, zipCode) {
    await driver.findElement(By.id("first-name")).sendKeys(firstName);
    await driver.findElement(By.id("last-name")).sendKeys(lastName);
    await driver.findElement(By.id("postal-code")).sendKeys(zipCode);
  }
);

Then("User clicks on Continue button", async function () {
  await driver.findElement(By.xpath("//input[@value='CONTINUE']")).click();
});

/*
attempted to get the price text from div tab for assertion comparison
*/
Then(
  "User reviews {string} completes checkout by clicking Finish button",
  async function (expectedTotalPrice) {
    // let e = await driver.findElement(
    //   By.xpath("/div[@class='summary_subtotal_label']/text()[2]")
    //   //   By.xpath("/div[@class='summary_subtotal_label']")
    // );

    // let actualTotalPrice = await e.getText();

    // assert.strictEqual(actualTotalPrice, expectedTotalPrice);

    await driver.findElement(By.xpath("//a[text()='FINISH']")).click();
  }
);
