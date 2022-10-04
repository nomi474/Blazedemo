const locators = {
    prodOneLink: () => cy.get('h4 > a[href="prod.html?idp_=10"]'),
}

export function clickMonitorScreenCard(){
    locators.prodOneLink().click();
}
