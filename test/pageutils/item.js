import Page from "../pageobjects/page";

class Item extends Page {
    constructor(locatorTemplates, itemNumber) {
        super();
        this.locators = {};
        this.locatorTemplates = locatorTemplates;
        this.itemNumber = itemNumber;

        for (let key in this.locatorTemplates) {
            let template = this.locatorTemplates[key];
            this.locators[key] = template.replace("{item_num}", itemNumber);
        }
    }

    updateItemNumber(itemNumber) {
        this.itemNumber = itemNumber;

        for (let key in this.locatorTemplates) {
            let template = this.locatorTemplates[key];
            this.locators[key] = template.replace("{item_num}", itemNumber);
        }
    }
}

export default Item;
