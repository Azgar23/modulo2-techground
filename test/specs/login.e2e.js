const LoginPage = require('../pageobjects/login.page');
const NavigationPage = require('../pageobjects/navigation.page');
const DashboardPage = require ('../pageobjects/dashboard.page');
const waits = require ('../helpers/waits');
const articleDetailPage = require ('../pageobjects/articleDetails.page');

describe('My Login application', () => {
    it('should login with valid credentials', () => {
        //browser.setTimeout({'pageLoad': 1000});
        //browser.setTimeout({'implicit': 50});
        //NavigationPage.open();
        NavigationPage.goToSignIn();
        //browser.pause(3000);
        LoginPage.login('alex.gonzalez@ucreativa.com','Test1234');
        waits.waitUntilElementIsDisplayed(DashboardPage.getNoArticulesLabel());
        expect(browser).toHaveUrl("https://demo.realworld.io/#/");
        expect(DashboardPage.getNoArticulesLabel()).toBeDisplayed();
        
        //expect(DashboardPage.getYourFeedTap().toBeFocused());
        //expect(browser).toHaveURLContaining("login")
        //expect(browser).toHaveTitle("Home - Conduit")
        //expect(browser).toHaveTitleContaining("Home")
        //browser.pause(2000);
    });

    it('should your feed be active by default', ()=>{
        //browser.pause(2000);
        //expect(DashboardPage.getNoArticulesLabel()).toBeDisplayed();
        expect(DashboardPage.getYourFeedTap()).toHaveAttribute('class', 'nav-link active');
    })

    it('should open the global tab', ()=>{

        DashboardPage.getGlobalFeedTap().click();
        //browser.pause(2000);
        //console.log('Hola GetSize '+ DashboardPage.getArticulesList().getSize());
        //browser.setTimeout({'implicit': 10000});
        waits.waitUntilElementIsDisplayed(DashboardPage.getGlobalFeedTap());
        expect(DashboardPage.getGlobalFeedTap()).toHaveAttribute('class', 'nav-link active');
        expect(DashboardPage.getGlobalFeedTap()).toHaveClass('active', {message:'No active Tap!'});
        expect(DashboardPage.getArticulesList()).toBeElementsArrayOfSize({ eq: 10 });
    })
    it('should open read more', ()=>{

        DashboardPage.getReadMoreAnchor().click();
        browser.pause(5000);
    })    
    it('should add a description', ()=>{

        articleDetailPage.getDescriptionTextBox().setValue('Hola');
        browser.pause(5000);
        
    })


});

