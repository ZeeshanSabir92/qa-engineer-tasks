const BasePage = require('./BasePage');

class ShoppingPage extends BasePage {
    constructor(page) {
        super(page);
        this.category1 = this.page.getByRole('link', { name: 'Ecksofas' });
        this.category2 = this.page.getByRole('link', { name: 'Wohnlandschaften' });
        this.category3 = this.page.getByRole('link', { name: 'Schlafsofas', exact: true });
        this.category4 = this.page.getByRole('link', { name: 'Einzelsofas' });
        this.category5 = this.page.getByRole('link', { name: 'Sessel', exact: true });
        this.item1 = this.page.getByRole('link', { name: 'smart Ecksofa grau - Flachgewebe Ibby', exact: true });
        this.item2 = this.page.getByRole('link', { name: 'switch Wohnlandschaft aus Mikrofaser Caro', exact: true });
        this.item3 = this.page.getByRole('link', { name: 'Ecksofa Frieda' });
        this.item4 = this.page.getByRole('link', { name: 'smart Sofa 2-sitzig rot - Mikrofaser Sissi', exact: true });
        this.item5 = this.page.getByRole('link', { name: 'Nordic Life Sessel-Hocker-Set INC83' });
        this.wishlistIcon = this.page.locator('.wishlistIcon');
        this.basketButton = this.page.getByRole('button', { name: 'Alle Artikel in den Warenkorb' });
    }

    async selectItemsAndAddToWishlist() {

        //1st Item to Wishlist
        await sleep(3000);
        await this.category1.click();
        await this.item1.click();
        await sleep(3000);
        await this.wishlistIcon.click();

        //2nd Item to Wishlist
        await this.category2.click();
        await this.item2.click();
        await sleep(3000);
        await this.wishlistIcon.first().click();

        //3rd Item to Wishlist
        await this.category3.click();
        await this.item3.click();
        await sleep(3000);
        await this.wishlistIcon.click();

        //4th Item to Wishlist
        await this.category4.click();
        await this.item4.click();
        await sleep(3000);
        await this.page.locator('.wishlistIcon').first().click();

        //5th Item to Wishlist
        await this.category5.click();
        await this.item5.click();
        await sleep(3000);
        await this.page.locator('.wishlistIcon').first().click();
    }

    async verifyWishlistAndAddToBasket() {
        // Implementation of verification and adding to basket
        await sleep(3000);

        //WishList Button Selection when 5 Items in WishList
        await this.page.getByText('Wunschliste5Artikel').click();
        await this.page.locator('span').filter({ hasText: 'Wunschliste' }).click();

        //Verifying Each Item in WishList
        // await this.page.locator('div').filter({ hasText: 'Nordic Life Sessel-Hocker-Set INC83' }).click();
        // await this.page.locator('div').filter({ hasText: 'meinSofa Wohnlandschaft aus Flachgewebe Veit' }).click();
        // await this.page.locator('div').filter({ hasText: 'smart Ecksofa grau - Flachgewebe Ibby' }).click();
        // await this.page.locator('div').filter({ hasText: 'smart Sofa 2-sitzig rot - Mikrofaser Sissi' }).click();
        // await this.page.locator('div').filter({ hasText: 'switch Wohnlandschaft aus Mikrofaser Caro' }).click();

        //Cart Button Selection when nothing in Cart
        await this.page.getByText('Warenkorb0Artikel').click();
        sleep(3000);

        //WishList Button Selection when 5 Items in WishList
        await this.page.getByText('Wunschliste5Artikel').click();  
        sleep(3000);

        //Add All 5 WishList Items to Cart in a Single Go
        //await this.basketButton.click(); //Unable to Click as this Button remains disabled just during automation script execution
        sleep(3000);
    }
}

module.exports = ShoppingPage;

export const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}