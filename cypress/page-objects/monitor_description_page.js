const locators = {
    addToCardBtn: ()=> cy.contains('Add to cart'),

}

export function clickAddToCartBtn(){
    locators.addToCardBtn().click();
}

export function verifyMonitorAddedALert(){
    cy.on('window:alert', (str)=>{
        expect(str).to.equal('Product added');
    })
}

