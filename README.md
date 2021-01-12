# UI Automation Testing

---

Note\* This was my first time using Cucumber and Selenium Webdriver for UI Automation Testing. Thus, the setup and design patterns may not be at its most efficient formmat

## Installation

1. Run `npm install` to install all necessary dependencies

Additional VSCode Plugins such as ESLint, Prettier, and Cucumber (Gherkin) Full Support were used, but may not be in the dependencies

## Testing

1. All the tests can be run, and will be ran all at once with `npm test`. However, I do not recommend this, as there were a lot of collision errors with each test case when ran all together (probably due to the way I decided to setup the Selenium Webdriver)

2. Instead I suggest running each feature one at a time. To do so, first find the corresponding step_definitions file and uncomment the entire file.

i.e.

Open logindefs.js, then select all and uncomment

```sh
Ctrl + 'a'
Ctrl + '/'
```

Then open a terminal and run the corresponding features file

```sh
npm test features/login.feature
```

Remember to comment out the step_definitions file before moving on to another features file.

## Feature / Step Definitions Files

There are a total of 4 Feature files and 4 corresponding Step Definition Files

```sh
login.feature     | logindefs.js
sortItems.feature | sortItemsdefs.js
addRemove.feature | addRemovedefs.js
checkout.feature  | checkoutdefs.js
```

##

Again, I apologize for the inefficiency due to my lack of experience with Cucumber and Selenium
