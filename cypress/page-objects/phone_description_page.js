/** This page object file contains locators for the phone description page
 * and also associated functions.
 */
/// <reference types="cypress"/>
const locators = {
   phoneTitle: ()=> cy.get("#tbodyid > h2.name"),
   phonePrice: ()=> cy.get("#tbodyid > h3.price-container"),
   includesTaxLbl: ()=> cy.get("#tbodyid > h3.price-container >  small"),
   phoneDescLbl:()=>cy.get("#more-information > strong"),
   phoneDescMsg: ()=>cy.get("#more-information > p"),
   addToCartBtn: ()=>cy.get(""),
};


export function verifyPhoneImage(imgLink){
   cy.get(`img[src="${imgLink}"]`)
}

export function verifyPhonePrice(phonePrice){
  locators.phonePrice().then(price=>{
     expect(price.text()).to.eq(`${phonePrice} *includes tax`)
  })

}

export function verifyProductDescription(desc){
   locators.phoneDescLbl().then(descLbl=>{
      expect(descLbl.text()).to.eq("Product description")
   })
   locators.phoneDescMsg().then(descMsg=>{
      expect(descMsg.text()).to.eq(desc)
   })
}

export function clickAddToCartBtn(){
   cy.contains("Add to cart").click()
}

export function verifyProductAddedMsg(){
   cy.on("window:alert", text=>{
      expect(text).to.equal("Product added.")
   })
}
