const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '8cko5p',

 
  e2e: {
    
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl:'https://bajratechnologies.com/web/login'
  },
});



