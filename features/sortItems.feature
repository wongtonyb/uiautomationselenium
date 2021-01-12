Feature: Sorting Inventory

    Background: Load up inventory page
        Given User is on inventory page

    Scenario: Sort Alphabetically Ascending
        When User selects sort option Name A to Z
        Then Inventory should be sorted Alphabetically - Ascending

    Scenario: Sort Alphabetically Ascending
        When User selects sort option Name Z to A
        Then Inventory should be sorted Alphabetically - Descending

    Scenario: Sort By Price Ascending
        When User selects sort option Price low to high
        Then Inventory should be sorted By Price - Ascending

    Scenario: Sort By Price Decending
        When User selects sort option Price high to low
        Then Inventory should be sorted By Price - Descending