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

        // assertion to verify successful registration
        await page.getByRole('link', { name: 'John Doe' }).click();
        await page.getByRole('link', { name: 'Deine Kundendaten' }).click();
        await page.getByText('Details anzeigen').nth(1).click();
        const loggedInEmail = await page.getByText(user.email);
        console.log('loggedInEmail '+ loggedInEmail);
        await expect(loggedInEmail).toBeVisible();
        await page.getByRole('link', { name: 'Abmelden' }).click();
    });
