import 'cypress-iframe';
import 'cypress-xpath';
import { sceneLocators } from '../../PageObject/Temple_and_Webster/scene';
import { links } from '../../PageObject/Temple_and_Webster/links';
// class SelectorsForTandW {
//     ifreme () {return cy.get('#tpw_renovai_frame')};
//     }
//     export default SelectorsForTandW

class Test_logic {


    network() {
        cy.intercept('/projects/2', (req) => {
            req.continue((res) => {
                expect(res.body).to.include('My Project')
            })
        })
        cy.intercept('GET', '**/api/v1/collage/check/**').as('request')
        cy.intercept('POST', '**/api/v1/collage/create-sku-userinfo').as('sku')
        cy.visit('https://www.templeandwebster.com.au/Queens-Cotton-Coverlet-Set-CLQT1102.html?refid=Renovai447-CLQT1102_200536374&PiID%5B%5D=200536374');
        cy.wait('@request').its('response.body.response').should('eq', true)
        cy.wait('@sku').then((interception) => {
            cy.log(interception.response.body.sku)
        })
    }

    iframeLoad() {
        cy.scrollTo(0, 1000);
        cy.frameLoaded(locators.iframe);
        cy.wait(8000);
    }

    actionOnScene() {


        cy.iframe(locators.iframe)
            .xpath(locators.itemOnScene, { timeout: 3000 }).click()
            .xpath(locators.closeComponent).click()
            .xpath(locators.alternativeSecondItemInBottom).click()

        cy.iframe(locators.iframe)
            .contains(locators.seeSimilar, { timeout: 1000 }).click()
            .xpath(locators.alternativeFirstItemInBottom).click()
        cy.iframe(locators.iframe)
            .contains(locators.addToCart).click({ force: true });

    }
    TnW_1() {
        this.network();
        this.iframeLoad();
        this.actionOnScene();
    }
    TnW_2() {
        this.network
    }
}
export default Test_logic