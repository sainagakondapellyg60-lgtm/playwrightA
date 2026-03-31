"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.test = void 0;
// baseTest.ts
const test_1 = require("@playwright/test");
const allure = __importStar(require("allure-js-commons"));
const utility_1 = require("utility");
__exportStar(require("@playwright/test"), exports);
exports.test = test_1.test.extend({
    // Extract + clean title + tagging
    testTitle: async ({}, use, testInfo) => {
        const originalTitle = testInfo.title;
        const tags = originalTitle.match(/@[\w-]+/g) || [];
        console.log(tags);
        const cleanTitle = originalTitle.replace(/@[\w-]+/g, '').trim();
        testInfo.title = cleanTitle;
        let featureSet = false;
        let storySet = false;
        tags.forEach(tag => {
            const value = tag.replace('@', '');
            if (value === 'ui') {
                allure.label('parentSuite', 'UI');
            }
            else if (value === 'api') {
                allure.label('parentSuite', 'API');
            }
            else if (!featureSet && ['DM', 'SBP', 'BTU'].includes(value)) {
                allure.label('feature', value.toUpperCase());
                featureSet = true;
            }
            else if (!storySet && ['button', 'checkbox', 'date', 'dropdown', 'modal', 'alert', 'ID'].includes(value)) {
                allure.label('story', value.toUpperCase());
                storySet = true;
            }
        });
        allure.label('owner', 'Sai');
        if (tags.includes('@smoke')) {
            allure.label('severity', 'critical');
        }
        else {
            allure.label('severity', 'normal');
        }
        if (!featureSet) {
            allure.label('feature', 'GENERAL');
        }
        if (!storySet) {
            allure.label('story', 'default');
        }
        await use(cleanTitle);
    },
    log: async ({ testTitle }, use) => {
        await use((0, utility_1.createTestLogger)(testTitle));
    },
    // Inject UIActions (fixture-driven)
    actions: async ({ page, log }, use) => {
        await use(new utility_1.UIActions(page, log));
    },
    dialog: async ({ page }, use) => {
        await use(new utility_1.dialogHandler(page));
    },
});
