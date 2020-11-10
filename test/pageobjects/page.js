import config from "../pageconfig/config.json";
export default class Page {
    // Global methods go here
    open(path) {
        browser.url(path);
    }

    waitPageToLoad() {
        browser.waitUntil(
            function () {
                const state = browser.execute(function () {
                    return document.readyState;
                });
                return state === "complete";
            },
            {
                timeout: config.TIMEOUT,
                timeoutMsg: "Connection timeout",
            }
        );
    }
}
