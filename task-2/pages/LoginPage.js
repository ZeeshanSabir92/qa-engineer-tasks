const BasePage = require('./BasePage');

class LoginPage extends BasePage {
    constructor(page) {
        super(page);
        this.emailInput = 'input#email';
        this.passwordInput = 'input#password';
        this.loginButton = 'button.login';
    }

    async login(user) {
        console.log('USER LOGON', user);
//      await this.page.fill(this.emailInput, user.email);
//      await this.page.fill(this.passwordInput, user.password);
//      await this.page.click(this.loginButton);
        await this.page.getByTestId('loginEmailInput').fill(user.email);
        await this.page.getByTestId('loginPasswordInput').fill(user.password);
        await this.page.getByTestId('login-submit').click();
}
}

module.exports = LoginPage;
