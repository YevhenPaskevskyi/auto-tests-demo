export class InventoryPage {
    constructor(page) {
      this.page = page;
      this.title = page.locator('.title');
    }
  
    async isOpened() {
      await this.title.waitFor({ state: 'visible' });
    }
  }