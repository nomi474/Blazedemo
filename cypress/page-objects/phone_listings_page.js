/** This page object file contains locators for the phone listings page
 * and also associated functions.
 */
/// <reference types="cypress"/>

export function selectPhone(phoneName){
cy.contains("Phones").click()
cy.contains(phoneName).click()
}

