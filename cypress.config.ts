const { defineConfig } = require('cypress');

export default defineConfig({
  e2e: {
    baseUrl: 'https://api.hubapi.com',
  },
  env: {
    HUBSPOT_ACCESS_TOKEN: 'pat-na1-a6ce8109-49b6-489c-ad7f-a23c7f90de2d', 
  },
});
