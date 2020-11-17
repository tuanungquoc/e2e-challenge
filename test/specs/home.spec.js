import HomePage from "../pageobjects/home.page";
import Autocompleteresultlist from "../pageutils/autocompleteresultlist";

describe("Wikipedia home page", () => {
    it("should redirect from en.wikipedia.org to https://en.wikipedia.org/wiki/Main_Page", () => {
        browser.url("https://en.wikipedia.org");

        const expected = "https://en.wikipedia.org/wiki/Main_Page";
        const value = browser.getUrl();
        expect(value).toEqual(expected);
    });

    it("should allow the user to search and display results", () => {
        HomePage.setSearchText("world's tallest building");
        //verify the auto suggestion result containing the above list
        let autoSuggestionSize = Autocompleteresultlist.size;
        for (let i = 0; i < autoSuggestionSize; i++) {
            let suggestionText = Autocompleteresultlist.getItemByPosition(i + 1)
                .suggestLink.getText()
                .toLowerCase();
            expect(suggestionText.includes(`world's tallest building`)).toEqual(
                true
            );
        }
    });

    it("navigate to List of tallest buildings page'", () => {
        Autocompleteresultlist.getItemByPosition(1).suggestLink.click();
        const expected =
            "https://en.wikipedia.org/wiki/List_of_tallest_buildings";
        const value = browser.getUrl();
        expect(value).toEqual(expected);
    });
});
