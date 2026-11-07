// @ts-check
import { chromium, defineConfig, devices } from '@playwright/test';
import { permission } from 'node:process';


/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config = ({
  testDir: './tests',
  retries : 2,
  mode: 'parallel',
  timeout:30*1000,
  expect:{
    timeout:12000
  },
  reporter: 'html',
  projects: [
    {
       name: 'safari',
       use: {
          browserName: 'webkit',
          headless : false,
          screenshot : 'off', 
          // trace: 'on'
          trace: 'on', // off,on
          ...devices['iPad (gen 11)']
        }
    },
    {
       name: 'chrome',
       use: {
          browserName: 'chromium',
          ignoreHTTPErrors:true,
          permissions:['geolocation'],
          vide:'retain-on-failure',
          headless : false,
          screenshot : 'on', 
          // trace: 'on'
          trace: 'on', // off,on
          //viewport : {width:720, height:720}
        }
    }
     
  ]
});

module.exports = config;
