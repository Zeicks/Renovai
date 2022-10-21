export class Scene {
    iframe = '#renovai-frame-0';
    itemOnScene = '//div[@class="mb-item ng-star-inserted"][1]';
    closeComponent = '//i[@class = "info__x font-icon-exit ng-star-inserted"]';
    alternativeSecondItemInBottom = '//app-alt-card[2]';
    alternativeFirstItemInBottom = '//app-alt-card[1]';
    seeSimilar = 'SEE SIMILAR';
    addToCart = 'ADD TO CART';
    nameItemInComponent = '//div[@class="modal-prod-info"]//div[contains(@class, "__section_titl")]';

    iframeLoad() {
        cy.scrollTo(0, 1000);
        cy.frameLoaded(this.iframe);
        cy.wait(8000);
    }
}
export const scene = new Scene();