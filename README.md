# UI Automation Testing

---

Note\* This was my first time using Cucumber and Selenium Webdriver for UI Automation Testing. Thus, the setup and design patterns may not be at its most efficient formmat

## Installation

1. Run `npm install` to install all necessary dependencies

Additional VSCode Plugins such as ESLint, Prettier, and Cucumber (Gherkin) Full Support were used, but may not be in the dependencies

## Testing

1. All the tests can be run, and will be ran all at once with `npm test`. However, I do not suggest this, as there were a lot of collision errors with each test case (probably due to the way I decided to setup the Selenium Webdriver)

2. Instead I recommend running each feature one at a time. To do so, first find the corresponding step_definitions file and uncomment the entire file.

i.e.

Open logindefs.js, the select all and uncomment

```sh
Ctrl + 'a'
Ctrl + '/'
```

Then open a terminal and run the corresponding features file

```sh
npm test features/login.feature
```

Remember to comment out the step_definitions file before moving on to another features file.

Again, I apologize for this lack of efficiency due to my inexperience with Cucumber and Selenium
