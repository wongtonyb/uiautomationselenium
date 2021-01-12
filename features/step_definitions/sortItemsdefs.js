// const { Given, When, Then, setDefaultTimeout } = require("@cucumber/cucumber");
// const { Builder, By, Capabilities, Key } = require("selenium-webdriver");
// const assert = require("assert");
// setDefaultTimeout(60 * 1000);

// require("chromedriver");

// // driver setup
// const capabilities = Capabilities.chrome();
// capabilities.set("chromeOptions", { w3c: false });
// const driver = new Builder().withCapabilities(capabilities).build();

// // AZ
// Given("User is on inventory page", async function () {
//   await driver.get("https://www.saucedemo.com/inventory");
// });

// When("User selects sort option Name A to Z", async function () {
//   await driver.findElement(By.className("product_sort_container")).click();
//   await driver.findElement(By.xpath("//option[@value='az']")).click();
// });

// /*
// couldn't exactly figure out how to get the list of items from promise & html code
// would have invoked a sorting algorithm on the array, and compare by assertion
// assert.equalStrict(array, array(with sorting algorithm invoked))
// */
// Then("Inventory should be sorted Alphabetically - Ascending", function () {
//   let inventory = driver.findElement(By.className("inventory_list"));
//   // console.log(inventory);
//   //   driver
//   //     .findElements(By.className("inventory_item_name"))
//   //     .then((res) => console.log(res));
//   // console.log(firstItem);
//   // console.log(firstItem.value);
// });

// // ZA
// When("User selects sort option Name Z to A", async function () {
//   await driver.findElement(By.className("product_sort_container")).click();
//   await driver.findElement(By.xpath("//option[@value='za']")).click();
// });

// Then("Inventory should be sorted Alphabetically - Descending", function () {
//   let inventory = driver.findElement(By.className("inventory_list"));
// });

// // low-high
// When("User selects sort option Price low to high", async function () {
//   await driver.findElement(By.className("product_sort_container")).click();
//   await driver.findElement(By.xpath("//option[@value='lohi']")).click();
// });

// Then("Inventory should be sorted By Price - Ascending", function () {
//   let inventory = driver.findElement(By.className("inventory_list"));
// });

// // high-low
// When("User selects sort option Price high to low", async function () {
//   await driver.findElement(By.className("product_sort_container")).click();
//   await driver.findElement(By.xpath("//option[@value='hilo']")).click();
// });

// Then("Inventory should be sorted By Price - Descending", function () {
//   let inventory = driver.findElement(By.className("inventory_list"));
// });
