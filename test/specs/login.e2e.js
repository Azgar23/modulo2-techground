const navigationPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/navigation.page');

describe('My Login application', () => {
    it('should login with valid credentials', () => {
        navigationPage.open();
        navigationPage.goToSingIn();
        console.log(navigationPage.getConduitText());
        browser.pause();
    });
});

