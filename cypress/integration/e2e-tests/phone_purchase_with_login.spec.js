
/** This  test spec covers end to end scenaio related to phone purchase for a logged in customer.
*/
import * as loginPage from "../../page-objects/login_modal"
import * as homePage from "../../page-objects/home_page"
import * as phoneListings from "../../page-objects/phone_listings_page"
import * as phoneDesc from "../../page-objects/phone_description_page"
import * as cartCheckout from "../../page-objects/cart_page"
import * as placeOrder from "../../page-objects/place_order_modal"
import * as orderConfirmation from  "../../page-objects/order_confirmation_modal"

context('User logs in to the app.', () => {
  before(() => {
    cy.clearCookies()
      cy.visit("/")
    // load login.json fixture file and store
    // in the test context object
    cy.fixture('login.json').as('login')
  }) 
  beforeEach(()=>{
    Cypress.Cookies.preserveOnce(
      "tokenp_",
      "user"
    )
  })
  let desc = "The Samsung Galaxy S6 is powered by 1.5GHz octa-core Samsung Exynos 7420\n" +
             " processor and it comes with 3GB of RAM. The phone packs 32GB of \n" +
             "internal storage cannot be expanded. "
  it('User enters valid credentials', () => {
    homePage.clickLoginMenuItem()
    loginPage.enterValidCredentials()
    cy.intercept('**/login').as('loginCredentials')
    loginPage.clickLoginButton()
    cy.wait('@loginCredentials').then(resp=>{
    loginPage.verifyLoginResponse(resp)   
    })
  })

  it('User selects a phone to add to cart', () => {
    phoneListings.selectPhone("Samsung galaxy s6")
  })

  it('Verify phone details', () => {
    phoneDesc.verifyPhoneImage("imgs/galaxy_s6.jpg")
    phoneDesc.verifyPhonePrice("$360")
    phoneDesc.verifyProductDescription(desc)
  })

  it('User adds selected phone to cart', () => {
    phoneDesc.clickAddToCartBtn()
    phoneDesc.verifyProductAddedMsg()
  })

  
  it('User goes to cart page', () => {
    homePage.clickCartMenuItem()
  })

  it('User clicks place oredr button', () => {
    cartCheckout.clickPlaceOrderBtn()
  })

  it('User places order for the phone', () => {
    placeOrder.placeOrder()
    orderConfirmation.verifyOrderConfirmationDetails()
  })
})