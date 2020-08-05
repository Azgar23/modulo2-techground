const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class DashboardPage extends Page {
    /**
     * define selectors using getter methods
     */
    get noArticulesLabel () { return $('div=No articles are here... yet.') };
    get yourFeedTap(){ return $('.nav-link=Your Feed')};
    get globalFeedTap(){ return $('.nav-link=Global Feed')};
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    getNoArticulesLabel(){
        return this.noArticulesLabel;
    }

    getYourFeedTap(){
        return this.yourFeedTap;
    }

    getGlobalFeedTap(){
        return this.globalFeedTap;
    }
    /**
     * overwrite specifc options to adapt it to page object
     */

}

module.exports = new DashboardPage();
