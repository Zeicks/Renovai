import SelectorsForTandW from "../../PageObject/Temple_and_Webster"
describe('Test_Temple_Webster_Storage_Cabinet_MediaUnit', () => {
  const selectorsForTandW = new SelectorsForTandW;
    before ('Visit the page',()=>{
        cy.visit(Cypress.config().TandW_Storage_MediaUnit);
        if (!Cypress.config().isCookieBarEnabled) {}
      })
    it('Visiting Temple_Webster displays the correct title', () => {
      cy.visit(Cypress.config().TandW_Storage_MediaUnit);
      cy.title().should('contain', 'Monument Furniture Home');
      selectorsForTandW.iframe().should('be.visible');
    })
  })