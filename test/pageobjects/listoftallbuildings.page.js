import Page from "./page";
import TallestBuildingList from "./tallestbuildinglist.page";
class ListOfTallBuildingPage extends Page {
    // Elements go here
    get tallestBuildingsTable() {
        return TallestBuildingList;
    }
}

export default new ListOfTallBuildingPage();
