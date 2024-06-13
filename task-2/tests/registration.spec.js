const { test, expect } = require('@playwright/test');
const RegistrationPage = require('../pages/RegistrationPage');

test('User registration success', async ({ page }) => {
    const registrationPage = new RegistrationPage(page);
    const user = {
        firstName: 'John',
        lastName: 'Doe',
        email: `test${Date.now()}@example.com`,
        password: 'Password123!'
    };

    await registrationPage.navigate('https://www.sofa.de/registrierung');
    await registrationPage.registerUser(user);
    
    // Add assertions to verify successful registration
});
