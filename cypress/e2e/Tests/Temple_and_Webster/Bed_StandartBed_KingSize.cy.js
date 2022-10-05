import SelectorsForTandW from "../../PageObject/Temple_and_Webster"
describe('Test_Temple_Webster_Bed_StandartBed_KingSize', () => {
    const selectorsForTandW = new SelectorsForTandW;
    before ('Vist the page',()=>{
        cy.visit(Cypress.config().TandW_Bed);
        if (!Cypress.config().isCookieBarEnabled){}
      })
    it('Visiting Temple_Webster displays the correct title', () => {
      cy.visit(Cypress.config().TandW_Bed);
      cy.title().should('contain', 'NordicHouse Leafy Upholstered');
      selectorsForTandW.iframe().should('be.visible');
    })
  })