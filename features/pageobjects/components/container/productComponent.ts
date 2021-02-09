/**
 * This class has variables and methods related to 
 * product container present on the home page
 */
class ProductComponent {

    /**
     * Element declaration
     */
    get genericProductList() { return $('div[data-testid="generic-product"]') }

    /**
     * Methods declaration
     */
    isDisplayed(): boolean {
        this.genericProductList.waitForExist();
        return this.genericProductList.isDisplayed();
    }

    addProductInWishList() {
        const wishlistIcon = this.genericProductList.$('div[data-testid="wishlist-icon"]');
        wishlistIcon.click();
    }
}

export default new ProductComponent();