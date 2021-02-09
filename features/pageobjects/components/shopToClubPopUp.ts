/**
 * This class has variables and methods specific to shop to club popup
 */
class ShopToClubPopUp {
    /**
     * Elements declaration
     */
    get popUpBackDrop() { return $('div[data-testid="popup-backdrop"]') }
    get shopToClubPopUp() { return $('div[data-testid="shop-to-club-popup-wrapper"]') }

    /**
     * methods to interact with elements
     */
    closeShopToClubPopUp() {
        this.shopToClubPopUp.waitForExist();
        //closing pop up using js executor as webdriver.io click method doesn't work
        browser.execute('document.querySelector("div[data-testid=\'popup-backdrop\']").click()');
    }
}

export default new ShopToClubPopUp();