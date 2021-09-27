/** This page object file contains locators for the Place order modal
 * and also associated functions.
 */
const locators = {
    purchaseProductForm: () =>  cy.get("#totalm"),
    nameTxt:()=> cy.get("#name"),
    countryTxt: ()=>cy.get("#country"),
    cityTxt: ()=>cy.get("#city"),
    creditCardTxt: ()=>cy.get("#card"),
    monthTxt:()=>cy.get('#month'),
    yearTxt:()=> cy.get("#year"),
    purchaseBtn:()=> cy.contains('Purchase'),
};

export function placeOrder(){
       locators.nameTxt().type("Nauman SHeikh")
       locators.countryTxt().type("USA")
       locators.cityTxt().type("Diamond Bar")
       locators.creditCardTxt().type("4444444444444444")
       locators.monthTxt().type("12")
       locators.yearTxt().type("23")
       locators.purchaseBtn().click()
}

