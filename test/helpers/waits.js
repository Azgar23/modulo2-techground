class waits{

    waitUntilElementIsDisplayed(element){
        browser.waitUntil(
            () => element.isDisplayed(),
        {
            timeout: 100000,
            timeoutMsg: element + 'Element was not found in 10s'
        }
        );
    }
}

module.exports = new waits();