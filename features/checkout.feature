Feature: Add items and Checkout

    Scenario Outline: User Add Itesm and Checkout
        Given User is on inventory page
        Then User adds "<item1>"
        Then User adds "<item2>"
        Then User clicks on cart
        Then User redirects to cart page with correct items
        Then User clicks on Checkout button
        Then User fills out checkout form with "<firstName>", "<lastName>", and "<zipCode>"
        Then User clicks on Continue button
        Then User reviews "<totalPrice>" completes checkout by clicking Finish button

        Examples:
            | item1                    | item2                   | firstName | lastName | zipCode | totalPrice |
            | Sauce Labs Backpack      | Sauce Labs Bolt T-Shirt | John      | Doe      | 11241   | 45.98      |
            | Sauce Labs Bolt T-Shirt  | Sauce Labs Bike Light   | Jane      | Kim      | 14242   | 25.98      |
            | Sauce Labs Fleece Jacket | Sauce Labs Onesie       | Sam       | Smith    | 90321   | 57.98      |

