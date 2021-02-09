import WishListContainerComponent from '../components/container/wishListContainerComponent'

/**
 * wishlist page has such as 
 *  -> Left Nav //ToDo
 *  -> Wish list items container
 *  -> mood board //ToDo
 *  -> 
 */
class WishListPage {
    get wishListContainerComponet(): typeof WishListContainerComponent { return WishListContainerComponent }
}

export default new WishListPage();