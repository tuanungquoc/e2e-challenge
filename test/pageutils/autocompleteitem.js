import Item from "./item";

class AutoCompleteItem extends Item {
    constructor(locatorTemplates, itemNumber) {
        super(locatorTemplates, itemNumber);
        this.suggestResultLink = $(this.locators["suggestResultLink"]);
    }

    get suggestLink() {
        return this.suggestResultLink;
    }
}

export default AutoCompleteItem;
