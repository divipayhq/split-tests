import { defineConfig } from 'cypress'

export default defineConfig({
  defaultCommandTimeout: 15000,
  video: false,
  reporter: 'junit',
  reporterOptions: {
    mochaFile: 'results/junit-[hash].xml',
    toConsole: false,
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    specPattern: 'cypress/e2e/*.cy.js',
  },
})
