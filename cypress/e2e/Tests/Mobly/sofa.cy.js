import Test_logic_for_Mobly from "../../PageObject/Mobly/test_logic_for_Mobly"
const { assert, expect } = require("chai")


describe('Sofa Test For Mobly', () => {
      const test_logic = new Test_logic_for_Mobly;
      it('1 item test', () => {
        cy.visit('https://www.mobly.com.br/poltrona-dixe-tresse-ii-bege-623158.html');
      cy.request('https://www.mobly.com.br/poltrona-dixe-tresse-ii-bege-623158.html').then( ({ status }) => {
        expect(status).to.eq(200)
      });

       test_logic.cookieAccept();

        cy.scrollTo(0, 650);

        if (cy.get('#mobly_frame').should('be.visible')) {
          cy.log('All ok')
      } else (cy.log('Cant create'));

      })

    })