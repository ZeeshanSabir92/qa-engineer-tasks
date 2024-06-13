const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');
const RegistrationPage = require('../pages/RegistrationPage');

test('Login success', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const registrationPage = new RegistrationPage(page);
    const user = {
        firstName: 'John',
        lastName: 'Doe',
        email: `test${Date.now()}@example.com`,
        password: 'Password123!'
    };
    await registrationPage.navigate('https://www.sofa.de/registrierung');
    await registrationPage.registerUser(user);
    console.log(registrationPage.emailForLogin);
    await loginPage.navigate('https://www.sofa.de/login');
    await loginPage.login(user);
    
    // Add assertions to verify successful login
    await page.getByRole('link', { name: 'John Doe' }).click();
    await page.getByRole('link', { name: 'Deine Kundendaten' }).click();
    await page.getByText('Details anzeigen').nth(1).click();

    // Locate the element containing the email address
    const loggedInEmail = await page.getByText(user.email);
    console.log(user.email);
    await expect(loggedInEmail).toBeVisible();
    await page.getByRole('link', { name: 'Abmelden' }).click();
    await page.locator('#container_loginPassword div').click();  
});

test('Login failure', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const registrationPage = new RegistrationPage(page);
    const user = {
        firstName: 'John',
        lastName: 'Doe',
        email: `test${Date.now()}@example.com`,
        password: 'Password12333!'
    };
    await registrationPage.navigate('https://www.sofa.de/registrierung');
    await registrationPage.registerUser(user);
    console.log(registrationPage.emailForLogin);
    await loginPage.navigate('https://www.sofa.de/login');
    await loginPage.login(user);    
    // Add assertions to verify login failure
    const loginFailError = await page.getByText('Benutzername nicht gefunden oder Passwort falsch.');
    await expect(loginFailError).toBeVisible();
});
