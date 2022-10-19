describe('Fernish Dallas', () => {

    it('Test chest', () => {
        cy.visit('https://fernish.com/n/items/dressers-marcel-chest-walnut');
        cy.contains('Check Delivery Area').click();
        cy.get('#zip-code').type("75001{enter}")



    })
})