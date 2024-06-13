const BasePage = require('./BasePage');

class RegistrationPage extends BasePage {
    constructor(page) {
        super(page);
        this.registerButton = 'button.register';
        this.emailForLogin = '';
        // Add other selectors for registration form fields
    }

    async registerUser(user) {
        console.log('registerUser USER =>', user);
        await this.page.getByText('Komfort', { exact: true }).click();
        await this.page.getByRole('button', { name: 'Alle auswählen & bestätigen' }).click();
        await this.page.getByTestId('salutation').selectOption('male');      
        await this.page.fill('input#firstName', user.firstName);
        await this.page.fill('input#lastName', user.lastName);
        await this.page.fill('input#email', user.email);
        await this.page.fill('input#password', user.password);
        await this.page.getByTestId('password2Input').fill('Password123!');
        await this.page.getByTestId('newsletterCheckbox').click();
        await this.page.getByTestId('agbCheckbox').click();
        await this.page.getByTestId('register-submit').click();
        return user;
    }
}

module.exports = RegistrationPage;
