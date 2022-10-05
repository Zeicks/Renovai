import SelectorsForTandW from "../../PageObject/Temple_and_Webster"
describe('Test_Temple_Webster_Table_CoffeeTable_Round', () => {
  const selectorsForTandW = new SelectorsForTandW;
    before ('Visit the page',()=>{
        cy.visit(Cypress.config().TandW_Table);
        if (!Cypress.config().isCookieBarEnabled) {}
      })
    it('Visiting Temple_Webster displays the correct title', () => {
      cy.visit(Cypress.config().TandW_Table);
      cy.title().should('contain', 'Estudio Furniture Monterey');
      selectorsForTandW.iframe().should('be.visible');
    })
  })