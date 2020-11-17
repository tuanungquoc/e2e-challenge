import Item from "../pageutils/item";

class TallestBuildingItem extends Item {
    constructor(locatorTemplates, itemNumber) {
        super(locatorTemplates, itemNumber);
        this.nameLink = $(this.locators["nameLink"]);
        this.heightInMeter = $(this.locators["heightInMeter"]);
        this.heightInFeet = $(this.locators["heightInFeet"]);
    }

    get linkName() {
        return this.nameLink;
    }

    get value() {
        let value = {};
        value.nameLinkText = this.nameLink.getText();
        value.heightInMeter = Number(
            this.heightInMeter.getText().replace(",", "")
        );
        value.heightInFeet = Number(
            this.heightInFeet.getText().replace(",", "")
        );
        return value;
    }
}

export default TallestBuildingItem;
