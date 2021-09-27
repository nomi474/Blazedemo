/** This unit test verifies response values for the api call
 * for the detailed description of a laptop/notebook product
 */
context('Laptop purchase unit test for guest user', () => {
  beforeEach(() => {
    cy.visit("/")
  })

  it('Verify product details description', () => {
    // load laptop.json fixture file and store
    // in the test context object
    cy.fixture('laptop.json').then(productDetails =>{
      cy.verifyProductDetails(productDetails)
    })
  })
})