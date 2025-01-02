module.exports = {
  e2e: {
    baseUrl: 'https://www.saucedemo.com',
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/reports',
      overwrite: false,
      html: true,
      json: true, 
    },
    specPattern: 'cypress/integration/**/*.spec.js', 
  },
};
