import Links from "../Harvy_Norman/links.json"

class Test_logic {

    ifreme() { return cy.get('#renovai-frame-0') };

    cookieAccept() { return cy.get('#onetrust-accept-btn-handler') };

    closecbar() { return cy.get('#cbar_POP2_28703>.cbar-close-button') };

    randomURL() {
        // const myArray = JSON.stringify(Links);
        const myArray = [
            "https://www.harveynorman.ie/furniture/dining-furniture/dining-chairs/addison-dining-chair-grey.html",
            "https://www.harveynorman.ie/sofas/chairs-and-footstools/armchairs/indy-armchair-colour-options.html",
            "https://www.harveynorman.ie/furniture/dining-furniture/dining-chairs/thora-dining-chair-grey.html",
            "https://www.harveynorman.ie/sofas/chairs-and-footstools/swivel-chairs/gabie-accent-chair-with-swivel-tan.html",
            "https://www.harveynorman.ie/furniture/dining-furniture/bar-stools-and-bar-tables/cl-862-b-onda-barstool-blue.html",
            "https://www.harveynorman.ie/furniture/dining-furniture/benches/elsa-velvet-bench-blue-velvet.html",
            "https://www.harveynorman.ie/furniture/dining-furniture/bar-stools/billie-bar-stool-camel.html",
            "https://www.harveynorman.ie/furniture/dining-furniture/bar-stools-and-bar-tables/plump-bar-stool-taupe.html",
            "https://www.harveynorman.ie/furniture/dining-furniture/dining-chairs/mainz-dining-chair-brown.html",
            "https://www.harveynorman.ie/sofas/leather-sofas/borgo-armchair-leather-grey.html",
            "https://www.harveynorman.ie/furniture/dining-furniture/bar-stools-and-bar-tables/aletta-barstool-dark-grey-high.html",
            "https://www.harveynorman.ie/furniture/dining-furniture/dining-chairs/belroy-dining-chair.html",
            "https://www.harveynorman.ie/furniture/dining-furniture/bar-stools-and-bar-tables/saxon-velvet-counter-stool-blush.html",
            "https://www.harveynorman.ie/sofas/chairs-and-footstools/armchairs/alto-armchair-electrical-recliner-fabric-colour-options.html",
            "https://www.harveynorman.ie/sofas/leather-sofas/kelli-1-seater-recliner-black.html",
            "https://www.harveynorman.ie/furniture/dining-furniture/dining-chairs/wilton-dining-chair-oak-leg-ivory.html",
            "https://www.harveynorman.ie/furniture/dining-furniture/dining-chairs/addison-dining-chair-oat.html",
            "https://www.harveynorman.ie/sofas/chairs-and-footstools/armchairs/estuary-armchair-colour-options.html",
            "https://www.harveynorman.ie/sofas/chairs-and-footstools/miso-ottoman-pink.html",
            "https://www.harveynorman.ie/furniture/dining-furniture/dining-chairs/dion-dining-chair-graphite.html",
            "https://www.harveynorman.ie/furniture/dining-furniture/dining-chairs/modena-dining-chair-grey.html",
            "https://www.harveynorman.ie/sofas/chairs-and-footstools/oasis-1-seater.html",
            "https://www.harveynorman.ie/furniture/dining-furniture/bar-stools-and-bar-tables/aletta-barstool-dark-grey-65cm.html",
            "https://www.harveynorman.ie/furniture/dining-furniture/benches/otello-bench-taupe.html",
            "https://www.harveynorman.ie/furniture/dining-furniture/bar-stools-and-bar-tables/wilma-bar-stool-grey.html",
            "https://www.harveynorman.ie/furniture/dining-furniture/dining-chairs/austin-dining-chair-grey.html",
            "https://www.harveynorman.ie/furniture/dining-furniture/bar-stools-and-bar-tables/leo-barstool-grey.html",
            "https://www.harveynorman.ie/furniture/dining-furniture/dining-chairs/dawson-dining-chair-black.html",
            "https://www.harveynorman.ie/furniture/dining-furniture/bar-stools/billie-bar-stool-anthracite.html",
            "https://www.harveynorman.ie/furniture/dining-furniture/dining-chairs/saxon-dining-chair-grey.html",
            "https://www.harveynorman.ie/big-sale/faygo-dining-chair-black.html",
            "https://www.harveynorman.ie/sofas/chairs-and-footstools/footstools/miso-ottoman-colour-options.html",
            "https://www.harveynorman.ie/furniture/dining-furniture/dining-chairs/bianca-dining-chair-yellow.html",
            "https://www.harveynorman.ie/sofas/chairs-and-footstools/kayla-armchair-colour-options.html",
            "https://www.harveynorman.ie/furniture/dining-furniture/bar-stools-and-bar-tables/zack-counter-stool-blue.html",
            "https://www.harveynorman.ie/furniture/dining-furniture/benches/saxon-velvet-bench-grey.html",
            "https://www.harveynorman.ie/sofas/chairs-and-footstools/armchairs/zinc-armchair-colour-option.html",
            "https://www.harveynorman.ie/furniture/dining-furniture/bar-stools-and-bar-tables/daisy-barstool-high-grey.html",
            "https://www.harveynorman.ie/furniture/dining-furniture/dining-chairs/dion-dining-chair-antique-gold.html",
            "https://www.harveynorman.ie/furniture/dining-furniture/dining-chairs/murta-dining-chair-copper.html",
            "https://www.harveynorman.ie/sofas/chairs-and-footstools/armchairs/shaw-kids-chair-multicolour.html",
            "https://www.harveynorman.ie/sofas/chairs-and-footstools/cove-kids-chair-floral.html",
            "https://www.harveynorman.ie/sofas/chairs-and-footstools/footstools/franco-footstool-leather-colour-options.html",
            "https://www.harveynorman.ie/bedroom/bedroom-furniture/bedroom-chairs/velvet-bedroom-chair-sapphire-blue.html",
            "https://www.harveynorman.ie/furniture/dining-furniture/dining-chairs/elise-dining-chair-black.html",
            "https://www.harveynorman.ie/furniture/dining-furniture/dining-chairs/ceres-dining-chair-slat-back-colourtrend.html",
            "https://www.harveynorman.ie/furniture/dining-furniture/bar-stools-and-bar-tables/zack-barstool-tan.html",
            "https://www.harveynorman.ie/sofas/chairs-and-footstools/armchairs/wendy-chair-grey.html",
            "https://www.harveynorman.ie/bedroom/bedroom-furniture/storage-solutions/elona-storage-bench-pink.html",
            "https://www.harveynorman.ie/furniture/dining-furniture/dining-chairs/otello-dining-chair-taupe.html",
            "https://www.harveynorman.ie/sofas/chairs-and-footstools/swivel-chairs/levi-recliner-with-footstool-grey.html",
            "https://www.harveynorman.ie/sofas/chairs-and-footstools/armchairs/fantasia-armchair-sofabed.html",
            "https://www.harveynorman.ie/furniture/dining-furniture/dining-chairs/bianca-dining-chair-olive.html",
            "https://www.harveynorman.ie/furniture/dining-furniture/dining-chairs/addison-dining-chair-rose.html",
            "https://www.harveynorman.ie/furniture/dining-furniture/dining-chairs/dion-dining-chair-silver.html",
            "https://www.harveynorman.ie/sofas/chairs-and-footstools/footstools/barnes-legend-footstool.html",
            "https://www.harveynorman.ie/furniture/dining-furniture/dining-chairs/naomi-dining-chair-green.html",
            "https://www.harveynorman.ie/sofas/chairs-and-footstools/armchairs/alto-armchair-fabric-colour-options.html",
            "https://www.harveynorman.ie/sofas/chairs-and-footstools/armchairs/falkon-armchair-manual-recliner.html",
            "https://www.harveynorman.ie/furniture/dining-furniture/dining-chairs/clem-dining-chair-green.html",
            "https://www.harveynorman.ie/sofas/chairs-and-footstools/armchairs/fantasia-armchair.html",
            "https://www.harveynorman.ie/furniture/dining-furniture/dining-chairs/lynn-dining-chair-blue.html",
            "https://www.harveynorman.ie/sofas/chairs-and-footstools/armchairs/falkon-armchair-electric-recliner.html",
            "https://www.harveynorman.ie/furniture/dining-furniture/bar-stools-and-bar-tables/saxon-velvet-bar-stool-grey-36080008.html",
            "https://www.harveynorman.ie/furniture/home-office-en-2/office-chairs/polly-office-chair-black.html",
            "https://www.harveynorman.ie/sofas/chairs-and-footstools/armchairs/penny-armchair-electric-recliner-fabric-colour-options.html",
            "https://www.harveynorman.ie/sofas/chairs-and-footstools/armchairs/faye-armchair.html",
            "https://www.harveynorman.ie/sofas/chairs-and-footstools/footstools/zola-footstool.html",
            "https://www.harveynorman.ie/sofas/leather-sofas/penny-1-seater-electric-recliner-blue.html"
        ]
        const rand = Math.floor(Math.random() * myArray.length);
        const rUrl = myArray[rand];
        return rUrl
    };

    test_for_be_visible_chairs() {
        const thisPage = this.randomURL()
        cy.visit(thisPage);

        cy.request({
            method: 'GET',
            url: (thisPage)
        }).then((res) => {
            expect(res.status).to.eq(200)
        })
        this.cookieAccept().click();
        this.closecbar().click();
        cy.scrollTo(0, 1630);
        return this.ifreme().should('be.visible')
    }
}
export default Test_logic