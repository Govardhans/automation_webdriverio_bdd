@wishlist
Feature: Westwingnow wish list feature

  @test
  Scenario Outline: TC_001 As a user, I can add and remove items to ~ from wishlist
    Given I am on the WestwingNow home page
    # env url ( https://www.westwingnow.de ) is setup in wdio.config js file
    When I search for "möbel"
    Then I should see product listing page with a list of products
    When I click on wishlist icon of the first found product
    Then I should see the login/registration overlay
    When I switch to login form of the overlay
    When I login with <username> and <password>
    Then the product should be added to the wishlist
    And I go to the wishlist page
    And I delete the product from my wishlist
    
    Examples:
      | username            | password     |
      | gov.sanap@gmail.com | Password@121 |

      # In real env username password will be shared at the runtime using env variables or 
      # can be setup via TravisCI or CircleCI
