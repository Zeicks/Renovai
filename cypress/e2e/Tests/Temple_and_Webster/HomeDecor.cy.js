describe('Test_Temple_Webster_HomeDecor', () => {
    it('Test 1 item', () => {
      cy.visit('https://www.templeandwebster.com.au/Blush-French-Linen-European-Pillowcase-79458-TMPL1585.html?refid=Renovai447-TMPL1585');
      cy.request('https://www.templeandwebster.com.au/Blush-French-Linen-European-Pillowcase-79458-TMPL1585.html?refid=Renovai447-TMPL1585').then( ({ status }) => {
        expect(status).to.eq(200)
      });

      cy.scrollTo(0, 1100);
     if  (cy.get('#tpw_renovai_frame').should('be.visible')){
        cy.log('Test status ok')
     } else (cy.log('Cant create scene'));
    })
  })