export class Scene {
    iframe = '#renovai-frame-0';
    itemOnScene = '//div[@class="mb-item ng-star-inserted"][1]';
    closeComponent = '//i[@class = "info__x font-icon-exit ng-star-inserted"]';
    alternativeSecondItemInBottom = '//app-alt-card[2]';
    alternativeFirstItemInBottom = '//app-alt-card[1]';
    seeSimilar = 'SEE SIMILAR';
    addToCart = 'ADD TO CART';

    iframeLoad() {
        cy.scrollTo(0, 1000);
        cy.frameLoaded(this.iframe);
        cy.wait(8000);
    }
    changeItemOnScene() {
        cy.iframe(this.iframe)
            .xpath(this.itemOnScene, { timeout: 3000 }).click()
            .xpath(this.closeComponent).click()
            .xpath(this.alternativeSecondItemInBottom).click()
    }

    changeItemFromSidebar() {
        cy.iframe(this.iframe)
            .contains(this.seeSimilar, { timeout: 1000 }).click()
            .xpath(this.alternativeFirstItemInBottom).click()
    }
    addToCartFromSidebar() {
        cy.iframe(this.iframe)
            .contains(this.addToCart).click({ force: true });

    }

}
export const scene = new Scene();