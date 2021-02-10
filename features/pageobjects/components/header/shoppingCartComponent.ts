
class ShoppingCartComponent{

    get shoppingCart() {return $('data-testid="one-header-icon-cart"')}

    isDisplayed() : boolean{
        this.shoppingCart.waitForExist();
        return this.shoppingCart.isDisplayed();
    }
}

export default new ShoppingCartComponent()