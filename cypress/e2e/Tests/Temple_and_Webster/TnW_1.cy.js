import 'cypress-iframe';
import 'cypress-xpath'
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})
describe('Temple and Webster MB', () => {
    const token = "'body > app-root:nth-child(3) > app-shell:nth-child(2) > div:nth-child(1) > perfect-scrollbar:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > app-final:nth-child(2) > app-mode-default:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > app-scene-mb:nth-child(1) > div:nth-child(1) > div:nth-child(2)'";
    it('Test coverlet set', () => {
        cy.visit('https://www.templeandwebster.com.au/Queens-Cotton-Coverlet-Set-CLQT1102.html?refid=Renovai447-CLQT1102_200536374&PiID%5B%5D=200536374');
        cy.scrollTo(0, 1000);

        cy.frameLoaded('#renovai-frame-0');
        cy.wait(8000);
        cy.iframe('#renovai-frame-0')
            .xpath('//div[@class="mb-item ng-star-inserted"][1]', { timeout: 3000 }).click()
            .xpath('//i[@class = "info__x font-icon-exit ng-star-inserted"]').click()
            .xpath('//app-alt-card[2]').click();

        cy.iframe('#renovai-frame-0').contains('SEE SIMILAR').click()
            .xpath('//app-alt-card[1]').click();






        // cy.iframe('#renovai-frame-0').get(token, { timeout: 3000 }).click();
        //

        //cy.iframe('.mb-item.ng-star-inserted.__web-inspector-hide-shortcut__').click();
        // xpath for BA //div[@class="mb-item ng-star-inserted"][2]
    })
})