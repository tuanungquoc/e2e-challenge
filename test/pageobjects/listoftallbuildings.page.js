import Page from "./page";
import TallestBuildingList from "./tallestbuildinglist.page";

import config from "../pageconfig/config.json";

class ListOfTallBuildingPage extends Page {
    constructor() {
        super(config);
    }
    // Elements go here
    get tallestBuildingsTable() {
        return TallestBuildingList;
    }
}

export default new ListOfTallBuildingPage();
