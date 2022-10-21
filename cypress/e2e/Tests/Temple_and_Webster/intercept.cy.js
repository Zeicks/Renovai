Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})
describe('Test intercept', () => {
    it('Test 1 item', () => {
      
        cy.intercept('/projects/2', (req) => {
            req.continue((res) => {
              expect(res.body).to.include('My Project')
            })
          })


        cy.intercept('GET', '**/api/v1/collage/check/**').as('request')
        cy.intercept('POST','**/api/v1/collage/create-sku-userinfo').as('sku')
        cy.visit('https://www.templeandwebster.com.au/Queens-Cotton-Coverlet-Set-CLQT1102.html?refid=Renovai447-CLQT1102_200536374&PiID%5B%5D=200536374');
        cy.wait('@request').its('response.body.response').should('eq', true)
       
        cy.wait('@sku').then((interception)=>{
            cy.log(interception.response.body.sku)
        })




    })
})