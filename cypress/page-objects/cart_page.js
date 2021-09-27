/**
 * Page object for Demo Blaze cart page
 */

export function clickPlaceOrderBtn(){
   cy.contains("Place Order").click();
}

