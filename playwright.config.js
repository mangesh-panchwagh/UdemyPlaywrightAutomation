// @ts-check
import { chromium, defineConfig, devices } from '@playwright/test';


/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config = ({
  testDir: './tests',
 
  timeout:30*1000,
  expect:{
    timeout:12000
  },
  reporter: 'html',
 use: {
    actionTimeout: 10 * 1000,
    navigationTimeout:30 * 1000, 
  browserName: 'chromium',
  headless : false,
  screenshot : 'on', 
 // trace: 'on'
  trace: 'on' // off,on
  },
});

module.exports = config;