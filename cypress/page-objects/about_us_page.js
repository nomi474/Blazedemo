/** This page object file contains locators for the about us page
 * and also associated functions.
 */
/// <reference types="cypress"/>

const locators =  {
    aboutUsVideo: ()=>cy.get("video#example-video_html5_api"),
    closeBtn: ()=>  cy.get("button.btn.btn-secondary[data-dismiss='modal']")
}

export function verifyAboutUsVideo(){
    cy.get("#videoModal").within(()=>{
        cy.get("div.form-group").within(()=>{
            locators.aboutUsVideo().should("exist")
            locators.aboutUsVideo().click({force:true})
        })   
    })
}

export function clickCloseBtn(){
    cy.wait(500)
    cy.get("#videoModal").within(()=>{
        cy.get("div.modal-footer").within(()=>{
            locators.closeBtn().click({force: true})
        })
    })  
}

