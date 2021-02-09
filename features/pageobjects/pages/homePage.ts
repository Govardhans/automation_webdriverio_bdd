
import SearchComponent from '../components/header/searchComponent'
import ProductComponent from '../components/container/productComponent'
import WishListComponent from '../components/header/wishListComponent'

/**
 * Homepage has different components suchas
 *  -> Header
 *      -> search component
 *      -> wish list icon
 *  -> product details component  
 *  -> Left nav //ToDo
 *  -> breadcrumbs //ToDo
 *  -> footer
 */
class HomePage {
    /**
     * components declaration
     */
    get SearchComponent() : typeof SearchComponent { return SearchComponent };
    get ProductComponent() : typeof ProductComponent {return ProductComponent};
    get WishListComponent() : typeof WishListComponent {return WishListComponent};
}

export default new HomePage();