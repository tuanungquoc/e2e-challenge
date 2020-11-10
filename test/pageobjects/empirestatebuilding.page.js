import Page from "./page";
import config from "../pageconfig/config.json";

class EmpireStateBuilding extends Page {
    constructor() {
        super(config);
    }
    // Elements go here
    get precededByLink() {
        return $("//*[contains(text(),'Preceded by')]/following-sibling::td/a");
    }

    get surpassedByLink() {
        return $(
            "//*[contains(text(),'Surpassed by')]/following-sibling::td/a"
        );
    }

    get allThumbnailIcons() {
        return $$(
            "//*[img[@class='thumbimage']]/following-sibling::*[@class='thumbcaption']/*[1]"
        );
    }
}

export default new EmpireStateBuilding();
