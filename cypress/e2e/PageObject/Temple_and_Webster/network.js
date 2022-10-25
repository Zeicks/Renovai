export class Network {
    apiRequest = '**/api/v1/collage/check/**';
    createSkuUserInfo = '**/api/v1/collage/create-sku-userinfo';
    haveBody = 'response.body.response';
    sku = '.response.body.sku';

}
export const network = new Network();


