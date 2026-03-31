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
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = __importStar(require("dotenv"));
//import 'ts-node/register';
const env = (process.env.TEST_ENV || 'qa').trim();
dotenv.config({
    path: `.env.${env}`
});
console.log(`Loaded environment: ${env}`);
console.log(`Base URL: ${process.env.TEST_URL}` + '\n' + `log Level:${process.env.lOG_LEVEL}`);
const config = ({
    testDir: './tests',
    retries: 1,
    workers: 3,
    //overriding default 30sec timeout by playwright
    timeout: 40 * 1000,
    //for assertions timeout
    expect: {
        timeout: 40 * 1000,
    },
    reporter: [['html'], ['line'],
        ['allure-playwright']],
    use: {
        baseURL: process.env.TEST_URL,
        browserName: process.env.BROWSER, //'chromium',//for Iphone'webkit',
        headless: false,
        launchOptions: {
            args: ['--start-maximized'],
            slowMo: 300
        },
        screenshot: 'on',
        video: 'retain-on-failure',
        ignoreHttpsErrors: 'true',
        permissions: ['geolocation'], //allowlocation in browser
        trace: 'on', //retain-on-failure, off, on
        viewport: null, // {width:720,height:720}, //for webapp window size
        //...devices['Moto G4'], //'iPhone 14'  mobil eemulation
        //run in cmd : node -e "console.log(Object.keys(require('@playwright/test').devices).filter(d => d.includes('iPhone') || d.includes('Pixel') || d.includes('Galaxy') || d.includes('Moto')).join('\n'))"
    },
});
module.exports = config;
//to run different config , create config file and run with command :
// npx playwright test tests/searchDestonationTestSA.spec.js --config playwright.config1.js --project=safari
