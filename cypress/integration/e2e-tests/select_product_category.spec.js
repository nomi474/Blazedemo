/** This test spec verifies the functionality of the about us page.
 */
/// <reference types="cypress"/>s
import * as homePage from "../../page-objects/home_page"
import * as monitorsListingPage from "../../page-objects/monitors_listing_page"
import * as monitorDescriptionPage from "../../page-objects/monitor_description_page"
import * as commonPage from "../../page-objects/common_page"
import * as cartPage from "../../page-objects/cart_page"
import * as placeOrder from "../../page-objects/place_order_modal"

describe('Purchasing a monitor by selecting from Montiors category page.', () => {
  
    it('User visits demoblaze website', () => {
      cy.visit("/")
    })
    it('User clicks on "monitors" link from left menu', () => {
        homePage.clickMonitorsCategoryItem();
      })
    it('User selects a monitor to purchase', () => {
      monitorsListingPage.clickMonitorScreenCard();
    })
    it('Click on add to cart', () => {
      monitorDescriptionPage.clickAddToCartBtn();
    })
    it('click ok on pop up window that confirms product was added', () => {
      monitorDescriptionPage.verifyMonitorAddedALert();
    })
    it('User clicks on cart link from header menu', () => {
      commonPage.clickCartMenuItem();
    })
    it('User clicks on Place Order to purchase', () => {
        cartPage.clickPlaceOrderBtn();
    })
    it('User fills in buyer information to purchase then click on purchase', () => {
      placeOrder.placeOrder();
    })
  })