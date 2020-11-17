class Item {
    constructor(locatorTemplates, itemNumber) {
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
