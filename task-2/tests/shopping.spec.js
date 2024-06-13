const { test, expect } = require('@playwright/test');
const ShoppingPage = require('../pages/ShoppingPage');
const LoginPage = require('../pages/LoginPage');

test('Shopping scenario', async ({ page }) => {
    const shoppingPage = new ShoppingPage(page);
    const loginPage = new LoginPage(page);
    const user = {
        email: 'test@example.com',
        password: 'Password123!'
    };

    await loginPage.navigate('https://www.sofa.de/login');
    await loginPage.login(user);

    await shoppingPage.navigate('https://www.sofa.de/category');
    await shoppingPage.selectItemsAndAddToWishlist(5);
    await shoppingPage.verifyWishlistAndAddToBasket();
    
    // Add assertions to verify wishlist and basket contents
});
