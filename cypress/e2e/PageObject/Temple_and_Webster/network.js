export class Network {
    apiRequest = '**/api/v1/collage/check/**';
    createSkuUserInfo = '**/api/v1/collage/create-sku-userinfo';
    haveBody = 'response.body.response';
    sku = '.response.body.sku';

    interceptSKU() {
        cy.intercept('/projects/2', (req) => {
            req.continue((res) => {
                expect(res.body).to.include('My Project')
            })
        })
        cy.intercept('GET', this.apiRequest).as('request')
        cy.intercept('POST', this.createSkuUserInfo).as('sku')
    }

    getSKU() {
        cy.wait('@request').its(this.haveBody).should('eq', true)
        cy.wait('@sku').then((interception) => {
            cy.log(this.sku)
        })
    }
}
export const network = new Network();


