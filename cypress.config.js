const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    baseUrl: 'https://monoxatoys.com'
  }
});

// export default defineConfig({
//   projectId: 'cj5wpgcd', // <-- Твой ID
//   // другие настройки
// });
