const { HomepageSA, DestinationSA } = require('../pageobjects/Homepagesig')
const {Homepage}=require('../pageobjects/Exercise')
class POManager {

    constructor(page) {
        this.page=page;
        this.homeObj = new HomepageSA(this.page);
        this.exerObj=new Homepage(this.page);
    }
    getHomePage() {
        return this.homeObj;
    }
    getHomeofExecrise(){
        return this.exerObj;
    }
    getDestinationpage(newpage) {
        return new DestinationSA(newpage);
    }


}module.exports={POManager}