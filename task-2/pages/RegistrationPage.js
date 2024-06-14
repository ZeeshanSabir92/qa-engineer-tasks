const BasePage = require('./BasePage');
const { sleep } = require('./ShoppingPage');

class RegistrationPage extends BasePage {
    constructor(page) {
        super(page);
        this.registerButton = 'button.register';
        this.comfortToggle = this.page.getByText('Komfort', { exact: true });
        this.confirmButton = this.page.getByRole('button', { name: 'Alle auswählen & bestätigen' });
        this.salutationDropdown =  this.page.getByTestId('salutation');
        this.firstNameInput = 'input#firstName';
        this.lastNameInput = 'input#lastName';
        this.emailInput = 'input#email';
        this.passwordInput = 'input#password';
        this.password2Input = this.page.getByTestId('password2Input');
        this.newsLetterCheckbox = this.page.getByTestId('newsletterCheckbox');
        this.agreeCheckbox = this.page.getByTestId('agbCheckbox');
        this.registerSubmitButton = this.page.getByTestId('register-submit');
    }

    async registerUser(user) {
        console.log('registerUser USER =>', user);
        await this.comfortToggle.click();
        await this.confirmButton.click();
        await this.salutationDropdown.selectOption('male');      
        await this.page.fill(this.firstNameInput, user.firstName);
        await this.page.fill(this.lastNameInput, user.lastName);
        await this.page.fill(this.emailInput, user.email);
        await this.page.fill(this.passwordInput, user.password);
        await this.password2Input.fill('Password123!');
        await this.newsLetterCheckbox.click();
        await this.agreeCheckbox.click();
        await this.registerSubmitButton.click();
        return user;
    }
}

module.exports = RegistrationPage;
