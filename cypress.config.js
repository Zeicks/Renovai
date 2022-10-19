const { defineConfig } = require("cypress");
const { beforeRunHook, afterRunHook } = require('cypress-mochawesome-reporter/lib');

module.exports = defineConfig({
  HN_Chair: 'https://www.harveynorman.ie/big-sale/roxy-armchair.html',
  HN_HomeDecor: 'https://www.harveynorman.ie/homeware/home-accessories/pictures-wall-art/zodiac-92-x-122-cm.html',
  HN_Rug: 'https://www.harveynorman.ie/homeware/rugs/all-rugs/majestic-forest-230-x-330-cm-rug.html',
  HN_Table: 'https://www.harveynorman.ie/furniture/occasional-furniture/lamp-tables/mainz-lamp-table-cream-and-brown.html',
  HN_VD: 'https://www.harveynorman.ie/virtual-designer.html?utm_source=homepage&utm_medium=header&utm_campaign=VD',

  TandW_Bad: 'https://www.templeandwebster.com.au/Leafy-Upholstered-King-Bed-Frame-NODI1086.html?refid=Renovai447-NODI1086_200379561&PiID%5B%5D=200379561',
  TandW_BedroomAccessories_Bedspread: 'https://www.templeandwebster.com.au/Queens-Cotton-Coverlet-Set-CLQT1102.html?refid=Renovai447-CLQT1102_200536374&PiID%5B%5D=200536374',
  TandW_BedroomAccessories_Sheets: 'https://www.templeandwebster.com.au/Wild-Flower-Spring-Bloom-Cotton-Sheet-Set-SS4340WIL-LAUE1006.html?refid=Renovai447-LAUE1006_200476626&PiID%5B%5D=200476626',
  TandW_Storage_ConsoleTable: 'https://www.templeandwebster.com.au/Boras-Console-Table-BZBOCS-TMPL1615.html?refid=Renovai447-TMPL1615_200373483&PiID%5B%5D=200373483',
  TandW_Storage_MediaUnit: 'https://www.templeandwebster.com.au/Home-Theatre-Entertainment-Unit-Platinum1800BLK-KDFU1088.html?refid=Renovai447-KDFU1088',
  TandW_Table: 'https://www.templeandwebster.com.au/Glass-Monterey-Coffee-Table-ESTA1081.html?refid=Renovai447-ESTA1081_200189385&PiID%5B%5D=200189385',


  viewportWidth: 1920,
  viewportHeight: 1080,
  defaultCommandTimeout: 10000,
  responseTimeout: 20000,
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
