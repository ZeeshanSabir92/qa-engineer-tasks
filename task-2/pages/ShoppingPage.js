const BasePage = require('./BasePage');

class ShoppingPage extends BasePage {
    constructor(page) {
        super(page);
        this.categorySelector = 'selector-for-category';
        this.wishlistButton = 'button.add-to-wishlist';
        this.basketButton = 'button.add-to-basket';
    }

    async selectItemsAndAddToWishlist(itemCount) {
        // for (let i = 0; i < itemCount; i++) {
        //     await this.page.click(this.categorySelector);
        //     await this.page.click(this.wishlistButton);
        // }

        await page.getByRole('link', { name: 'Ecksofas' }).click();
        await page.getByRole('link', { name: 'smart Ecksofa grau - Flachgewebe Ibby', exact: true }).click();
        await page.locator('.wishlistIcon').click();
        await page.getByRole('link', { name: 'Wohnlandschaften' }).click();
        await page.getByRole('link', { name: 'switch Wohnlandschaft aus Mikrofaser Caro', exact: true }).click();
        await page.locator('.wishlistIcon').first().click();
        await page.getByRole('link', { name: 'Schlafsofas', exact: true }).click();
        await page.goto('https://www.sofa.de/schlafsofas?cr=header-kategorieeinstieg-schlafsofas&row=na&col=na&ht=na&st=09052024&sz=all&prop=header-kategorieeinstieg&ca=permanent');
        await page.goto('https://www.sofa.de/artikel/25400478');
        await page.locator('.wishlistIcon').click();
        await page.getByRole('link', { name: 'Einzelsofas' }).click();
        await page.goto('https://www.sofa.de/einzelsofas?cr=header-kategorieeinstieg-einzelsofas&row=na&col=na&ht=na&st=09052025&sz=all&prop=header-kategorieeinstieg&ca=permanent');
        await page.getByRole('link', { name: 'smart Sofa 2-sitzig rot - Mikrofaser Sissi', exact: true }).click();
        await page.locator('.wishlistIcon').first().click();
        await page.getByRole('link', { name: '4', exact: true }).click();
        await page.getByRole('link', { name: 'Sessel', exact: true }).click();
        await page.goto('https://www.sofa.de/sessel-hocker?cr=header-kategorieeinstieg-sessel-hocker&row=na&col=na&ht=na&st=09052026&sz=all&prop=header-kategorieeinstieg&ca=permanent');
        await page.getByRole('link', { name: 'Nordic Life Sessel-Hocker-Set INC83' }).click();
        await page.locator('.wishlistIcon').first().click();
        await page.getByRole('link', { name: '5', exact: true }).click();
        await page.locator('span').filter({ hasText: 'Wunschliste' }).click();
        await page.locator('div').filter({ hasText: 'Nordic Life Sessel-Hocker-Set INC83' }).click();
        await page.locator('div').filter({ hasText: 'meinSofa Wohnlandschaft aus Flachgewebe Veit' }).click();
        await page.locator('div').filter({ hasText: 'smart Ecksofa grau - Flachgewebe Ibby' }).click();
        await page.locator('div').filter({ hasText: 'smart Sofa 2-sitzig rot - Mikrofaser Sissi' }).click();
        await page.locator('div').filter({ hasText: 'switch Wohnlandschaft aus Mikrofaser Caro' }).click();
      
    }

    async verifyWishlistAndAddToBasket() {
        // Implementation of verification and adding to basket
    }
}

module.exports = ShoppingPage;
