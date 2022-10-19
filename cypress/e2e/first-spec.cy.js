
Cypress.on('fail', (error, runnable) => {
    debugger

    // we now have access to the err instance
    // and the mocha runnable this failed on

    throw error // throw error to have test still fail
})

it('calls the "fail" callback when this test fails', () => {
    // when this cy.get() fails the callback
    // is invoked with the error
    cy.get('element-that-does-not-exist')
})
it('gets the post', () => {
    cy.visit('https://www.templeandwebster.com.au/Admiral-Cocky-Acrylic-Wall-Art-ICON1297.html?refid=Renovai447-ICON1297_200519255&PiID%5B%5D=200519255');
    cy.get('iframe');
})
