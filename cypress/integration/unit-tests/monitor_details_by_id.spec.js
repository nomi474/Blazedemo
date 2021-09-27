
/** This unit test verifies response values for the api call
 * for the detailed description of a monitor product
 */
context('Monitor purchase unit test for guest user', () => {
    beforeEach(() => {
        cy.visit("/")
    })
  
    it('Verify product details description', () => {
      // load monitor.json fixture file and store
      // in the test context object
      cy.fixture('monitor.json').then(productDetails =>{
        cy.verifyProductDetails(productDetails)
      })
    })
  })