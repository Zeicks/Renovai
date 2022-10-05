import Test_logic from "../../PageObject/Harvy_Norman/test_logic"
describe('Test_HarvyNorman_HomeDecor_OnWall_ArtPrint', () => {
  const test_logic = new Test_logic;
    before ('Vist the page',()=>{
      cy.visit(Cypress.config().HN_HomeDecor);
      if (!Cypress.config().isCookieBarEnabled){}
    })
      it('Visiting HarvyNorman displays the correct title', () => {
        cy.visit(Cypress.config().HN_HomeDecor);
        cy.title().should('contain', 'Zodiac');
        test_logic.cookieAccept()
        .click();
        test_logic.closecbar()
        .click();
        test_logic.ifreme()
        .should('be.visible');
      })
    })
   