// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add("qaTag", target =>{
    cy.get(`[data-target="${target}"]`)
})

Cypress.Commands.add("verifyProductDetails", productDetails =>{
    cy.request({
        method: 'POST',
        url: 'https://api.demoblaze.com/view',
        headers:{
          "content-type": "application/json"
        },
        body: {
          "id" : productDetails.id
        }
      }).then(resp=>{ 
        expect(resp.body.cat).to.eq(productDetails.cat)
        expect(resp.body.id).to.eq(productDetails.id)
        expect(resp.body.img).to.eq(productDetails.img)
        expect(resp.body.price).to.eq(productDetails.price)
        expect(resp.body.title).to.eq(productDetails.title)
        expect(resp.body.desc).to.exist
      })
})
