export class Scene {
    iframe = '#renovai-frame-0';
    itemOnScene = '//div[@class="mb-item ng-star-inserted"][1]';
    tableOnScene = '//div[contains(@class,"mb-item_table")]';
    closeComponent = '//i[@class = "info__x font-icon-exit ng-star-inserted"]';
    alternativeFirstItemInBottom = '//app-alt-card[1]';
    alternativeItemInBottom = '//div[@class="product-card__overlay cur-p"]';

    seeSimilar = 'SEE SIMILAR';
    addToCart = 'ADD TO CART';
    addedButton = 'Added';
    nameItemInComponent = '//div[@class="modal-prod-info"]//div[contains(@class, "__section_titl")]';
    nameItemInSidebar = '//div[@class= "product-title__text"]';
    itemPalette = '//div[@class = "item__palette"]';
    colourButton = '//div[@class="item item_templeandwebster ng-star-inserted"]';
    addAllItemsButton = '//span[text() = "Add all items to cart"]';
    countCartItem = '//span[@class = "checkout_bubble js-basket-count"]';
    componentJastAMoment = '//div[@class ="wf-modal-content clearfix share_border_all centertext"]';

    iframeLoad() {

        cy.frameLoaded(this.iframe);
        cy.wait(8000);
    }
}
export const scene = new Scene();