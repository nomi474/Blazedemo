/** This  test spec covers scenaios related to user login. It verifies message for successful login and 
 * also error messages for incorrect credentials.
*/
import * as loginPage from "../../page-objects/login_modal"
import * as homePage from "../../page-objects/home_page"
import * as commonPage from "../../page-objects/common_page"

context('User logs in to the app.', () => {
  before(() => {
      cy.visit("/")
    // load login.json fixture file and store
    // in the test context object
    cy.fixture('login.json').as('login')
  })

  it('User clicks Login button without entering credentials', () => {
    homePage.clickLoginMenuItem()
    loginPage.clickLoginButton()
    commonPage.verifyNoUsernameOrPasswordMsg()
  })

  it('User enters wrong password', () => {
    loginPage.enterWrongPassword()
    cy.intercept('**/login').as('loginCredentials')
    loginPage.clickLoginButton()
    cy.wait('@loginCredentials')
    loginPage.verifyResponseForWrongPassword()
  })

  it('User enters incorrect username', () => {
    loginPage.enterWrongUsername()
    cy.intercept('**/login').as('loginCredentials')
    loginPage.clickLoginButton()
    cy.wait('@loginCredentials')
    loginPage.verifyResponseForWrongUsername()
  })

  it('User enters valid credentials', () => {
    loginPage.enterValidCredentials()
    cy.intercept('**/login').as('loginCredentials')
    loginPage.clickLoginButton()
    cy.wait('@loginCredentials').then(resp=>{
    loginPage.verifyLoginResponse(resp)   
    homePage.verifyLogoutMenuItemIsVisible()
    })
  })

  
  it('User logs out of the application', () => {
    cy.intercept('**/entries').as('listItems')
    homePage.clickLogoutMenuItem()
    cy.wait('@listItems')
    homePage.verifyLoginMenuItemIsVisible()
  })
})