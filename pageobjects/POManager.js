const { HomepageSA, DestinationSA } = require('../pageobjects/Homepagesig')
class POManager {

    constructor(page) {
        this.page=page;
        this.homeObj = new HomepageSA(this.page);
    }
    getHomePage() {
        return this.homeObj;
    }
    getDestinationpage(newpage) {
        return new DestinationSA(newpage);
    }


}module.exports={POManager}