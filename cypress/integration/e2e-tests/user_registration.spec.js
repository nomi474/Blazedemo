/** This  test spec covers scenaios related to user signup. It verifies message for successful signup and 
 * also error message for user already exists.
*/
import * as signupPage from "../../page-objects/signup_modal"
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
    homePage.clickSignUpMenuItem()
    signupPage.clickSignupButton()
    commonPage.verifyNoUsernameOrPasswordMsg()
  })

  it('Enter already existing user name', () => {
    signupPage.enterValidCredentials()
    signupPage.clickSignupButton()
    signupPage.verifyUserExistsMsg()   
  })

  it('Enter new user name and  password', () => {
    signupPage.enterNewUserCredentials()
    signupPage.clickSignupButton()
    signupPage.verifySignupSuccessfulMsg()   
  })
})