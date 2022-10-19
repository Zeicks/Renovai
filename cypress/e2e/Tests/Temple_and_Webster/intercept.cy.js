describe('Test intercept', () => {
    it('Test 1 item', () => {
        const site = 'https://www.templeandwebster.com.au/Admiral-Cocky-Acrylic-Wall-Art-ICON1297.html?refid=Renovai447-ICON1297_200519255&PiID%5B%5D=200519255';
        cy.intercept('GET', site, {
            ICON1297_200519260: response
        })
        cy.visit(site);




    })
})