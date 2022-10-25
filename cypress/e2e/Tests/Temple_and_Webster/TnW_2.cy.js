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
        cy.visit(links.TnW_2);
        cy.wait('@request').its(network.haveBody).should('eq', true);
        cy.wait('@sku').then((interception) => {
            cy.log(interception.response.body.sku);
            // Scroll to ifream ,load and wait ifream.
            cy.scrollTo(0, 2800);
            scene.iframeLoad();
        });
    });


    it('Change Item On Scene', () => {

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
                    .xpath(scene.alternativeFirstItemInBottom).first().click();

                // Click on the coverlet set on the scene, pulled out the name of the item.
                cy.iframe(scene.iframe)
                    .xpath(scene.itemOnScene).click()
                    .xpath(scene.nameItemInComponent)
                    .invoke('text')
                    .should((nameAfter) =>

                    // Сompare names (they don't to match).
                    { expect(nameUtil).not.to.eq(nameAfter) });

                // Close component.
                cy.iframe(scene.iframe)
                    .xpath(scene.closeComponent).click();
            })
    });

    //In the sidebar click on first item (See similar) and in bottombar click on first similar item
    it('Change Item From Sidebar', () => {

        cy.iframe(scene.iframe)
            .contains(scene.seeSimilar, { timeout: 2000 }).click()
            .xpath(scene.nameItemInSidebar).first().invoke('text').then((nameUntilSideBar) => {

                cy.iframe(scene.iframe)
                    .xpath(scene.alternativeFirstItemInBottom).first().realClick()
                    .xpath(scene.alternativeFirstItemInBottom).click();

                cy.iframe(scene.iframe)
                    .xpath(scene.nameItemInSidebar)
                    .first()
                    .invoke('text')
                    .should((nameAfterSideBar) => { expect(nameUntilSideBar).not.to.eq(nameAfterSideBar) });
            })

    });

    // Click the "Add to Cart" button in sidebar
    it('Add To Cart From Sidebar ', () => {
        cy.iframe(scene.iframe)
            .contains(scene.addToCart).click({ force: true })
            .contains(scene.addedButton).should('have.text', ' Added ');
    });

    // Change color scheme on scene
    // TODO: add verification
    it('Change color scheme ', () => {

        cy.iframe(scene.iframe)
            .xpath(scene.colourButton).realHover()
            .xpath(scene.itemPalette).first().click({ force: true });
        cy.wait(3000);
    });

    // Click the 'Add all items to cart' button, wait(27 second), checking if the number of added elements matches.
    // TODO: implement waitUntil
    it('Add all items to cart ', () => {
        cy.iframe(scene.iframe)
            .xpath(scene.addAllItemsButton).click();
        cy.wait(27000);
        cy.xpath(scene.countCartItem).should('have.text', '12');

    });

});