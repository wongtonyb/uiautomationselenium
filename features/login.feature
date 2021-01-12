Feature: Performing a login
    Logging into saucedemo.com website

    Background: Load up saucedemo site
        Given User is on saucedemo.com login page

    Scenario Outline: Login with acceptable username and password combinations
        When User enters "<username>" and "<password>"
        Then User should should land on inventory page

        Examples:
            | username                | password     |
            | standard_user           | secret_sauce |
            | problem_user            | secret_sauce |
            | performance_glitch_user | secret_sauce |