const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    experimentalOriginDependencies: true,
    baseUrl: "https://www.expeditors.com/",
    viewportWidth: 1400,
    viewportHeight: 1200,
  },
});
