class Test_logic_for_Mobly {

    cookieAccept(){

        if(cy.get('#privacytools-banner-consent').should('be.visible')){
            cy.get('#dm876A > .dp-bar-button', {timeout:2000}).click();
        } else  ( cy.log('ok'));

}


}

export default Test_logic_for_Mobly