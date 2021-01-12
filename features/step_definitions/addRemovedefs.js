// const { Given, When, Then, setDefaultTimeout } = require("@cucumber/cucumber");
// const { Builder, By, Capabilities, Key } = require("selenium-webdriver");
// const assert = require("assert");
// setDefaultTimeout(60 * 1000);

// require("chromedriver");

// // driver setup

// const capabilities = Capabilities.chrome();
// capabilities.set("chromeOptions", { w3c: false });
// const driver = new Builder().withCapabilities(capabilities).build();

// let cart = [];

// Given("User is on inventory page", async function () {
//   await driver.get("https://www.saucedemo.com/inventory");
// });

// Then("User adds {string}", async function (item) {
//   await driver
//     .findElement(
//       By.xpath(
//         `//div[text()='${item}']//parent::*/parent::*/parent::*/div[3]/button`
//       )
//     )
//     .click();
//   cart.push(item);
// });

// Then("User clicks on cart", async function () {
//   await driver
//     .findElement(By.xpath('//*[@id="shopping_cart_container"]/a'))
//     .click();
// });

// /*
// instead of asserting, checking that each item is on this page
// can also try grabbing value of each item, placing them into array,
// and asserting to defined cart array
// */
// Then(
//   "User lands on cart page and should have contain added items",
//   function () {
//     cart.forEach((item) => {
//       driver.findElement(By.xpath(`//div[text()='${item}']`));
//     });
//   }
// );

// Then("User removes all items", async function () {
//   while (cart.length) {
//     await driver
//       .findElement(
//         By.xpath(
//           `//div[text()='${cart.pop()}']//parent::*/parent::*/div[2]/button`
//         )
//       )
//       .click();
//   }
// });
