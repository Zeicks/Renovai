import { scene } from '../../PageObject/Temple_and_Webster/scene';
import { links } from '../../PageObject/Temple_and_Webster/links';
import { network } from '../../PageObject/Temple_and_Webster/network';
Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})

describe('Temple and Webster MB', () => {


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

  // Scroll to ifream ,load and waite ifream
  it('Change Item On Scene', () => {
    scene.iframeLoad();
    cy.iframe(scene.iframe)
      .xpath(scene.itemOnScene, { timeout: 3000 }).click()
      .xpath(scene.closeComponent).click()
      .xpath(scene.alternativeSecondItemInBottom).click();
  });

  it('Change Item From Sidebar', () => {
    cy.iframe(scene.iframe)
      .contains(scene.seeSimilar, { timeout: 1000 }).click()
      .xpath(scene.alternativeFirstItemInBottom).click();
  });

  it('Add To Cart From Sidebar ', () => {
    cy.iframe(scene.iframe)
      .contains(scene.addToCart).click({ force: true });
  });
});