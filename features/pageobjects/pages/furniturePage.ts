
import ProductComponent from '../components/container/productComponent'
import BasePage from '../basePage'

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
class HomePage extends BasePage {
    /**
     * components declaration
     */
    get productComponent() : typeof ProductComponent {return ProductComponent};
    
    
}

export default new HomePage();