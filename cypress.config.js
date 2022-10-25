const { defineConfig } = require("cypress");
const { beforeRunHook, afterRunHook } = require('cypress-mochawesome-reporter/lib');

module.exports = defineConfig({
  HN_Chair: 'https://www.harveynorman.ie/big-sale/roxy-armchair.html',
  HN_HomeDecor: 'https://www.harveynorman.ie/homeware/home-accessories/pictures-wall-art/zodiac-92-x-122-cm.html',
  HN_Rug: 'https://www.harveynorman.ie/homeware/rugs/all-rugs/majestic-forest-230-x-330-cm-rug.html',
  HN_Table: 'https://www.harveynorman.ie/furniture/occasional-furniture/lamp-tables/mainz-lamp-table-cream-and-brown.html',
  HN_VD: 'https://www.harveynorman.ie/virtual-designer.html?utm_source=homepage&utm_medium=header&utm_campaign=VD',

  viewportWidth: 1920,
  viewportHeight: 1080,
  defaultCommandTimeout: 10000,
  responseTimeout: 30000,
  requestTimeout: 30000,
  video: true,
  chromeWebSecurity: false,


  reporter: 'cypress-mochawesome-reporter',
  e2e: {

    setupNodeEvents(on, config) {
      on('before:run', async (details) => {
        console.log('override before:run');
        await beforeRunHook(details);
      });

      on('after:run', async () => {
        console.log('override after:run');
        await afterRunHook();
      });
    },
  },

});
