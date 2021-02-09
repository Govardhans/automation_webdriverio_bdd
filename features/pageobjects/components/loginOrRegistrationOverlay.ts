
/**
 * This class has variables and methods which are specific to 
 * login or registration overlay
 */
class LoginOrRegistrationOverlay {

    /**
     * Elements declaration
     */
    get overLayElement() { return $('div[data-testid="login_and_register"]') }
    get emailField() { return $('input[data-testid="long-register-email-field"]') }
    get passwordField() { return $('input[data-testid="long-register-password-field"]') };
    get newsLetterSubCheckBox() { return $('[name="isNewsletterSubscribed"]') };
    get termsAcceptedCheckBox() { return $('[name = "isTermsAccepted"]') };
    get submitBtn() { return $('button[data-testid="login_reg_submit_btn"]') };
    get loginOrRegisterToggleBtn() { return $('button[data-testid="login_reg_switch_btn"]') };
    get forgotPasswordLink() { return $('div[class^="ForgotPasswordLink"]') };
    get loginErrorElement() { return $('span[class^="StyledFormError"] font font') };

    /**
     * methods declaration
     */

    switchToLoginForm() {
        if (this.isRegisterScreenDisplayed()) {            
            this.loginOrRegisterToggleBtn.waitForClickable();
            this.loginOrRegisterToggleBtn.click();
        }
    }

    /**
     * 
     * @param userName 
     * @param password 
     */
    login(userName:string, password:string){        
        this.forgotPasswordLink.waitForExist({timeout : 5000});
        this.emailField.setValue(userName);
        this.passwordField.setValue(password);
        this.submitBtn.click();
    }

    /**
     * @returns boolean based on terms accetped checkbox's present on login in screen
     */
    isRegisterScreenDisplayed(): boolean {
        return this.termsAcceptedCheckBox.isDisplayed();
    }

    /**
     * @returns boolean based on email field's visibility
     */
    isDisplayed(): boolean {
        this.emailField.waitForExist({ timeout: 5000 });
        return this.emailField.isDisplayed();
    }
}

export default new LoginOrRegistrationOverlay();