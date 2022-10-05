import Test_logic from "../../PageObject/Harvy_Norman/test_logic"

describe('Test_HarvyNorman_Table_SideTable_square', () => {
  const test_logic = new Test_logic;
    before ('Vist the page',()=>{
        cy.visit(Cypress.config().HN_Table);
        if (!Cypress.config().isCookieBarEnabled){}
      })
    it('Visiting HarvyNorman displays the correct title', () => {
      cy.visit(Cypress.config().HN_Table);
      cy.title().should('contain', 'Mainz Lamp Table');
      test_logic.cookieAccept()
      .click();
      test_logic.closecbar()
      .click();
      test_logic.ifreme()
      .should('be.visible');
    })
  })