

/**
 * search bar specific methods and components
 */

class SearchComponent {    
   
    /**
     * web Elements
     */

    get searchField() {
        return $('input[data-testid="search-input"')
    }

    /** 
     * search string in search bar
     */

     search(str: string){
         this.searchField.setValue(str);
         browser.keys('Enter');
     }
}

export default new SearchComponent();