const BasePage = require('./BasePage');
const { sleep } = require('./ShoppingPage');

class LoginPage extends BasePage {
    constructor(page) {
        super(page);
        this.emailInput = this.page.getByTestId('loginEmailInput');
        this.passwordInput = this.page.getByTestId('loginPasswordInput');
        this.loginButton = this.page.getByTestId('login-submit');
    }

    async login(user) {
        await this.emailInput.fill(user.email);
        await this.passwordInput.fill(user.password);
        await this.loginButton.click();
}
}

module.exports = LoginPage;
