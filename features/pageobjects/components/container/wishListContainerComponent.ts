/**
 * this class has variables and methods related to 
 * wishlist container present on the wishlist page
 */
class WishListContainerComponent{

    /**
     * Elements declaration
     */
    get wishListProducts() {return $$('li.blockListProduct')};
    get wishListContainers() {return $('div.wishlistContainers')}

    /**
     * removes element from the wishlist container
     * @param index 
     * 
     */
    removeProduct(index : number){
        this.wishListProducts[index].$('<button>').click();
    }

    /**
     * returns value based on the existance of the wishlistcontainer element
     */
    isDisplayed() : boolean {
        this.wishListContainers.waitForExist({timeout : 5000})
        return this.wishListContainers.isDisplayed();
    }
}

export default new WishListContainerComponent();