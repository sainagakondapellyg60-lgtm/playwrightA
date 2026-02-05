// @ts-check
import { chromium, defineConfig, devices } from '@playwright/test';
import { trace } from 'console';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config=({
  testDir: './tests',
  retries : 0,
  workers : 2,
  //overriding default 30sec timeout by playwright
  timeout: 50*1000,
  //for assertions timeout
  expect:{
 timeout:3*1000,   
  },
reporter: 'html',

use: {
   browserName: 'chromium',//for Iphone'webkit',
   headless : false,
    launchOptions: {
      args: ['--start-maximized'],
      slowMo: 300
    },
   screenshot : 'on',
   video : 'retain-on-failure',
   ignoreHttpsErrors: 'true',
   permissions:['geolocation'], //allowlocation in browser
   trace : 'on',//retain-on-failure, off, on
  viewport :null, // {width:720,height:720}, //for webapp window size
 //...devices['Moto G4'], //'iPhone 14'  mobil eemulation
//run in cmd : node -e "console.log(Object.keys(require('@playwright/test').devices).filter(d => d.includes('iPhone') || d.includes('Pixel') || d.includes('Galaxy') || d.includes('Moto')).join('\n'))"

     },


});

module.exports= config

//to run different config , create config file and run with command :
// npx playwright test tests/searchDestonationTestSA.spec.js --config playwright.config1.js --project=safari
