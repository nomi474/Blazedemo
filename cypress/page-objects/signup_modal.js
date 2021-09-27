/**
 * Page object for Demo Blaze Sign up modal
 */

 const locators = {
    usernameTxt:()=> cy.get('#sign-username'),
    passwordTxt:()=> cy.get('#sign-password'),
    signupBtn:()=>    cy.contains("Sign up")
};

let randomNum = Math.floor(Math.random() * 99999)
let username = "demoblaze" + randomNum

export function enterNewUserCredentials(){
    locators.usernameTxt().should('be.visible')
    locators.usernameTxt().clear().type(username)
    locators.passwordTxt().clear().type("password")
}


export function clickSignupButton(){
    cy.get("div.modal-footer").within(()=>{
        locators.signupBtn().click()
    })
}

export function verifySignupSuccessfulMsg(){
    cy.on("window:alert", text=>{
        expect(text).to.equal("Sign up successful.")
       })
}

export function verifyUserExistsMsg(){
    cy.on("window:alert", text=>{
        expect(text).to.equal("User already exists.")
       })
}

export function enterValidCredentials(){
    locators.usernameTxt().should('be.visible')
    cy.fixture('login.json').then(userDetail =>{
        locators.usernameTxt().clear().type(userDetail.username)
        locators.passwordTxt().clear().type(userDetail.password)
    })
}
