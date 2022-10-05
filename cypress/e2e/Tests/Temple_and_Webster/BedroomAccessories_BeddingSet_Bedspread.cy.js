import SelectorsForTandW from "../../PageObject/Temple_and_Webster"
describe('Test_Temple_Webster_BedroomAccessories_BeddingSet_Bedspread', () => {
  const selectorsForTandW = new SelectorsForTandW;
    before ('Vist the page',()=>{
        cy.visit(Cypress.config().TandW_BedroomAccessories_Bedspread);
        if (!Cypress.config().isCookieBarEnabled){}
      })
    it('Visiting Temple_Webster displays the correct title', () => {
      cy.visit(Cypress.config().TandW_BedroomAccessories_Bedspread);
      cy.title().should('contain', 'Queens Cotton Coverlet');
      selectorsForTandW.iframe().should('be.visible');
    })
  })