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
   retries : 2,
  workers : 2,
  //overriding default 30sec timeout by playwright
  timeout: 50*1000,
  //for assertions timeout
  expect:{
 timeout:3*1000,   
  },
reporter: 'html',
projects: [
  {
name : 'firefox',
use: {
   browserName: 'firefox',
   headless : false,
    launchOptions: {
      slowMo: 300
    },
   screenshot : 'on', 
   trace : 'retain-on-failure',//off/on
     }
    },
    {
      
name : 'Chrome execution',
use: {
   browserName: 'chromium',
   headless : false,
    launchOptions: {
      slowMo: 300
    },
   screenshot : 'on', 
   trace : 'retain-on-failure',//off/on
     }
  }
]


});

module.exports= config