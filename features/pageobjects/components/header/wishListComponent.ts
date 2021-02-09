/**
 * this class has variables and methods specific to 
 * wish list icon present in the header of the page
 */
class WishListComponent {

    /**
     * elements declaration
     */
    get wishListElement() { return $('div[data-testid="wishlist-bubble"]') };
    get wishListCounter() { return $('span[data-testid="wishlist-counter"]') };

    /**
     * Methods declarations
     */

    viewWishList() {
        this.wishListElement.click()
    }

    /**
     * @returns number : items present in the wishlist
     */
    getWishListCounter():number{
        try{
        this.wishListCounter.waitForExist({timeout : 5000});
        }catch(error){
            return 0;    
        }
        const count: number = +this.wishListCounter.getText();
        return count;
    }

    /**
     * @returns boolean : based on the presence of the wishlist element
     */

    isDisplayed(): boolean {
        this.wishListElement.waitForExist();        
        return this.wishListElement.isDisplayed();
    }
}

export default new WishListComponent();
