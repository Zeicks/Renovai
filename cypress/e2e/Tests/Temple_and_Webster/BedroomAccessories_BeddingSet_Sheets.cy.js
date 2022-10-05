import SelectorsForTandW from "../../PageObject/Temple_and_Webster"
describe('Test_Temple_Webster_BedroomAccessories_BeddingSet_Sheets', () => {
  const selectorsForTandW = new SelectorsForTandW;
    before ('Vist the page',()=>{
        cy.visit(Cypress.config().TandW_BedroomAccessories_Sheets);
        if (!Cypress.config().isCookieBarEnabled){}
      })
    it('Visiting Temple_Webster displays the correct title', () => {
      cy.visit(Cypress.config().TandW_BedroomAccessories_Sheets);
      cy.title().should('contain', 'LauraAshley Wild Flower');
      selectorsForTandW.iframe().should('be.visible');
    })
  })