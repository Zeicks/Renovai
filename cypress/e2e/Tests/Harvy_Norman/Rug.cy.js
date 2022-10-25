import Test_logic from "../../PageObject/Harvy_Norman/test_logic"
describe('Test_HarvyNorman_Rug_AreaRug_Rectangular.', () => {
    const test_logic = new Test_logic;
    it('Visiting HarvyNorman displays the correct title', () => {
        cy.visit('https://www.harveynorman.ie/homeware/rugs/all-rugs/majestic-forest-230-x-330-cm-rug.html');
        cy.request({
            method: 'GET',
            url: 'https://www.harveynorman.ie/homeware/rugs/all-rugs/majestic-forest-230-x-330-cm-rug.html'
        }).then((res) => {
            expect(res.status).to.eq(200)
        })

        test_logic.cookieAccept()
            .click();
        test_logic.closecbar()
            .click();
        cy.scrollTo(0, 1630);
        test_logic.ifreme()
            .should('be.visible');
    })
})