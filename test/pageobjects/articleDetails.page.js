const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class articleDetailsPage extends Page {

    get descriptionTextBox () { return $('<textarea />')};

    getDescriptionTextBox(){
        return this.descriptionTextBox;
    }

}

module.exports = new articleDetailsPage();