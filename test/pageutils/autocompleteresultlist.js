import Container from "./container";

const locatorTemplate1 = {
    suggestResultLink:
        ".suggestions .suggestions-results a:nth-child({item_num})",
};

class AutoCompleteResultList extends Container {
    constructor(locatorTemplate) {
        super(locatorTemplate);
    }

    get size() {
        return $$(".suggestions-results a").length;
    }
}

export default new AutoCompleteResultList(locatorTemplate1);
