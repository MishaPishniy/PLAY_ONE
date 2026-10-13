import { type Locator, type Page } from "@playwright/test";
export class InventoryPage {
  readonly page: Page;
  readonly title: Locator;
  readonly products: Locator;
  readonly sortSelect: Locator;
  readonly productPrices: Locator;
  readonly backpackButton: Locator;
  readonly cartLink: Locator;
  constructor(page: Page) {
    this.page = page;
    this.title = page.locator(".title");
    this.products = page.locator(".inventory_item");
    this.sortSelect = page.locator('[data-test="product-sort-container"]');
    this.productPrices = this.products.locator(".inventory_item_price");
    this.backpackButton = page.locator(
      '[data-test="add-to-cart-sauce-labs-backpack"]',
    );
    this.cartLink = page.locator(".shopping_cart_link");
  }
  async addBackpackToCart() {
    await this.backpackButton.click();
  }
  async openCart() {
    await this.cartLink.click();
  }

  async sortByPriceHighToLow() {
    await this.sortSelect.selectOption("hilo");
  }
}
