import 'cypress-iframe'
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})
describe('Recipe: blogs__iframes', () => {
    it('fetches post using iframes plugin', () => {
        cy.visit('https://www.templeandwebster.com.au/Admiral-Cocky-Acrylic-Wall-Art-ICON1297.html?refid=Renovai447-ICON1297_200519255&PiID%5B%5D=200519255');
        cy.scrollTo(0, 1100);

        cy.frameLoaded('#tpw_renovai_frame')
        cy.iframe('#tpw_renovai_frame').contains('SEE SIMILAR').click();

        cy.log('Text')

    })
})





// const getIframeDocument = () => {
//     return cy
//         .get('#tpw_renovai_frame')
//         .its('0.contentDocument').should('exist')
// }
// const getIframeBody = () => {
//     return
//     cy.get('iframe[#tpw_renovai_frame]')
//         .its('0.contentDocument.body').should('not.be.empty')
//         .then(cy.wrap)
//     // getIframeDocument()
//     //     .its('body').should('not.be.undefined')
//     //     .then(cy.wrap)
// }
// //button[@class = "product-button"]//span[@class = "product-button__text"]

// it('gets the post', () => {

//     cy.visit('https://www.templeandwebster.com.au/Admiral-Cocky-Acrylic-Wall-Art-ICON1297.html?refid=Renovai447-ICON1297_200519255&PiID%5B%5D=200519255')

//     //  getIframeBody().find('//button[@class = "product-button"]//span[@class = "product-button__text"]').should('have.text', 'SEE SIMILAR').click(first)

// })

