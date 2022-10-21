import { scene } from '../../PageObject/Temple_and_Webster/scene';
import { links } from '../../PageObject/Temple_and_Webster/links';
import { network } from '../../PageObject/Temple_and_Webster/network';
Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})

describe('Temple and Webster MB', () => {

  // Intercepted network for sku , visited the site then write to console sku item.
  before('Get Sku And Visit Site', () => {
    cy.intercept('/projects/2', (req) => {
      req.continue((res) => {
        expect(res.body).to.include('My Project')
      })
    });
    cy.intercept('GET', network.apiRequest).as('request');
    cy.intercept('POST', network.createSkuUserInfo).as('sku');
    cy.visit(links.TnW_1);
    cy.wait('@request').its(network.haveBody).should('eq', true);
    cy.wait('@sku').then((interception) => {
      cy.log(interception.response.body.sku);
    });
  });


  it('Change Item On Scene', () => {

    // Scroll to ifream ,load and wait ifream.
    scene.iframeLoad();

    // Click on the coverlet set on the scene.
    cy.iframe(scene.iframe)
      .xpath(scene.itemOnScene, { timeout: 3000 }).click();

    // Pulled out the name of the item.
    cy.iframe(scene.iframe)
      .xpath(scene.nameItemInComponent)
      .invoke('text')
      .then((nameUtil) => {

        // Close component and in bottom bar click on second similar item.
        cy.iframe(scene.iframe)
          .xpath(scene.closeComponent).click()
          .xpath(scene.alternativeSecondItemInBottom).click();

        // Click on the coverlet set on the scene, pulled out the name of the item.
        cy.iframe(scene.iframe)
          .xpath(scene.itemOnScene).click()
          .xpath(scene.nameItemInComponent)
          .invoke('text').should((nameAfter) =>

          // Сompare names (they don't to match).
          { expect(nameUtil).not.to.eq(nameAfter) });

        // Close component.
        cy.iframe(scene.iframe)
          .xpath(scene.closeComponent).click();
      })
  });

  //In the sidebar click on first item and in bottombar click on first similar item
  it('Change Item From Sidebar', () => {
    cy.iframe(scene.iframe)
      .contains(scene.seeSimilar, { timeout: 2000 }).click()
      .xpath(scene.alternativeFirstItemInBottom).click();
  });

  // Click the "Add to Cart" button in sidebar
  it('Add To Cart From Sidebar ', () => {
    cy.iframe(scene.iframe)
      .contains(scene.addToCart).click({ force: true });
  });
});