"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.expect = exports.test = void 0;
const baseTest_1 = require("./baseTest");
const pageobjects_uiPlayground_1 = require("pageobjects_uiPlayground");
exports.test = baseTest_1.test.extend({
    homepage: async ({ page, actions }, use) => {
        await use(new pageobjects_uiPlayground_1.HomepagePlayground(page, actions));
    },
    //
    alerts: async ({ page, actions, dialog }, use) => {
        await use(new pageobjects_uiPlayground_1.alertsPage(page, actions, dialog));
    },
    dynamicId: async ({ page, actions }, use) => {
        await use(new pageobjects_uiPlayground_1.DynamicID(page, actions));
    },
    clientsidedelay: async ({ page, actions }, use) => {
        await use(new pageobjects_uiPlayground_1.clientSideDelayPage(page, actions));
    },
    pages: async ({ homepage, alerts, dynamicId, clientsidedelay }, use) => {
        await use({ homepage, alerts, dynamicId, clientsidedelay });
    }
});
var baseTest_2 = require("./baseTest");
Object.defineProperty(exports, "expect", { enumerable: true, get: function () { return baseTest_2.expect; } });
