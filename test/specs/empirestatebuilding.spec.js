import EmpireStateBuildingPage from "../pageobjects/empirestatebuilding.page";

describe("Wikipedia empire state building page", () => {
    it("verify  the link next to 'Preceded by' would take you to the page for the Chrysler Building", () => {
        browser.url("https://en.wikipedia.org/wiki/Empire_State_Building");
        let expected = "/wiki/Chrysler_Building";
        let actual = EmpireStateBuildingPage.precededByLink.getAttribute(
            "href"
        );
        expect(actual).toEqual(expected);
    });

    it("verify the link next to 'Surpassed by' would take you to the page for the World Trade Center (North tower)", () => {
        let expected = encodeURI("/wiki/World_Trade_Center_(1973–2001)");
        let actual = EmpireStateBuildingPage.surpassedByLink.getAttribute(
            "href"
        );
        expect(actual).toEqual(expected);
    });

    it(`Each photo thumbnail on the page should have an icon in the caption below it (<div class="magnify">).`, () => {
        let thumbnailList = EmpireStateBuildingPage.allThumbnailIcons;
        const expectedTagName = "div";
        const expectedClassName = "magnify";
        for (let i = 0; i < thumbnailList.length; i++) {
            let actualTagName = thumbnailList[i].getTagName();
            let actualClassName = thumbnailList[i].getAttribute("class");
            expect(actualTagName).toEqual(expectedTagName);
            expect(actualClassName).toEqual(expectedClassName);
        }
    });
});
