import loginOrRegistrationOverlay from './components/loginOrRegistrationOverlay';
import LoginOrRegistrationOverlay from './components/loginOrRegistrationOverlay';
import ShopToClubPopUp from './components/shopToClubPopUp';

/**
 * Base page class has the common methods used on all pages
 */
class BasePage {

    /**
     * Elements declaration     
     */
    get acceptCookiesBtn() { return $('[id="onetrust-accept-btn-handler"]') }

    /**
     * pages declaration
     */
    get loginOrRegistrationOverlay(): typeof loginOrRegistrationOverlay { return LoginOrRegistrationOverlay }
    get shopToClubPopUp(): typeof ShopToClubPopUp { return ShopToClubPopUp }


    /**
     * Methods to interact with elements
     */
    openHomePage() {
        browser.setWindowSize(1920, 1080);
        browser.url('');
    }

    /**
     * wait has been set to 15 sec
     * global wait has not been used..
     * Test case fails if cookies popup doesn't displays
     *  //ToDo set wait after discussing with Dev
     */
    acceptCookies() {
        this.acceptCookiesBtn.waitForExist({ timeout: 15000 });
        this.acceptCookiesBtn.click();
    }


}

export default new BasePage()