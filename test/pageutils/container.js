import ItemFactory from "./itemfactory";

class Container {
    constructor(locatorTemplates) {
        this.locatorTemplates = locatorTemplates;
    }
    getItemByPosition(itemNum) {
        let item = ItemFactory.getItem(
            this.constructor.name,
            this.locatorTemplates,
            itemNum
        );
        return item;
    }
}

export default Container;
