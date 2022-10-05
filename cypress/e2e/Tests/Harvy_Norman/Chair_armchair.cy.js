import Test_logic from "../../PageObject/Harvy_Norman/test_logic"

describe('Test_HarvyNorman_Chair_Armchair', () => {
    const test_logic = new Test_logic;
    before ('Visit the page',()=>{
      cy.visit(Cypress.config().HN_Chair);
      if (!Cypress.config().isCookieBarEnabled) {}
    })
      it('Visiting HarvyNorman displays the correct title', () => {
        cy.visit(Cypress.config().HN_Chair);
        cy.title().should('contain', 'Roxy Armchair | Ireland');
        test_logic.cookieAccept()
        .click();
        test_logic.closecbar()
        .click();
        test_logic.ifreme()
        .should('be.visible');
      })
    })