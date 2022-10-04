const locators = {
    cartMenuItem: ()=> cy.get('#cartur'),
}

export function verifyNoUsernameOrPasswordMsg(){
    cy.on("window:alert", text=>{
    expect(text).to.equal("Please fill out Username and Password.")
    })
}

export function clickCartMenuItem(){
    locators.cartMenuItem().click();
}
