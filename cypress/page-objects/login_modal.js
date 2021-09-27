/**
 * Page object for Demo Blaze Login modal
 */

const locators = {
    loginLink:() =>cy.get('#login2'),
    loginSuccessfulMsg:() =>'',
    usernameTxt:()=> cy.get('#loginusername'),
    passwordTxt:()=> cy.get('#loginpassword'),
    loginBtn:()=>    cy.contains("Log in"),
}

export function enterValidCredentials(){
    locators.usernameTxt().should('be.visible')
    cy.fixture('login.json').then(userDetail =>{
        locators.usernameTxt().clear().type(userDetail.username)
        locators.passwordTxt().clear().type(userDetail.password)
    })
}

export function enterWrongPassword(){
    locators.usernameTxt().should('be.visible')
    cy.fixture('login.json').then(userDetail =>{
        locators.usernameTxt().clear().type(userDetail.username)
        locators.passwordTxt().clear().type("password")
    })
}

export function enterWrongUsername(){
    locators.usernameTxt().should('be.visible')
    cy.fixture('login.json').then(userDetail =>{
        locators.usernameTxt().clear().type("blazedem")
        locators.passwordTxt().clear().type(userDetail.password)
    })
}

export function clickLoginButton(){
    cy.get("div.modal-footer").within(()=>{
        locators.loginBtn().click()
    })
}

export function verifyLoginResponse(resp){
    expect(resp.response.body).to.contain("Auth_token:")
}

export function verifyResponseForWrongPassword(){
    cy.on("window:alert", text=>{
     expect(text).to.equal("Wrong password.")
    })
}

export function verifyResponseForWrongUsername(){
    cy.on("window:alert", text=>{
    expect(text).to.equal("User does not exist.")
    })
}

export function verifyNoUsernameOrPasswordMsg(){
    cy.on("window:alert", text=>{
    expect(text).to.equal("Please fill out Username and Password.")
    })
}
