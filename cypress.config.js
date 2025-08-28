module.exports = {
  projectId: 'c9ky57',
  e2e: {
    baseUrl: 'https://www.saucedemo.com',
    supportFile: 'cypress/support/e2e.js',
    fixturesFolder: 'cypress/fixtures',
    specPattern: 'cypress/e2e/**/*.spec.js',
    video: false,
    screenshotsFolder: 'cypress/screenshots',
    videosFolder: 'cypress/videos',
    pageLoadTimeout: 180000,
    defaultCommandTimeout: 10000,
    chromeWebSecurity: false,
  },
};