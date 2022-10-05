import SelectorsForTandW from "../../PageObject/Temple_and_Webster"
describe('Test_Temple_Webster_Storage_Cabinet_ConsoleTable', () => {
  const selectorsForTandW = new SelectorsForTandW;
    before ('Vist the page',()=>{
        cy.visit(Cypress.config().TandW_Storagenpm);
        if (!Cypress.config().isCookieBarEnabled){}
      })
    it('Visiting Temple_Webster displays the correct title', () => {
      cy.visit(Cypress.config().TandW_Storagenpm);
      cy.title().should('contain', 'Temple & Webster Boras');
      selectorsForTandW.iframe().should('be.visible');
    })
  })