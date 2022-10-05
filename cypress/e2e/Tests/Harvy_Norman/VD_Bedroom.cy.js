import Test_logic from "../../PageObject/Harvy_Norman/test_logic"

describe('Test_HarvyNorman_VD_Bedroom', () => {
  const test_logic = new Test_logic;
    before ('Vist the page',()=>{
        cy.visit(Cypress.config().HN_VD);
        if (!Cypress.config().isCookieBarEnabled){}
      })
    it('Visiting HarvyNorman displays the correct title', () => {
      cy.visit(Cypress.config().HN_VD);
      cy.title().should('contain', 'Harvey Norman Virtual Designer');
      test_logic.cookieAccept()
        .click();
      // cy.contains("Living Room").click();
    })
  })