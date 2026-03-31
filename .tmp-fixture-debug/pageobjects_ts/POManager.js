"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.POManager = void 0;
const Homepagesig_1 = require("../pageobjects_ts/Homepagesig");
const Exercise_1 = require("../pageobjects_ts/Exercise");
class POManager {
    constructor(page) {
        this.page = page;
        this.homeObj = new Homepagesig_1.HomepageSA(this.page);
        this.exerObj = new Exercise_1.Homepage(this.page);
    }
    getHomePage() {
        return this.homeObj;
    }
    getHomeofExecrise() {
        return this.exerObj;
    }
    getDestinationpage(newpage) {
        return new Homepagesig_1.DestinationSA(newpage);
    }
}
exports.POManager = POManager;
module.exports = { POManager };
