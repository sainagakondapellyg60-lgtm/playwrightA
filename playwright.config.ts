// @ts-check
import { chromium, defineConfig, devices } from '@playwright/test';
import { trace } from 'console';
import  * as dotenv from 'dotenv';
//import 'ts-node/register';

const env = (process.env.TEST_ENV || 'qa').trim();

dotenv.config({
  path: `.env.${env}`
});

console.log(`Loaded environment: ${env}`);
console.log(`Base URL: ${process.env.TEST_URL}`+'\n'+`log Level:${process.env.lOG_LEVEL}`);


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
    trace: 'on',//retain-on-failure, off, on
    viewport: null, // {width:720,height:720}, //for webapp window size
    //...devices['Moto G4'], //'iPhone 14'  mobil eemulation
    //run in cmd : node -e "console.log(Object.keys(require('@playwright/test').devices).filter(d => d.includes('iPhone') || d.includes('Pixel') || d.includes('Galaxy') || d.includes('Moto')).join('\n'))"

  },

});

module.exports = config;

//to run different config , create config file and run with command :
// npx playwright test tests/searchDestonationTestSA.spec.js --config playwright.config1.js --project=safari
