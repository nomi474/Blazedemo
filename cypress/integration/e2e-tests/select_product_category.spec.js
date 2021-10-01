/** This test spec verifies the functionality of the about us page.
 */
/// <reference types="cypress"/>s
import * as homePage from "../../page-objects/home_page"
import * as aboutUsPage from "../../page-objects/about_us_page"

context('Purchasing a monitor by selecting from Montiors category page.', () => {
  
    it('User visits demoblaze website', () => {
      cy.visit("/")
      homePage.clickAboutUsMenuItem()
    })
    it('User clicks on "monitors" link from left menu', () => {
        aboutUsPage.verifyAboutUsVideo()
      })
    it('User selects a monitor to purchase', () => {
        aboutUsPage.clickCloseBtn()
    })
    it('Click on add to cart', () => {
    })
    it('click ok on pop up window that confirms product was added', () => {
    })
    it('User clicks on cart link from header menu', () => {
    })
    it('User clicks on Place Order to purchase', () => {
    })
    it('User fills in buyer information to purchase then click on purchase'), () => {
    })
    
  })