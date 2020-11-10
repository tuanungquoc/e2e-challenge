import Container from "../pageutils/container";

const locatorTemplate1 = {
    nameLink:
        "//h2[span[@id='Tallest_buildings_in_the_world']]/following-sibling::table[@class='wikitable sortable jquery-tablesorter']/tbody/tr[{item_num}]/td[2]//a",
    heightInMeter:
        "//h2[span[@id='Tallest_buildings_in_the_world']]/following-sibling::table[@class='wikitable sortable jquery-tablesorter']/tbody/tr[{item_num}]/td[6]",
    heightInFeet:
        "//h2[span[@id='Tallest_buildings_in_the_world']]/following-sibling::table[@class='wikitable sortable jquery-tablesorter']/tbody/tr[{item_num}]/td[7]",
    toggleHeader:
        "//h2[span[@id='Tallest_buildings_in_the_world']]/following-sibling::table[@class='wikitable sortable jquery-tablesorter']/thead/tr[1]/th[{item_num}]",
};

class TallestBuildingList extends Container {
    constructor(locatorTemplate) {
        super(locatorTemplate);
    }

    get yearToggle() {
        return $(locatorTemplate1.toggleHeader.replace("{item_num}", 8));
    }

    sortYear() {
        this.yearToggle.click();
    }
}

export default new TallestBuildingList(locatorTemplate1);
