import ListOfTallestBuildingPage from "../pageobjects/listoftallbuildings.page";

describe("Wikipedia list of tall buildings page", () => {
    it("verify the second tallest building and its conversion between meter and feet", () => {
        browser.url("https://en.wikipedia.org/wiki/List_of_tallest_buildings");
        ListOfTallestBuildingPage.waitPageToLoad();
        let secondTallestBuildingNameInfo = ListOfTallestBuildingPage.tallestBuildingsTable.getItemByPosition(
            2
        ).value;
        let expected = "Shanghai Tower";
        expect(secondTallestBuildingNameInfo.nameLinkText).toEqual(expected);
        let heightInMeter = Number(secondTallestBuildingNameInfo.heightInMeter);
        let heightInFeet = Number(secondTallestBuildingNameInfo.heightInFeet);
        let expectedHeightInFeet = Math.round(heightInMeter * 3.28);
        console.log(JSON.stringify(secondTallestBuildingNameInfo));
        expect(heightInFeet).toEqual(expectedHeightInFeet);
    });

    it("sort the table descending by year and verify the first result is the Empire State Building", () => {
        ListOfTallestBuildingPage.tallestBuildingsTable.sortYear();
        let firstRowValue = ListOfTallestBuildingPage.tallestBuildingsTable.getItemByPosition(
            1
        ).value;
        let expected = "Empire State Building";
        let actual = firstRowValue.nameLinkText;
        expect(actual).toEqual(expected);
    });

    it("navigate Empire State Building", () => {
        ListOfTallestBuildingPage.tallestBuildingsTable
            .getItemByPosition(1)
            .linkName.click();
        let expected = "https://en.wikipedia.org/wiki/Empire_State_Building";
        let actual = browser.getUrl();
        expect(actual).toEqual(expected);
    });
});
