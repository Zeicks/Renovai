describe('Test_Temple_Webster_HomeDecor', () => {
    it('Test 1 item', () => {
      cy.visit('https://www.templeandwebster.com.au/Admiral-Cocky-Acrylic-Wall-Art-ICON1297.html?refid=Renovai447-ICON1297_200519255&PiID%5B%5D=200519255');

      cy.request('https://www.templeandwebster.com.au/Admiral-Cocky-Acrylic-Wall-Art-ICON1297.html?refid=Renovai447-ICON1297_200519255&PiID%5B%5D=200519255')
      .then( ({ status }) => {
        expect(status).to.eq(200)
      });

      cy.scrollTo(0, 1100);
     if  (cy.get('#tpw_renovai_frame', {timeout:2000}).should('be.visible')){
        cy.log('Test sucessfful')
     } else (cy.log('Cant create scene Test fail'));
    })

  })