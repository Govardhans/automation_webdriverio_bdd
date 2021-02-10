import { Given, When, Then } from 'cucumber';

import WishListPage from '../pageobjects/pages/wishListPage'
import HomePage from '../pageobjects/pages/furniturePage';

/**
 * This launches the url setup in 
 * once url is launch it accepts the cookies
 */
Given(/^I am on the WestwingNow home page$/, () => {
    HomePage.openHomePage();
    HomePage.acceptCookies();    
})

/**
 * Search component on Homepage accepts string as parameter to search on website
 */
When(/^I search for "(.+)"$/, (searchStr) => {
    HomePage.searchComponent.search(searchStr)
})

/**
 * product listing component is part of home page
 * It test if search product has atleast one result
 * 
 * test fails if there are no results
 */
Then(/^I should see product listing page with a list of products$/, () => {
    HomePage.shopToClubPopUp.closeShopToClubPopUp();    
    expect(HomePage.productComponent.isDisplayed()).toEqual(true);

})

/**
 * productComponent is a part of Homepage 
 * add product in wishlist wait until Heart icon is displayed along with the product description
 */
When(/^I click on wishlist icon of the first found product$/, () => {
    HomePage.productComponent.addProductInWishList();
})

/**
 * Log or registration overlay can occure on any page 
 * hence its been added to BasePage
 */
Then(/^I should see the login\/registration overlay$/, () => {    
    expect(HomePage.loginOrRegistrationOverlay.isDisplayed()).toEqual(true);
})

/**
 * Log or registration overlay can occure on any page 
 * hence its been added to BasePage
 */
When(/^I switch to login form of the overlay$/, () => {
    HomePage.loginOrRegistrationOverlay.switchToLoginForm();    
})

/**
 * 
 */
When(/^I login with (.+) and (.+)$/, (username, password) => {
    HomePage.loginOrRegistrationOverlay.login(username, password);
});

/**
 * once item been added to wishlist, wishlist count is read and compared
 */
Then(/^the product should be added to the wishlist$/, () => {
    const itemsInWishList : number = HomePage.wishListComponent.getWishListCounter();
    expect(itemsInWishList).toBeGreaterThanOrEqual(1);
})

/**
 * navigation between home page and wishlist page is done by 
 * clicking on wishlist bubble icon present in the right top
 */
When(/^I go to the wishlist page$/, () => {
    HomePage.wishListComponent.viewWishList();
    expect(WishListPage.wishListContainerComponet.isDisplayed()).toEqual(true);
})

/**
 * index of product is hardcoded here assuming that recent added product will
 * be at zero'th index 
 */
Then(/^I delete the product from my wishlist$/, () => {
    WishListPage.wishListContainerComponet.removeProduct(0);    
}) 

When(/^close browser$/, ()=>{
    // browser.reloadSession();
    // browser.deleteAllCookies();
})
