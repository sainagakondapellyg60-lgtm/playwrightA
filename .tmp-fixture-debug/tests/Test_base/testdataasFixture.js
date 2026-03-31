"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customtest = void 0;
const test_1 = require("@playwright/test");
;
exports.customtest = test_1.test.extend({
    testDataforPlan: {
        OriginCity: "France",
        DestinationCity: "New York"
    }
});
