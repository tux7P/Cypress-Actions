const { defineConfig } = require('cypress')
const { lighthouse, prepareAudit } = require("@cypress-audit/lighthouse");
const allureWriter = require('@shelex/cypress-allure-plugin/writer')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.tango.us',
    
    setupNodeEvents(on, config) {
      
      allureWriter(on, config)
      
      on("before:browser:launch", (browser = {}, launchOptions) => {
        prepareAudit(launchOptions);
      });
      
      on('task', {
        lighthouse: lighthouse(),
      })
      
      return null
    },
  },
})
