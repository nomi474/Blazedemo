/** This page object file contains locators for the home page
 * and also associated functions.
 */

const locators = {
    homePageLink:()=> cy.get('a[href="index.html"]'),
    contactLink: ()=>cy.qaTag("#exampleModal"),
    aboutUsLink: ()=>cy.qaTag("#videoModal"),
    cartLink: ()=>cy.get("#cartur"),
    loginLink:()=>cy.get('#login2'),
    signupLink:()=> cy.qaTag("#signInModal"),
    logoutLInk:()=> cy.get('#logout2'),
    phonesCategoryLink:()=> cy.get('[onclick="byCat(\'phone\')"]'),
    laptopsCategoryLink:()=> cy.get('[onclick="byCat(\'notebook\')"]'),
    monitorsCategoryLink:()=> cy.get('[onclick="byCat(\'monitor\')"]'),
};

export function clickPhonesCategoryItem(){
    locators.phonesCategoryLink().click();
}

export function clickLaptopssCategoryItem(){
    locators.laptopsCategoryLink().click();
}

export function clickMonitorsCategoryItem(){
    locators.monitorsCategoryLink().click();
}

export function clickLoginMenuItem(){
    locators.loginLink().should("be.visible")
    locators.loginLink().click();
}

export function clickContactMenuItem(){
    locators.contactLink().should("be.visible")
    locators.contactLink().click();
}

export function clickAboutUsMenuItem(){
    locators.aboutUsLink().should("be.visible")
    locators.aboutUsLink().click();
}

export function clickCartMenuItem(){
    locators.cartLink().should("be.visible")
    locators.cartLink().click();
}

export function clickSignUpMenuItem(){
    locators.signupLink().should("be.visible")
    locators.signupLink().click();
}

export function clickLogoutMenuItem(){
    locators.logoutLInk().should("be.visible")
    locators.logoutLInk().click();
}

export function verifyLogoutMenuItemIsVisible(){
    locators.logoutLInk().should("be.visible")
}

export function verifyLoginMenuItemIsVisible(){
    locators.loginLink().should("be.visible")
}
