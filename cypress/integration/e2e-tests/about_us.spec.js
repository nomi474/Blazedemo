/** This test spec verifies the functionality of the about us page.
 */
/// <reference types="cypress"/>s
import * as homePage from "../../page-objects/home_page"
import * as aboutUsPage from "../../page-objects/about_us_page"

context('User logs in to the app.', () => {
  
    it('User clicks on About us menu item', () => {
      cy.visit("/")
      homePage.clickAboutUsMenuItem()
    })
  
    it('Verify about us video exists', () => {
        aboutUsPage.verifyAboutUsVideo()
      })

    it('User closes about us modal', () => {
        aboutUsPage.clickCloseBtn()
    })
  })