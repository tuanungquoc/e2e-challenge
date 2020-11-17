import Page from "./page";
import config from "../pageconfig/config.json";

class FormPage extends Page {
    constructor() {
        super(config);
    }
    // Elements go here
    get searchInput() {
        return $("#searchInput");
    }
    get searchInputButton() {
        return $("#searchButton");
    }

    // Methods go here
    setSearchText(text) {
        this.searchInput.setValue(text);
    }
    search() {
        this.searchInputButton.click();
    }
}

export default new FormPage();
