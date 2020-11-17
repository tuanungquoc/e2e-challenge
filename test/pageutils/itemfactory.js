import AutoCompleteItem from "./autocompleteitem";
import TallestBuildingItem from "../pageobjects/tallestbuildingitem.page";
class ItemFactory {
    static getItem(containerClass, locatorTemplates, itemNumber) {
        switch (containerClass) {
            case "AutoCompleteResultList":
                return new AutoCompleteItem(locatorTemplates, itemNumber);
            case "TallestBuildingList":
                return new TallestBuildingItem(locatorTemplates, itemNumber);
        }
    }
}

export default ItemFactory;
