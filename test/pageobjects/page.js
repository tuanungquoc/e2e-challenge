export default class Page {
    constructor(config) {
        browser.waitUntil(function () {
            const state = browser.execute(function () {
                return document.readyState;
            });
            return state === "complete";
        }, config);
    }

    // Global methods go here
    open(path) {
        browser.url(path);
    }
}
