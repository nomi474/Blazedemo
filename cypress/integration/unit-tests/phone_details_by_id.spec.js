/** This unit test verifies response values for the api call
 * for the detailed description of a phone product
 */
context('Phone purchase unit test for guest user', () => {
    beforeEach(() => {
        cy.visit("/")
    })
  
    it('Verify product details description', () => {
      // load phone.json fixture file and store
      // in the test context object
      cy.fixture('phone.json').then(productDetails =>{
        cy.verifyProductDetails(productDetails)
      })
    })
  })