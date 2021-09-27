/** This page object file contains locators for the order confirmation modal
 * and also associated functions.
 */
const locators = {
    confirmModal: ()=>cy.get("div.sweet-alert.showSweetAlert.visible"),
    thanksLbl: () =>  cy.get("h2"),
    detailsLbl:()=> cy.get("p"),
    okBtn:()=> cy.contains('OK'),
};

export function verifyOrderConfirmationDetails(){
        locators.confirmModal().within(()=>{
            locators.thanksLbl().then(thxText=>{
                expect(thxText.text()).to.eq("Thank you for your purchase!")
            })
            locators.detailsLbl().should("contain","Id:")
            locators.detailsLbl().should("contain","Amount:")
            locators.detailsLbl().should("contain", "Card Number")
            locators.detailsLbl().should("contain", "Name")
            locators.detailsLbl().should("contain", "Date")
        })
       locators.okBtn().click()
}

