const { test, expect } = require('@playwright/test');
const ShoppingPage = require('../pages/ShoppingPage');
const RegistrationPage = require('../pages/RegistrationPage');
const LoginPage = require('../pages/LoginPage');

test('Shopping scenario', async ({ page }) => {
    const shoppingPage = new ShoppingPage(page);
    const registrationPage = new RegistrationPage(page);
    const loginPage = new LoginPage(page);
    const user = {
        firstName: 'John',
        lastName: 'Doe',
        email: `test${Date.now()}@example.com`,
        password: 'Password123!'
    };

    await registrationPage.navigate('https://www.sofa.de/registrierung');
    await registrationPage.registerUser(user);
    await loginPage.navigate('https://www.sofa.de/login');
    await loginPage.login(user);
    await shoppingPage.selectItemsAndAddToWishlist();
    await shoppingPage.verifyWishlistAndAddToBasket();
    
});
