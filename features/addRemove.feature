Feature: Add / Remove Item to cart
    User will Add to cart, and check cart, then Remove items from card

    Scenario Outline: User Add / Remove Flow
        Given User is on inventory page
        Then User adds "<item1>"
        Then User adds "<item2>"
        Then User adds "<item3>"
        Then User clicks on cart
        Then User lands on cart page and should have contain added items
        Then User removes all items


        Examples:
            | item1               | item2                   | item3                    |
            | Sauce Labs Backpack | Sauce Labs Bolt T-Shirt | Sauce Labs Onesie        |
            | Sauce Labs Backpack | Sauce Labs Bike Light   | Sauce Labs Fleece Jacket |
